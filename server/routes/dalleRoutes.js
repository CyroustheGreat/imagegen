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

//Generate a real Dall-E post
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;//this is gonna come in from front end side

        const aiResponse = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            response_format: 'b64_json'
        });

        //getting the image from openai
        const image = aiResponse.data.data[0].b64_json;

        //send image to front end side
        res.status(200).json({
            photo: image
        });

    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message);
    }
})

export default router;