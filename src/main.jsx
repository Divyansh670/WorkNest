import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure styles are imported
import TaskContext from "./context/TaskContext";
import AuthContext from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContext>
         <TaskContext>
     <App />
  </TaskContext>
    </AuthContext>
 
   
);
