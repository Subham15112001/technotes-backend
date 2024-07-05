import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import express from 'express'
import { ObjectId } from "mongodb";
import jwt from 'jsonwebtoken';
import path from "path";
import {fileURLToPath} from 'node:url';
import mongoose,{isValidObjectId} from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToClient = asyncHandler(async (req,res,next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

export {fileToClient}