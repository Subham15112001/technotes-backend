import express from 'express';
import {fileURLToPath} from 'node:url';
import cookieParser from "cookie-parser";
import cors from "cors";
import path from 'path'
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//cofigur cors
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    creadentials:true
}))

//limit json size
app.use(express.json({limit:"16kb"}))

//configure url, extended true so that we can have obj inside obj
app.use(express.urlencoded({extended: true}))

//to store asset in file name public
app.use(express.static("public"))

//to read user cookies 
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, '/public')))
// ROUTES
import rootRouter from "./routes/root.routes.js";
import errorRouter from './routes/error.routes.js'

app.use("/",rootRouter)

app.use("*",errorRouter)

export {app}