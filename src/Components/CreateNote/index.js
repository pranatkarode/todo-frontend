import Layout from "../Layout";
import NoteForm from "../NoteForm";

export default function CreateNote() {
  return (
    <Layout>
      <div className="font-bold text-lg mt-4">Create New Note</div>
      <NoteForm />
    </Layout>
  );
}
