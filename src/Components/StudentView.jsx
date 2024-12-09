import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function StudentView() {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchStudentData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8000/api/student/${id}`
        );
        setData(response.data.students);
      } catch (err) {
        console.log("Failed to fetch student data");
      }
    };

    fetchStudentData();
  }, [id]);
  console.log(data);

  return (
    <div className="my-5 container">
      <p className="fw-bold h1 text-primary mb-3">Student Details</p>
      <div className="row">
        <div className="col-sm-6">
          <div className="shadow rounded p-3">
            <ul>
              <li>
                Student Name:{" "}
                <span className="fw-bold ms-3 text-success">
                  {data.className}
                </span>
              </li>
              <li>
                Father's Name:{" "}
                <span className="fw-bold ms-3 text-success">
                  {" "}
                  {data.fatherName}
                </span>
              </li>
              <li>
                Mother's Name:{" "}
                <span className="fw-bold ms-3 text-success">
                  {" "}
                  {data.motherName}
                </span>
              </li>
              <li>
                Date of Birth:{" "}
                <span className="fw-bold ms-3 text-success">
                  {" "}
                  {data.dateofBirth}
                </span>
              </li>
              <li>
                Class:{" "}
                <span className="fw-bold ms-3 text-success">
                  {" "}
                  {data.className}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="shadow rounded p-3">
            <ul>
              <li>
                Present Address:{" "}
                <span className="fw-bold ms-3 text-success">
                  {" "}
                  {data.presentAddress}
                </span>
              </li>
              <li>
                Permanents Address:{" "}
                <span className="fw-bold ms-3 text-success">
                  {" "}
                  {data.permanentsAddress}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentView;
