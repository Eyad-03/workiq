import connectDB from "./src/config/db.js";
import express from 'express'
import cors from "cors"
import helmet from "helmet"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import authRoutes  from './src/routes/auth.Routes.js'

const app = express()
app.use(express.json())
connectDB()
app.use(helmet())
app.use(cors({
     origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', authRoutes)

app.get("/health", (req, res) => {
    res.send("alive");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});