# CarePlus — Phase 2 (React basics)

Simple React site for **CSCI390 Web Programming**: **Home**, **About**, **Services**, **Contact**. Phase 1 HTML is in `phase1-static/`.

## Stack

React 18, Vite, React Router, plain CSS (responsive: flex + wrap).

## Database + login (XAMPP)

1. Install [XAMPP](https://www.apachefriends.org/) and start **Apache** + **MySQL**.
2. Copy the folder `careplus-api` to your XAMPP web root, for example:
   - `C:\xampp\htdocs\careplus-api\`
   - You must be able to open `http://localhost/careplus-api/init_db.php` in the browser.
3. Open **`http://localhost/careplus-api/init_db.php` once** — creates `users` + **`doctors`** tables and user **`admin`** / **`1234`**.
4. **`doctors.php`**: `GET` lists doctors, `POST` JSON `{ "full_name", "specialty", "phone" }` adds a row (used by the React **Doctors** page).
5. Run the React app with `npm run dev`. Requests go to **`/api/...`** (Vite proxy → `careplus-api`).
6. **Login** (`/#/login`): `admin` / `1234`. **Doctors** (`/#/doctors`): add doctors to the database.

If your MySQL `root` user has a password, edit `careplus-api/config.php` and `careplus-api/init_db.php` (`$DB_PASS`).

Optional: import `database/schema.sql` in phpMyAdmin instead of using `init_db.php` (you still need a user row; easiest is to run `init_db.php`).

For a static build (`npm run build`) without the Vite proxy, create a `.env` file from `.env.example` and set `VITE_API_BASE=http://localhost/careplus-api`.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (e.g. `http://localhost:5173/#/`). Routes use a **`#`** in the URL on purpose (`HashRouter`) so navigation works from XAMPP subfolders and static hosting without extra server rules.

Build: `npm run build` → folder `dist/` for Netlify / Vercel / GitHub Pages.

If GitHub Pages uses a subfolder, set `base` in `vite.config.js` to your repo name (see comment in that file).

## Screenshots

Put PNGs in `docs/screenshots/` and add them to this README for your report.

## Authors

Phase 1: Waed Hajj & Fatima Zbeeb (`phase1-static/`). Phase 2: React version of CarePlus.
