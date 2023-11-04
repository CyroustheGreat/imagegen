import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

// get environmental variables populated 
dotenv.config();

const router = express.Router();