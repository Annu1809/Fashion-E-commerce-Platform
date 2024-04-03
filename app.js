import express from "express"
import dotenv from "dotenv"
import  morgan from "morgan"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import cors from "cors"
import path from "path"

// configure env
dotenv.config();

connectDB();

const app = express();


// logging middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


console.log("PORT:", process.env.PORT);

const PORT = process.env.PORT || 8080

app.use('/api/v1/auth',authRoute)

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to E-commerce app</h1>")
})

app.listen((PORT),()=>{
    console.log(`Server is started at http://localhost:${PORT}`);
})