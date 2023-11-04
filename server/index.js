//Express.js: Express is a popular web application framework for Node.js. It is not a part of React itself but is often used in conjunction with React when building full-stack web applications. Express.js simplifies the process of creating server-side applications and handling HTTP requests and routes. You can use Express.js to create RESTful APIs, serve static files, and handle various server-side tasks in a React application.

//Expressions in JSX: In React, an "expression" refers to a piece of code that produces a value.You can use expressions inside JSX(JavaScript XML) to embed dynamic content or values within your components.For example, you can use curly braces { } to include expressions within JSX, such as rendering variables, JavaScript operations, or function calls. This allows you to display dynamic content within your React components.

import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

// let's setup our dotenv with the following
dotenv.config(); // allows us to pull our variables from our.env file which we'll create soon

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

//create our first route
app.get('/', async (req, res) => { res.send('Hello from Dall-E!'); });

// now we have the base of our express application setup

// create a way to run
const startServer = async () => {
    // connect to the database in mongoDB
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => {
            console.log("Server running on port 8080");
        });
    } catch (err) {
        console.log(err);
    }

}

startServer();

// the next stage is connection to mongodb and openAPI