import express from "express"
import dotenv from "dotenv"

// routes 
import authRoutes from "./routes/auth.route.js"
import { connectDb } from "./lib/db.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT ;


app.use(express.json()) // allows to parse the body of the request
app.use("/api/auth", authRoutes)

app.listen(PORT,()=> {
    console.log("Server is running on http://localhost:" + PORT )
    connectDb()
})

// GuibPnd9qTzxRg4B