import {Router} from 'express'
import {errorHtml404} from "../controllers/error.controllers.js"

const errorRouter = Router();

errorRouter.route("/").get(errorHtml404)

export default errorRouter