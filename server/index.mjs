// Load environment variables
import "./loadEnv.mjs";
import posts from "./routes/posts.mjs";
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
// Load the /posts routes
app.use("/posts", posts);
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})