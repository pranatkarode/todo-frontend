import { useState, useEffect } from "react";
import CardComponent from "../CardComponent";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { notesUrl } from "../../Utils/endpoints";
import Loader from "../Loader";
/*
  Mounting, componentDidUpdate, UnMounting
*/

export default function Home() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [somethingDeleted, setSomethingDeleted] = useState(false);
  useEffect(() => {
    if (somethingDeleted) {
      getNotes();
    }
  }, [somethingDeleted]);
  useEffect(() => {
    getNotes();
  }, []);
  function getNotes() {
    setIsLoading(true);
    fetch(notesUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setNotes(data.results);
        }
        setIsLoading(false);
        setSomethingDeleted(false);
      });
  }
  console.log("notes", notes);
  return (
    <Layout>
      <div className="flex flex-col ">
        {isLoading ? (
          <div className="grow items-center w-[120px] justify-center">
            <Loader />
          </div>
        ) : (
          <>
            <button
              onClick={() => {
                navigate("/create");
              }}
              className="bg-slate-800 text-white px-4 py-2 rounded-md self-end"
            >
              Add Note
            </button>
            {/* <CardComponent /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {notes.map((note, index) => {
                return (
                  <CardComponent
                    key={index}
                    note={note}
                    setSomethingDeleted={setSomethingDeleted}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
