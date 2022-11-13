import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css"


const test = (
  <div>
    <h1 className="text-3xl text-indigo-500">Pop-Up</h1>
    <p>This is the extension Pop-Up.</p>
    <img src="../static/img/image.jpg" alt="" />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
