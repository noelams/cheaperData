<!-- # cheaperData
A simple site for buying data at a cheaper price -->

#CheaperData
CheaperData is a web application that helps users compare and purchase affordable data plans across various network providers. This project is targeted towards Nigerian users, providing real-time data pricing, secure payment options, and personalized recommendations.

#Features
Compare data plans from different network providers.
View real-time data pricing.
User authentication (Login & Signup).
Secure payment processing.
User account management.
Simple and responsive design.

#Tech Stack
##Frontend:

React
Vite
React Router
Axios
CSS

##Backend:

Node.js
Express
MongoDB
JWT for authentication
bcryptjs for password encryption
Mongoose for database modeling

#Getting Started
##Prerequisites
Make sure you have the following installed:

Node.js
MongoDB (You can use MongoDB Atlas as an alternative)

#Installation
##Clone the Repository:

```bash
git clone https://github.com/your-username/CheaperData.git
cd CheaperData
```

##Backend Setup:

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a .env file in the backend folder and add the following:

```makefile
PORT=5000
MONGO_URI=your-mongodb-connection-string
MY_SECRET_KEY=your-jwt-secret-key
```

Start the backend server:

```bash
npm start
```

##Frontend Setup:

Navigate to the frontend folder:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend server:

```bash
npm run dev
```

Access the Application: The application should be running on:

Frontend: http://localhost:5173
Backend: http://localhost:5000

#Folder Structure

```arduino
CheaperData/
├── backend/
│   ├── routes/
│   │   ├── auth.js
│   ├── models/
│   │   ├── users.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── vite.config.js
└── README.md

#Usage
##User Authentication:

Users can register and log in to the application.
JWT tokens are used to authenticate users securely.

##Data Plans:

Users can view and compare different data plans.
The data is fetched in real-time using Axios from the backend.

#Contribution
Feel free to fork this project and submit pull requests. Please make sure to write clear, concise commit messages and document your code properly.
```
