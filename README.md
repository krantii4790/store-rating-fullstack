# 📦 Store Rating Application

A full-stack Store Rating System where users can rate stores, store owners can view ratings, and admins can manage the system.
Built using React.js, Node.js, Express, MySQL, JWT Authentication.

---
🚀 **Features**

+ 👤 User

  Register & Login

  View all stores

  Give star-based ratings ⭐

  Submit ratings

  Secure access with JWT

+ 🏪 Store Owner

     Login securely

    View owned store

   See average rating

   View individual user ratings

+ 🛠 Admin

  Login with admin role

  View all users and stores

  Manage system data (role-based access)

  ---

# 🧱 Tech Stack

**Frontend**

React.js

Axios

React Router

Custom CSS (auth, navbar, cards)

**Backend**

Node.js

Express.js

MySQL

JWT Authentication

Role-based Authorization

---

# 📁 Project Structure
```
store-rating-project/
│
├── store-rating-backend/
│   ├── src/
|   |   ├── public/
│   |   |     └── index.html
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── adminController.js
│   │   │   ├── storeOwnerController.js
│   │   │   └── userController.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   └── roleMiddleware.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── adminRoutes.js
│   │   │   ├── storeOwnerRoutes.js
│   │   │   └── userRoutes.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── store-rating-frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── LogoutButton.js
│   │   │   ├── ProtectedRoute.js
│   │   │   └── StarRating.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── UserDashboard.js
│   │   │   ├── StoreOwnerDashboard.js
│   │   │   └── AdminDashboard.js
│   │   ├── styles/
│   │   │   ├── app.css
│   │   │   └── auth.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```
---

# 🔐 Authentication Flow

JWT token generated on login

Token stored in localStorage

Sent in Authorization header

Role-based route protection

# 📡 API Endpoints

Auth

POST /api/auth/signup

POST /api/auth/login

User

GET /api/user/stores

POST /api/user/rate

Store Owner

GET /api/store-owner/dashboard

Admin

GET /api/admin/dashboard

---

# ▶️ How to Run the Project
```
Backend Setup

cd store-rating-backend
npm install

Configure Database

Create a .env file inside store-rating-backend and add:

PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=store_rating_db

JWT_SECRET=your_jwt_secret_key

Start the backend server:

npm start

Backend will run on:

http://localhost:5000

Frontend Setup

cd store-rating-frontend
npm install
npm start


Frontend will run on:

http://localhost:3000
```
---

# 🔐 Authentication & Authorization

JWT-based authentication

Role-based access control:

ADMIN

STORE_OWNER

USER

Protected routes implemented on both frontend and backend

---

**Open browser:**

http://localhost:3000

<img width="1336" height="997" alt="Screenshot (5457)" src="https://github.com/user-attachments/assets/f031298e-473d-41ea-93b9-cb05c4c61e62" />

---

Register Page

<img width="1334" height="1012" alt="Screenshot (5447)" src="https://github.com/user-attachments/assets/caf8f921-6274-42f8-97e7-2f90339858bc" />

---

🔐 Login Page

<img width="1347" height="1011" alt="Screenshot (5448)" src="https://github.com/user-attachments/assets/dc118b71-c05d-4757-8b44-8ebc8d21c4b0" />

---

🧑 User Dashboard

<img width="1920" height="953" alt="Screenshot (5453)" src="https://github.com/user-attachments/assets/cdb82d75-0f17-4314-bb39-733a14922e89" />

<img width="1834" height="939" alt="Screenshot (5454)" src="https://github.com/user-attachments/assets/32fa3f21-0aff-4fca-b351-97cab3c6cfb1" />

<img width="1879" height="1014" alt="Screenshot (5455)" src="https://github.com/user-attachments/assets/a66683c9-b1b3-4e10-894e-5296ff7fc0aa" />

---
🏪 Store Owner Dashboard

<img width="1920" height="1080" alt="Screenshot (5456)" src="https://github.com/user-attachments/assets/242ceef2-b0b8-4790-ae27-1e02da1ed7f2" />

---

✅ **Status**

✔ Authentication Working

✔ Role-based dashboards

✔ Ratings submission

✔ Clean UI

---

👨‍💻 **Author**

Krantikumar Dilip Patil

Full Stack Developer 
