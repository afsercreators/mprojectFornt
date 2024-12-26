import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
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
        console.log(response);

        if (response.status === 200) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

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

      const token = response.data.token;
      localStorage.setItem("token", `Bearer ${token}`);
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      setError(errorMessage);
    }
  };

  const setValue = () => {
    setEmail("abc10@gmail.com");
    setPassword("123456");
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
        <button
          onClick={setValue}
          type="submit"
          className="btn btn-primary ms=3"
        >
          set
        </button>
      </form>
    </div>
  );
}

export default Login;
