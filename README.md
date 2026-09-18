# SwiftCart Frontend

SwiftCart is a **Multi-Vendor E-Commerce Web Application** built using React and TypeScript. This repository contains the frontend application responsible for the customer interface as well as seller and administrator dashboards.

The frontend communicates with the SwiftCart backend through REST APIs and provides the interface for authentication, product browsing, shopping, checkout, orders, seller operations, and administrative operations.

---

## 📌 Project Overview

The SwiftCart frontend is designed around three primary application roles:

* **Customer** — browse products, manage cart and wishlist, place orders, submit reviews, and manage the account.
* **Seller** — access seller-specific functionality through the seller dashboard.
* **Administrator** — access administrative functionality through the admin dashboard.

The application uses **Redux Toolkit** for centralized state management and **Axios** for communication with the Spring Boot backend.

---

## ✨ Features

### Customer Features

* User registration and login
* JWT-based authentication
* Product browsing
* Product categories
* Product details
* Product reviews
* Shopping cart
* Wishlist
* Checkout
* Payment-success flow
* Account/profile management
* Address-related account functionality
* Become-a-seller workflow

### Seller Features

* Seller registration/workflow
* Seller profile
* Seller dashboard
* Seller-side product management functionality

### Administrator Features

* Administrator dashboard
* Administrative management functionality

---

## 🛠️ Technology Stack

| Technology      | Purpose                           |
| --------------- | --------------------------------- |
| React           | Frontend UI development           |
| TypeScript      | Type-safe application development |
| Vite            | Development server and build tool |
| React Router    | Client-side routing               |
| Redux Toolkit   | Global state management           |
| React Redux     | Connecting Redux with React       |
| Redux Thunk     | Asynchronous state operations     |
| Axios           | REST API communication            |
| Material UI     | UI components                     |
| Tailwind CSS    | Utility-based styling             |
| React Hook Form | Form management                   |
| Zod             | Schema validation                 |
| Yup             | Form validation                   |
| Day.js          | Date handling                     |
| Embla Carousel  | Carousel functionality            |

---

## 📂 Project Structure

The application separates customer, seller, administrator, state-management, data, and theme-related code.

```text
src/
├── admin/
│   └── pages/
│
├── customer/
│   ├── components/
│   ├── pages/
│   └── wishlist/
│
├── seller/
│   └── pages/
│
├── State/
│   ├── authSlice
│   ├── customer/
│   ├── seller/
│   └── Store
│
├── data/
│
├── Theme/
│
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

---

## 🧭 Application Routing

The application uses React Router for navigation.

| Route                                           | Function                |
| ----------------------------------------------- | ----------------------- |
| `/`                                             | Home page               |
| `/login`                                        | Authentication          |
| `/products/:category`                           | Products by category    |
| `/product-details/:categoryId/:name/:productId` | Product details         |
| `/reviews/:productId`                           | Product reviews         |
| `/cart`                                         | Shopping cart           |
| `/checkout`                                     | Checkout                |
| `/wishlist`                                     | Wishlist                |
| `/payment-success/:orderId`                     | Payment success         |
| `/account/*`                                    | Account section         |
| `/become-seller`                                | Become a seller         |
| `/seller/*`                                     | Seller dashboard        |
| `/admin/*`                                      | Administrator dashboard |

---

## 🔄 Frontend Architecture

The application follows a component-based architecture.

```text
                    SwiftCart Frontend
                           |
              +------------+------------+
              |            |            |
          Customer       Seller       Admin
              |            |            |
              +------------+------------+
                           |
                      React Router
                           |
                     React Components
                           |
                    Redux Toolkit
                           |
                  Async Actions/Thunk
                           |
                         Axios
                           |
                           v
                 SwiftCart REST API
```

This separation keeps the user interface, application state, routing, and backend communication organized.

---

## 🧠 State Management

SwiftCart uses **Redux Toolkit** for global state management.

The Redux store is configured in the application and provided to React through the Redux `Provider`.

Different slices are used to manage application-specific state, including authentication, customer-related state, and seller-related state.

Asynchronous operations are handled using Redux async actions/thunks.

A simplified flow is:

```text
React Component
      |
      v
Dispatch Redux Action
      |
      v
Async Operation
      |
      v
Axios API Request
      |
      v
Spring Boot Backend
      |
      v
Redux State Updated
      |
      v
React UI Re-rendered
```

---

## 🔐 Authentication

SwiftCart uses **JWT-based authentication**.

The frontend stores the JWT received during authentication and uses it when requesting authenticated backend resources.

When the application starts, it can retrieve the stored authentication information and request the corresponding user or seller profile from the backend.

The backend is responsible for validating the JWT and enforcing authorization.

---

## 🌐 API Communication

Axios is used for communication between the frontend and backend.

The frontend communicates with REST APIs for functionality such as:

* Authentication
* User profiles
* Products
* Categories
* Reviews
* Cart
* Wishlist
* Orders
* Seller operations
* Administrator operations
* Payments

The backend repository is:

```text
https://github.com/Ayu198/SwiftCart-backend
```

---

## 📝 Forms and Validation

SwiftCart uses:

* React Hook Form
* Zod
* Yup

These libraries are used for handling forms and validating user input before submitting data to the backend.

This is particularly useful for authentication, account-related forms, seller workflows, and other forms containing user-provided data.

---

## 🎨 UI and Styling

The project uses both **Material UI** and **Tailwind CSS**.

### Material UI

Material UI provides reusable components and application theming.

### Tailwind CSS

Tailwind CSS provides utility classes for styling, spacing, layout, responsiveness, and other visual aspects of the application.

---

## 🎠 Carousel

The project uses **Embla Carousel** for carousel-related UI functionality.

The autoplay functionality is provided through the Embla autoplay package.

---

## ⚙️ Installation

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* A running SwiftCart backend

### Clone the Repository

```bash
git clone https://github.com/Ayu198/SwiftCart-Frontend.git
```

Move into the project directory:

```bash
cd SwiftCart-Frontend
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Application

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🔍 Linting

Run ESLint using:

```bash
npm run lint
```

---

## 🔗 Backend Repository

SwiftCart Frontend works with the SwiftCart Spring Boot backend.

**Backend Repository:**

```text
https://github.com/Ayu198/SwiftCart-backend
```

---

## 📌 Project Information

**Project:** SwiftCart
**Project Type:** Multi-Vendor E-Commerce Web Application
**Frontend:** React + TypeScript
**Build Tool:** Vite
**State Management:** Redux Toolkit
**API Communication:** Axios

---

## 👨‍💻 Repository

```text
https://github.com/Ayu198/SwiftCart-Frontend
```
