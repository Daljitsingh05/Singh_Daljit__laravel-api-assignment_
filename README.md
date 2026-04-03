# Vue AJAX Assignment – Video Games App 🎮

## 📌 Project Overview

This project is a Vue.js frontend connected to a Laravel API. It displays a list of video games and allows users to click on a game to view detailed information dynamically without reloading the page.

---

## 🛠️ Technologies Used

* Vue.js (CDN)
* Laravel (REST API)
* HTML5, CSS3, JavaScript
* Fetch API
* LocalStorage

---

## 🚀 Features

* Fetch video games from API
* Display dynamic list using Vue (`v-for`)
* Click on a game to view detailed information
* Second API call for individual game details
* Loading indicators and error handling
* Data persistence using LocalStorage
* Responsive layout (mobile to desktop)

---

## 📂 Project Structure

```
/frontend
   ├── index.html
   ├── css/style.css
   └── js/main.js

/backend
   ├── Laravel API
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup (Laravel)

1. Navigate to backend folder:

```
cd backend
```

2. Install dependencies:

```
composer install
```

3. Create environment file:

```
copy .env.example .env
```

4. Update `.env` file:

```
DB_DATABASE=videogames
DB_USERNAME=root
DB_PASSWORD=
```

5. Generate application key:

```
php artisan key:generate
```

6. Run migrations and seed database:

```
php artisan migrate
php artisan db:seed
```

7. Start Laravel server:

```
php artisan serve
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### 🔹 Frontend Setup

1. Open frontend folder
2. Open `index.html` in browser OR use Live Server
3. Ensure backend server is running

---

## 🔗 API Endpoints

* Get all video games:

```
http://127.0.0.1:8000/api/video-games
```

* Get single video game:

```
http://127.0.0.1:8000/api/video-games/{id}
```

---

## 💾 LocalStorage Implementation

* Stores fetched video game data
* Reduces API calls on reload
* Improves performance

---

## 🧪 Testing

* Start backend server
* Open frontend
* Verify:

  * Game list loads
  * Click shows details
  * Refresh retains data (LocalStorage)
  * No console errors

---

## 📦 Submission Notes

* Includes `.env` file
* Includes database `.sql` file
* Uses proper Git branches:

  * `main`
  * `des.ds.ui`
  * `dev.ds.script`

---


