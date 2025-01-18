import Layout from "../Layout";
import { useForm } from "react-hook-form";
import TagInput from "../TagInput";
import { useEffect, useState } from "react";
import { notesUrl } from "../../Utils/endpoints";
import { useNavigate } from "react-router-dom";
export default function CreateNote() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log("data ", data);
    fetch(notesUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((d) => {
        if (d.ok) {
          navigate("/home");
        }
      });
  };
  const [tags, setTags] = useState([]);
  const [minDate, setMinDate] = useState("");
  console.log("min", minDate);
  useEffect(() => {
    const now = new Date();
    setMinDate(now.toISOString().slice(0, 16));
  }, []);
  useEffect(() => {
    setValue("tags", tags);
  }, [tags]);
  return (
    <Layout>
      <div className="font-bold text-lg mt-4">Create New Note</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-2"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-600">Title</label>
          <input
            {...register("title", {
              required: {
                value: true,
                message: "Title is required",
              },
            })}
            placeholder="Enter Title"
            className="px-2 py-1 border border-slate-500 rounded-md shadow-md placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-600">Description</label>
          <textarea
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
            placeholder="Enter Description"
            rows={5}
            className="px-2 py-1 border border-slate-500 rounded-md shadow-md placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-600">Due Date</label>
          <input
            type="datetime-local"
            {...register("dueDate")}
            min={minDate}
            className="px-2 py-1 border border-slate-500 rounded-md shadow-md placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-600">Category</label>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <input type="radio" value="Work" {...register("category")} />
              <span className="text-sm">Work</span>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" value="Personal" {...register("category")} />
              <span className="text-sm">Personal</span>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" value="School" {...register("category")} />
              <span className="text-sm">School</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-600">Tags</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>
        <button
          type="submit"
          className="text-white bg-slate-800 px-2 py-1 rounded-md"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
}
