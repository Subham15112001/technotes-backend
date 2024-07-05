import { fileToClient } from "../controllers/root.controllers.js";
import { Router } from "express";

const rootRouter = Router();

rootRouter.route(`^/$|/index(.html)?`).all(fileToClient)

export default rootRouter