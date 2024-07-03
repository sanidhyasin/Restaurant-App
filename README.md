# Restaurant App

[![Hosted on Vercel](https://img.shields.io/badge/Vercel-Hosting-brightgreen)](https://restaurant-app-bay-zeta.vercel.app/)

This is a full-stack restaurant application built using React, Node.js, Express, PostgreSQL, and Prisma. It provides an interface for customers to browse the menu, place orders, and view their current order, as well as an interface for restaurant staff to manage incoming orders.

## Table of Contents

- [Demo](#demo)
- [Video Overview](#video-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Demo

You can view the live demo of the application [here](https://restaurant-app-bay-zeta.vercel.app/).

## Video Overview

For a detailed walkthrough of the application, watch this [video](https://drive.google.com/file/d/1ntNQY-huv2tq9xdvT_lccl4Z-0HrhcjZ/view?usp=sharing).

## Features

### Customer Interface

- **Login Page**: Customers can log in with their credentials.
- **Menu Browsing**: Customers can browse the menu categorized by appetizers, main courses, desserts, and drinks.
- **Order Placement**: Customers can select their table number, add items to their cart, review their cart, adjust quantities, and remove items.
- **Order Viewing**: Customers can view details of their current submitted order.

### Restaurant Staff Interface

- **Order Management**: Staff can view a list of incoming orders with details such as table number, order items, and total amount. They can also mark orders as completed.

### Authentication

- Role-based authentication for both customers and staff, ensuring that only authenticated staff can access order management features.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js, Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Deployment**: Vercel

## Installation

### Prerequisites

- Node.js
- PostgreSQL

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sanidhyasin/Restaurant-App.git
   cd Restaurant-App/backend
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env` file:

   ```
   DATABASE_URL="your_postgresql_database_url"
   JWT_SECRET="your_jwt_secret"
   ```

4. Initialize the database:

   ```bash
   npx prisma migrate deploy
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env` file:

   ```
   REACT_APP_API_URL="http://localhost:3000/api"
   ```

4. Start the frontend server:
   ```bash
   npm start
   ```

## Usage

### Customer Interface

- Register or log in as a customer.
- Browse the menu and add items to your cart.
- Place an order by selecting your table number and reviewing your cart.
- View your current order.

### Restaurant Staff Interface

- Register or log in as staff.
- View and manage incoming orders.
- Mark orders as completed.

## API Endpoints

### Authentication

- **POST /auth/login**: Log in a user
- **POST /auth/register**: Register a new user

### Menu

- **GET /menu/items**: Get all menu items
- **GET /menu/categories**: Get all menu categories

### Orders

- **POST /orders**: Create a new order
- **GET /orders/current**: Get the current order for the logged-in user
- **GET /orders/history**: Get the order history for the logged-in user
- **GET /orders/staff**: Get all pending orders for staff
- **PUT /orders/:id/complete**: Mark an order as completed
````
