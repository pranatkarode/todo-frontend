import { useState } from "react";
import { notesUrl } from "../../Utils/endpoints";
import { useNavigate } from "react-router-dom";

export default function CardComponent({ note, setSomethingDeleted }) {
  const [isCompleted, setIsCompleted] = useState(note.completed);
  const navigate = useNavigate();
  const handleChange = () => {
    setIsCompleted((prev) => !prev);
    fetch(`${notesUrl}/${note._id}`, {
      method: "PUT",
      body: JSON.stringify({ completed: true }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.ok) {
          alert("Update not successfull. Check console for errors");
        }
        console.log(data);
      });
  };
  const OnDelete = () => {
    fetch(`${notesUrl}/${note._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.ok) {
          alert("Delete not successfull. Check console for errors");
          return;
        } else {
          setSomethingDeleted(true);
        }
        console.log(data);
      });
  };
  return (
    <div className="border border-slate-500 rounded-md shadow-md py-2 px-4 flex flex-col gap-4 relative">
      <div className="font-semibold">{note.title}</div>
      <div className="text-sm">
        {note.description.length > 50
          ? note.description.slice(0, 50) + "..."
          : note.description}
      </div>
      <div className="font-semibold text-sm">{note.category}</div>
      <div className="mt-auto">
        <div className="flex gap-2 flex-wrap mb-2">
          {note.tags.map((tag, i) => {
            return (
              <div className="bg-slate-500 text-white rounded-full px-2 py-1 text-sm">
                {tag}
              </div>
            );
          })}
        </div>
        <div className="text-sm ">Due on: {note.dueDate.slice(0, 10)}</div>
        <div className="flex gap-2 justify-between mt-4">
          <button onClick={() => navigate(`/update/${note._id}`)}>
            <img src="images/edit.svg" width={20} height={20} />
          </button>
          <button onClick={OnDelete}>
            <img src="images/delete.svg" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="absolute right-4">
        <input
          type="checkbox"
          value={isCompleted}
          name="completed"
          onChange={handleChange}
          disabled={isCompleted}
          defaultChecked={isCompleted}
        />
      </div>
    </div>
  );
}
