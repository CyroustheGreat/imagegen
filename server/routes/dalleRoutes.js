import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";



// get environmental variables populated 
dotenv.config();

const router = express.Router();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,

// })

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route('/').get((req, res) => { res.send('Hello from Dall-E!') });


export default router;