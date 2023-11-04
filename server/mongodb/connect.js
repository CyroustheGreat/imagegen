//this is a function that connects our application to mongoDB

import mongoose from "mongoose";

const connectDB = (url) => {
    // it is useful when working with search functionality

    mongoose.set("strictQuery", true)

    //connect to the database
    mongoose.connect(url).then(() => console.log("MongoDB connected...")).catch((err) => console.log(err));
};

export default connectDB;