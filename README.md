# 🧑‍💼 Employee Management (Backend)

A robust and scalable backend service for managing employee records. This system provides a comprehensive RESTful API for performing CRUD operations on employee data, built with modern JavaScript technologies.

## 🚀 Tech Stack

| Technology | Badge |
| :--- | :--- |
| **Node.js** | ![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) |
| **Express.js** | ![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) |
| **MySQL** | ![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) |
| **JavaScript** | ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |

---

## ✨ Features

* **RESTful API:** Clean, intuitive endpoints for all employee operations.
* **CRUD Operations:**
    * Create new employee records.
    * Retrieve a list of all employees or a single employee by ID.
    * Update existing employee information.
    * Delete employee records.
* **Database Integration:** Utilizes **MySQL** for relational data persistence.
* **Modular Structure:** Separated code into `controllers` and `routes` for maintainability (MVC-like architecture).
* **Package Management:** Managed using **npm** (Node Package Manager). ![npm Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

## 🛠️ Installation and Setup

Follow these steps to get the server running locally.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (LTS recommended)
* [MySQL Server](https://www.mysql.com/downloads/)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mani-mc/employee-management-back.git](https://github.com/mani-mc/employee-management-back.git)
    cd employee-management-back
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup MySQL Database:**
    * Create a database named `employee_db` (or as required by your configuration).
    * Configure connection details in your environment variables.

4.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your configuration details.

    ```bash
    # Example .env file content
    PORT=5000
    DB_HOST=localhost
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_NAME=employee_db
    ```

5.  **Run the server:**
    ```bash
    node server.js
    # or using nodemon for development
    # npm install -g nodemon
    # nodemon server.js
    ```

The server will start at the address specified in your `.env` file (e.g., `http://localhost:5000`).

---

## 🔗 API Endpoints

The following primary routes are exposed by the server for managing employee data:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/employees` | Get a list of all employees. |
| `GET` | `/api/employees/:id` | Get details for a specific employee. |
| `POST` | `/api/employees` | Create a new employee record. |
| `PUT` | `/api/employees/:id` | Update an existing employee record. |
| `DELETE` | `/api/employees/:id` | Delete a specific employee record. |

*Note: The actual endpoints are defined in the `routes` folder and implemented in the `controllers` folder.*
