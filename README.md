# 📊 ClickHouse SQL Query Editor

Hello! 👋  
Welcome to the **ClickHouse SQL Query Editor**. This project is a lightweight SQL query editor designed to interact with ClickHouse, allowing users to execute SQL queries, run scripts, and manage queries efficiently. 🚀  

---

## 📝 Project Overview

This project implements a **mini SQL query editor** with the following features:

- **Run SQL Queries**: Users can write and execute SQL queries against a ClickHouse database.
- **Display Query Results**: The results are displayed in a tabular format with pagination.
- **SQL Script Execution**: Users can upload `.sql` files and run the queries within them.
- **Query Sanitization**: Prevents unsafe queries from being executed.
- **React Query for State Management**: Handles query execution and UI updates efficiently.

---

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, React Query, Click UI
- **Backend**: Node.js, Express, ClickHouse client
- **Database**: ClickHouse
- **State Management**: React Query
- **Styles**: Click UI components
- **Tooling**: ESLint, Prettier, Docker, TypeScript

---

## 🚀 Getting Started

### Prerequisites

- **Docker & Docker Compose**
- **Node.js v20+**
- **TypeScript**

### Installation

Clone the repository:

\`\`\`bash
git clone https://github.com/YaroslavMatushevych/clickhouse-sql-editor.git
cd clickhouse-sql-editor
\`\`\`

Start the services using Docker:

\`\`\`bash
docker compose up -d
\`\`\`

Install dependencies:

\`\`\`bash
npm install
\`\`\`

### Running the Application

Start the backend:

\`\`\`bash
npm run start:server
\`\`\`

Start the frontend:

\`\`\`bash
npm run start:client
\`\`\`

Visit the application at [http://localhost:5173](http://localhost:5173).

---

## 🛠 Features

### 1️⃣ **SQL Query Execution**
- Write and execute SQL queries against a ClickHouse instance.
- Query results are displayed in a paginated table.

### 2️⃣ **SQL File Upload**
- Users can upload `.sql` files.
- The uploaded SQL populates the query editor.
- Queries can be reviewed and executed manually.

### 3️⃣ **Query Sanitization**
- Blocks dangerous queries like \`DROP TABLE\`, \`TRUNCATE\`, \`SHUTDOWN\`.
- Strips comments and removes unnecessary SQL fragments.

### 4️⃣ **Optimized Query Handling**
- Uses **React Query** for efficient state management.
- Displays **success/error messages** for better UX.

---

## 🛠 API Endpoints

### Run SQL Query

- **Endpoint**: \`POST /api/query\`
- **Request**:
  \`\`\`json
  {
    "query": "SELECT * FROM system.tables LIMIT 10;"
  }
  \`\`\`
- **Response**:
  \`\`\`json
  {
    "rows": [
      {
        "name": "tables",
        "database": "system",
        "engine": "SystemTables"
      }
    ]
  }
  \`\`\`

### Upload SQL File

- **Endpoint**: \`POST /api/upload\`
- **Request**:
  - Multipart form-data with \`.sql\` file.
- **Response**:
  \`\`\`json
  {
    "message": "File uploaded successfully",
    "sqlContent": "SELECT * FROM system.tables LIMIT 10;"
  }
  \`\`\`

---

## 📝 Project Structure

\`\`\`
📦 clickhouse-sql-editor
├── 📂 client (React Frontend)
│   ├── 📂 components
│   ├── 📂 pages
│   ├── 📂 hooks
│   ├── 📂 services
│   ├── 📂 utils
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles.css
│   └── vite.config.ts
│
├── 📂 server (Node.js Backend)
│   ├── 📂 controllers
│   ├── 📂 routes
│   ├── 📂 utils
│   ├── 📂 config
│   ├── 📂 middleware
│   ├── index.ts
│   ├── database.ts
│   └── sanitizeSQL.ts
│
├── 📂 docker (Docker Configuration)
├── docker-compose.yml
├── package.json
├── README.md
└── tsconfig.json
\`\`\`

---

## 🛠 Future Enhancements

✅ **Unit & Integration Tests**  
- Add Jest & React Testing Library for UI tests.  
- Add Supertest for API testing.  

✅ **Performance Enhancements**  
- Implement **code-splitting** for optimized loading.  
- Introduce Web Workers for large query execution.  

✅ **UI Improvements**  
- Implement **query history** with execution logs.  
- Add **syntax highlighting** for SQL queries.  

✅ **Security Enhancements**  
- Improve **SQL sanitization** to prevent injection attacks.  
- Implement **user authentication** (JWT-based).  

---

## 📬 Contact

💼 [LinkedIn](https://www.linkedin.com/in/yaroslav-matushevych)  
📧 yaroslav.matushevych@gmail.com  

---

## 🙌 Thank You!
Thank you for reviewing this project! Looking forward to your feedback and discussion. 😊
