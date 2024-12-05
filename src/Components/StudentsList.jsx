import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";

function StudentsList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const StudentView = () => {
    navigate("/view");
  };

  useEffect(() => {
    const getStudent = async () => {
      const response = await axios.get(`http://localhost:8000/api/student`);

      setData(response.data);
    };

    getStudent();
  }, []);

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
                  onClick={(e) => StudentView()}
                  className="fs-5 mx-2 cursor"
                />
                <FaEdit className="fs-5 mx-2 cursor" />
                <MdDeleteForever className="fs-5 mx-2 cursor" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
