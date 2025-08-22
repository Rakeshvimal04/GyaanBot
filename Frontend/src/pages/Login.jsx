import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg border-0" style={{ maxWidth: "450px", width: "100%" }}>
        <div className="card-header text-white text-center" style={{ background: "linear-gradient(90deg, #6a11cb, #2575fc)" }}>
          <h3 className="mb-0">Welcome Back</h3>
        </div>
        <div className="card-body p-4">
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <div className="text-center mt-3">
            <small>Don’t have an account? <a href="/register">Register</a></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
