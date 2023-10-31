import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandmPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate(); //allows us to navigate to our home page when a post is created

  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });

  const [generatingImg, setGeneratingImg] = useState(false); //when we are making contact with our API

  const [loading, setLoading] = useState(false);

  return <div>Create</div>;
};
export default CreatePost;
