import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";

function StudentsList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const StudentView = (id) => {
    navigate(`/view/${id}`);
  };
  const getStudent = async () => {
    const response = await axios.get(`http://localhost:8000/api/student`);

    setData(response.data);
  };

  const fetchData = async () => {
    const getToken = localStorage.getItem("token");

    if (!getToken) {
      navigate("/login");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8000/api/verify`, {
        headers: { Authorization: getToken },
      });

      return;
    } catch (error) {
      console.error("Error verifying token:", error);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchData();
    getStudent();
  }, []);

  const deletHandler = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/student/${id}`
      );

      return;
    } catch (error) {
      console.error("Error verifying token:", error);
      navigate("/login");
    }
  };

  return (
    <div className="my-5 container shadow">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Father Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td scope="row">{index + 1}</td>
              <td scope="row">{item.name}</td>
              <td scope="row">{item.fatherName}</td>
              <td scope="row">{item.dateofBirth}</td>
              <td>
                <MdOutlinePreview
                  onClick={(e) => StudentView(item._id)}
                  className="fs-5 mx-2 cursor"
                />
                <FaEdit className="fs-5 mx-2 cursor" />
                <MdDeleteForever
                  onClick={() => deletHandler(item._id)}
                  className="fs-5 mx-2 cursor"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
