import React from "react";
import Header from "../Others/Header"; // Corrected import path
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
