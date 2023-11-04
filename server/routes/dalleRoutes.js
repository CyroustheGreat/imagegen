import express from "express";
import * as dotenv from "dotenv";
import { configuration, openAIApi } from "openai";



// get environmental variables populated 
dotenv.config();

const router = express.Router();