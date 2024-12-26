import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Students from "./Components/Students";
import Login from "./Components/Login";
import Nav from "./ChildComponents/Nav";
import StudentsList from "./Components/StudentsList";
import StudentView from "./Components/StudentView";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stuent-list" element={<StudentsList />} />
        <Route path="/view/:id" element={<StudentView />} />
        <Route path="*" element={<Students />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
