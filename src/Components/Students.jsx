import React from "react";

function Students() {
  return (
    <div>
      {/* student form */}
      <div className="container my-5">
        <p className="fw-bold text-center text-success border-bottom border-3 border-danger">
          Admission Form
        </p>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control form-control-sm shadow"
            placeholder="ex: Mr. Rohim"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Father's Name
          </label>
          <input
            type="text"
            class="form-control form-control-sm shadow"
            placeholder="ex: Mr. Korim"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Mother's Name
          </label>
          <input
            type="text"
            class="form-control form-control-sm shadow"
            placeholder="ex: Mrs. Hasina"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            class="form-control form-control-sm shadow"
            placeholder="ex: Mrs. Hasina"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Class
          </label>
          <input
            type="text"
            class="form-control form-control-sm shadow"
            placeholder="ex: Class 02"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Present Address
          </label>
          <textarea
            class="form-control form-control-sm shadow"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Permanents Address
          </label>
          <textarea
            class="form-control form-control-sm shadow"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
}

export default Students;
