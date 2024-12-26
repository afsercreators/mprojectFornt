import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function form() {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       if (!name||
  //       fatherName||
  //       motherName||
  //       dateofBirth||
  //       presentAddress||
  //       permanentsAddress||) {
  //         navigate("/login");
  //         return;
  //       }

  //       try {
  //         const response = await axios.get(`http://localhost:8000/api/student`)

  //         console.log(response);

  //         if (response.status === 200) {
  //           navigate("/");
  //         }
  //       } catch (error) {
  //         console.error("Error verifying token:", error);
  //         navigate("/form");
  //       }
  //     };

  //     fetchData();
  //   }, [navigate]);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     if (!email || !password) {
  //       return setError("** Email and Password is Requred");
  //     }
  //     try {
  //       const response = await axios.post(
  //         `http://localhost:8000/api/users/login`,
  //         { email, password }
  //       );
  //       console.log(response);

  //       const token = response.data.token;
  //       localStorage.setItem("token", `Bearer ${token}`);
  //       navigate("/");
  //     } catch (error) {
  //       const errorMessage =
  //         error.response?.data?.message || "An error occurred.";
  //       setError(errorMessage);
  //     }
  //   };

  return (
    <div className="my-5 container">
      <p className="fw-bold text-center text-success border-bottom border-3 border-danger">
        Login
      </p>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            name
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control form-control-sm shadow"
            placeholder="ex: admin@email.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            fatherName
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control form-control-sm shadow"
            placeholder="ex:********"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            motherName
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control form-control-sm shadow"
            placeholder="ex:********"
          />
        </div>{" "}
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            dateofBirth
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control form-control-sm shadow"
            placeholder="ex:********"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            className
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control form-control-sm shadow"
            placeholder="ex:********"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            presentAddress
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control form-control-sm shadow"
            placeholder="ex:********"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            permanentsAddress
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control form-control-sm shadow"
            placeholder="ex:********"
          />
        </div>
        <p className="text-danger">{error}</p>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
