import { useParams } from "react-router-dom";
import Layout from "../Layout";
import NoteForm from "../NoteForm";
import { useEffect, useState } from "react";
import { notesUrl } from "../../Utils/endpoints";

export default function UpdateNote() {
  const { id } = useParams();
  const [values, setValues] = useState({});
  useEffect(() => {
    fetch(`${notesUrl}/${id}`, {
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
          setValues(data.results);
        }
      });
  }, []);
  return (
    <Layout>
      <div className="font-bold text-lg mt-4">Update New Note</div>
      <NoteForm defaultValues={values} />
    </Layout>
  );
}
