// import { useState } from "react";

export default function Login({isOpen, onClose}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-zinc-100 pt-[4rem] p-10 rounded-lg shadow-lg relative flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold pb-10 text-indigo-950">Student Portal</h2>
        <input type="text" placeholder="Username" className="w-full p-2 mb-2 rounded bg-gray-700 text-white" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-700 text-white" />

        <button 
          className="absolute top-2 right-2 text-white" 
          onClick={onClose}
        >
          ✖
        </button>

        <button className="bg-indigo-600 w-full p-2 rounded text-white">Login</button>
      </div>
    </div>
  );
}
