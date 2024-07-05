import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import express from 'express'
import { ObjectId } from "mongodb";
import jwt from 'jsonwebtoken';
import path from "path";
import {fileURLToPath} from 'node:url';
import mongoose,{isValidObjectId} from "mongoose";
import exp from "constants";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorHtml404 = asyncHandler(async (req,res,next) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname,'..' ,'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

export {errorHtml404}