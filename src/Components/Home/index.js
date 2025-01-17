import CardComponent from "../CardComponent";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col ">
        <button
          onClick={() => {
            navigate("/create");
          }}
          className="bg-slate-800 text-white px-4 py-2 rounded-md self-end"
        >
          Add Note
        </button>
        <CardComponent />
      </div>
    </Layout>
  );
}
