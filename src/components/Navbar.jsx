import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";

function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "cmyk";
}

function Navbar() {
  const [mode, setMode] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  const changeMode = () => {
    setMode((prev) => {
      return prev === "cmyk" ? "luxury" : "cmyk";
    });
  };

  return (
    <nav className="py-6 shadow-md">
      <div className="align-element flex justify-between items-center">
        <h1 className="text-3xl flex items-center gap-4">
          <Link href="/">TAOMLAR</Link>
          <span className="cursor-pointer" onClick={changeMode}>
            {mode == "cmyk" ? <FaMoon /> : <FaSun />}
          </span>
        </h1>
        <div className="crt-wr flex gap-7">
          <Link to={"/createinput"} className="text-xl">
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
