import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Students() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [className, setClassName] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentsAddress, setPermanentsAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div>
        <p className="mt-5 text-center">Loading......</p>
      </div>
    );
  }
  const reset = () => {
    setName("");
    setFatherName("");
    setMotherName("");
    setDateofBirth("");
    setClassName("");
    setPresentAddress("");
    setPermanentsAddress("");
    setError("");
  };

  const submitData = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8000/api/student`, {
        data,
      });

      if (response.status === 200) {
        setLoading(false);
        toast("Sucessfuly Compleate");
        reset();
      }
    } catch (error) {
      console.error("error- ", error);
      setLoading(false);
      toast(error.massege);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    if (
      !name ||
      !fatherName ||
      !motherName ||
      !dateofBirth ||
      !className ||
      !presentAddress ||
      !permanentsAddress
    ) {
      setLoading(false);
      return toast.error("All are requred !!");
    }
    const data = {
      name,
      fatherName,
      motherName,
      dateofBirth,
      className,
      presentAddress,
      permanentsAddress,
    };

    submitData(data);
  };

  return (
    <div>
      {/* student form */}
      <form onSubmit={submitHandler} className="container my-5">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
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
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
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
            value={dateofBirth}
            onChange={(e) => setDateofBirth(e.target.value)}
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
            value={className}
            onChange={(e) => setClassName(e.target.value)}
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
            value={presentAddress}
            onChange={(e) => setPresentAddress(e.target.value)}
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
            value={permanentsAddress}
            onChange={(e) => setPermanentsAddress(e.target.value)}
          ></textarea>
        </div>
        <p>{error}</p>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default Students;
