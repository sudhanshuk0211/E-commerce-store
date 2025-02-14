# E-Commerce Store 🛒

## Overview
This is a full-stack e-commerce application that allows users to browse products, add them to a cart, and complete purchases. The platform supports user authentication, product management, and order tracking. It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and follows a scalable architecture.

## Features
-🛒 Full E-Commerce Functionality
-🔐 Secure User Authentication (JWT, Refresh Tokens)
-📦 Product & Category Management
-🛍️ Shopping Cart & Checkout with Stripe
-👑 Admin Dashboard for Order & User Management
-🚀 Optimized Performance with Redis Caching
-🎨 Modern UI with Tailwind CSS
- ⌛ And a lot more...

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (Access & Refresh Tokens)
- **Payments:** Stripe
- **Caching:** Redis
- **Image Storage:** Cloudinary

## Installation

### Clone the repository
```sh
git clone https://github.com/sudhanshuk0211/E-commerce-store.git
cd E-commerce-store
```

### Setup .env file
Create a `.env` file in the root directory and add the following environment variables:
```sh
PORT=5000
MONGO_URI=your_mongo_uri

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### Install dependencies
```sh
npm install
```

### Run this app locally
```sh
npm run build
```

### Start the app
```sh
npm run start
```

## Contact
For any inquiries or support, feel free to reach out:
📧 Email: sudhanshuk1102@gmail.com



