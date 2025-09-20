# 🎨 Custom Email Workflow Tool - Frontend

This is the **frontend application** for the Custom Email Workflow Tool.  
It provides a responsive dashboard for email management, AI-powered reply suggestions, and Google Calendar integration.

---

## 🚀 Features

- **Modern UI** with React + TypeScript
- **Responsive Dashboard** for email and calendar management
- **Secure Authentication** with Google Oauth
- **Real-time Email Updates**
- **Timezone-aware Smart Scheduling**
- **API Service Layer** for backend communication

---

## 🛠️ Tech Stack

- **Framework**: React.js (with TypeScript + Vite or CRA)
- **API Communication**: Fetch/axios with service layer
- **Routing**: React Router

---

## 📂 Project Structure

```
frontend/
│── public/ # Static assets
│
│── src/
│ ├── api/ # API service functions
│ ├── assets/ # Images, fonts, and other assets
│ ├── components/
│ │ └── ui/ # Reusable UI components (Shadcn, custom)
│ ├── lib/ # Utility libraries
│ ├── pages/ # Page-level components (Dashboard, Auth, Email, Calendar)
│ ├── App.css # Global CSS
│ ├── App.tsx # Root App component
│ ├── index.css # Base Tailwind styles
│ ├── main.tsx # App entry point
│ └── vite-env.d.ts # Vite TypeScript environment types
│
│── .gitignore # Git ignored files
│── README.md # Project documentation
│── components.json # Shadcn UI config
│── eslint.config.js # ESLint configuration
│── index.html # HTML entry file
│── package-lock.json # Dependency lock file
│── package.json # Dependencies and scripts
│── postcss.config.js # PostCSS config (Tailwind)
│── tailwind.config.js # Tailwind CSS configuration
│── tsconfig.app.json # TS config for app
│── tsconfig.json # Base TS config
│── tsconfig.node.json # TS config for Node
│── vite.config.ts # Vite configuration
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/custom-email-workflow-tool.git
cd custom-email-workflow-tool/frontend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the App
```bash
npm run dev
```
App will start at: [http://localhost:5173](http://localhost:5173)

---

## 🔑 Authentication Flow

- Users register/login via backend API  
- Google token is stored securely (httpOnly cookie/localStorage depending on setup)  
- Protected routes are accessible only with valid token  

---

## 📚 Available Pages

- **Login / Register** – User authentication  
- **Dashboard** – Overview of emails and calendar events   
- **Calendar View** – Manage and schedule meetings  

---

## 🧪 Testing

Run tests with:

```bash
npm run test
```
