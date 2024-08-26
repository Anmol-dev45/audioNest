import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Input, Select } from "./index";
const PodcastForm = ({ post }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      title: post?.title || "",
      description: post?.description || "",
      category: post?.category || "hello",
    },
  });
  const audioRef = useRef();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-2 items-start ">
          <div>
            <Input
              label="Title"
              placeholder="Podcast Title"
              {...register("title", {
                required: "Title is required",
              })}
            />
          </div>
          <div className="flex-1">
            <Input
              type="textarea"
              label="Description"
              placeholder="About the podcast, what is it about?, who is the host? etc"
              {...register("description", {
                required: "Description is required",
              })}
            />
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <Input
            label="Audio"
            type="file"
            accept="audio/*"
            {...register("audio", { required: !post })}
            onInput={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (e) => {
                audioRef.current.src = e.target.result;
              };
              reader.readAsDataURL(file);
            }}
          />

          <audio ref={audioRef} controls>
            <source src={null} type="" />
          </audio>
        </div>
        <div className="flex gap-2 items-start">
          <div>
            <Input
              label="Cover Image"
              type="file"
              accept="image/*"
              {...register("coverImage", { required: !post })}
            />
          </div>
          <Select
            label="Category"
            options={["Hi", "hello", "hey"]}
            {...register("category", {
              required: "Category is required",
            })}
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          {post ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default PodcastForm;
