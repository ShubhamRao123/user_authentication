import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-900">Delote</span>
            <span className="text-slate-600"> Techonology</span>
          </h1>
        </Link>
        <ul className=" flex gap-6">
          <Link to="/">
            <li className="hover:underline">Home</li>
          </Link>

          <Link to="sign-in">
            <li className="hover:underline">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
