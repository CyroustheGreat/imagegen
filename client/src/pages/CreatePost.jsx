import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate(); //allows us to navigate to our home page when a post is created

  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });

  const [generatingImg, setGeneratingImg] = useState(false); //when we are making contact with our API

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e) => {};
  const handleSupriseMe = () => {};
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create imaginative and visually stunning images generated through
          DALL-E AI and share them with your community
        </p>
      </div>

      <form className="mt-16 max-w-3xl " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            lableName="Your name"
            type="text"
            name="name"
            palceHolder="John Doe"
            value={form.name}
            handleChnge={handleChange}
          />
          <FormField
            lableName="Prompt"
            type="text"
            name="prompt"
            palceHolder="an armchair in the shape of an avocado"
            value={form.prompt}
            handleChnge={handleChange}
            isSurpriseMe
            handleSupriseMe={handleSupriseMe}
          />
        </div>
      </form>
    </section>
  );
};
export default CreatePost;
