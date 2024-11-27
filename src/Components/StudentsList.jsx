import React from "react";
import { useNavigate } from "react-router-dom";

import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";

function StudentsList() {
  const navigate = useNavigate();

  const StudentView = () => {
    navigate("/view");
  };

  return (
    <div className="my-5 container shadow">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student Roll</th>
            <th scope="col">Student Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>01</td>
            <td>Mr. Rohim</td>
            <td>Mr. Korim</td>
            <td>
              <MdOutlinePreview
                onClick={(e) => StudentView()}
                className="fs-5 mx-2 cursor"
              />
              <FaEdit className="fs-5 mx-2 cursor" />
              <MdDeleteForever className="fs-5 mx-2 cursor" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
