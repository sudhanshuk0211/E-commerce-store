import express from "express"
import dotenv from "dotenv"

// routes 
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
import { connectDb } from "./lib/db.js"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()
const PORT = process.env.PORT ;


app.use(express.json()) // allows to parse the body of the request
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)

app.listen(PORT,()=> {
    console.log("Server is running on http://localhost:" + PORT )
    connectDb()
})

// GuibPnd9qTzxRg4B