import React from "react";

function StudentView() {
  return (
    <div className="my-5 container">
      <p className="fw-bold h1 text-primary mb-3">Student Details</p>
      <div className="row">
        <div className="col-sm-6">
          <div className="shadow rounded p-3">
            <ul>
              <li>
                Student Name:{" "}
                <span className="fw-bold ms-3 text-success">MR. Rohim</span>
              </li>
              <li>
                Father's Name:{" "}
                <span className="fw-bold ms-3 text-success">MR. Rohim</span>
              </li>
              <li>
                Mother's Name:{" "}
                <span className="fw-bold ms-3 text-success">MR. Rohim</span>
              </li>
              <li>
                Date of Birth:{" "}
                <span className="fw-bold ms-3 text-success">MR. Rohim</span>
              </li>
              <li>
                Class:{" "}
                <span className="fw-bold ms-3 text-success">MR. Rohim</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="shadow rounded p-3">
            <ul>
              <li>
                Present Address:{" "}
                <span className="fw-bold ms-3 text-success">MR. Rohim</span>
              </li>
              <li>
                Permanents Address:{" "}
                <span className="fw-bold ms-3 text-success">MR. Rohim</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentView;
