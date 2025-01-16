import { useNavigate } from "react-router-dom";

export default function Dropdown({ setShowDropdown }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="bg-white border text-black text-sm border-slate-500 rounded-md px-4 py-2 text-left w-48 absolute top-16 right-0">
      <div className="relative">
        <button
          onClick={() => {
            setShowDropdown(false);
          }}
          className="right-0 absolute"
        >
          X
        </button>
      </div>
      <ul>
        <li onClick={logout} className="cursor-pointer">
          Logout
        </li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
