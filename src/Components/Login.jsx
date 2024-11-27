import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return setError("** Email and Password is Requred");
    }
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/login`,
        { email, password }
      );
      console.log(response);

      if (
        response.status === 401 ||
        response.status === 402 ||
        response.status === 400
      ) {
        return setError(response.data.message || "Login failed");
      }

      const token = response.data.token;
      localStorage.setItem("token", `Bearer ${token}`);
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      setError(errorMessage);
    }
  };

  return (
    <div className="my-5 container">
      <p className="fw-bold text-center text-success border-bottom border-3 border-danger">
        Login
      </p>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
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
            Password
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
