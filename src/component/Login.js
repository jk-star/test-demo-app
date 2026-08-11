import React, { useState } from "react";

const Login = () => {

    // 1. Email aur password state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Password show/hide state
    const [showPassword, setShowPassword] = useState(false);

    // Login message
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // 3. Validation
        if (email === "" || password === "") {
            setMessage("Please fill all fields");
            return;
        }

        setMessage("Login successful");
    };

    return (
        <div className="container-fluid min-vh-100 bg-light d-flex justify-content-center align-items-center">

            <div className="card shadow-sm border-0 rounded-4" style={{ maxWidth: "765px", width: "100%" }}>

                <div className="card-body p-5">

                    {/* Header */}
                    <div className="text-center mb-4">

                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                            style={{ width: "85px", height: "85px" }}>

                            <i className="fa-solid fa-user text-white fs-1"></i>

                        </div>

                        <h1 className="fw-bold">
                            Welcome Back!
                        </h1>

                        <p className="text-secondary fs-5">
                            Login to your account to continue
                        </p>

                    </div>


                    {/* Login Form */}
                    <form onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="mb-4">

                            <label className="form-label fw-bold fs-5">
                                Email
                            </label>

                            <div className="input-group">

                                <span className="input-group-text bg-white">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>

                                <input
                                    type="email"
                                    className="form-control py-3"
                                    placeholder="Enter your email"

                                    // 2. State update
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>

                        </div>


                        {/* Password */}
                        <div className="mb-4">

                            <label className="form-label fw-bold fs-5">
                                Password
                            </label>

                            <div className="input-group">

                                <span className="input-group-text bg-white">
                                    <i className="fa-solid fa-lock"></i>
                                </span>

                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control py-3"
                                    placeholder="Enter your password"

                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                {/* 4. Show / Hide button */}
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i
                                        className={
                                            showPassword
                                                ? "fa-regular fa-eye-slash"
                                                : "fa-regular fa-eye"
                                        }
                                    ></i>
                                </button>

                            </div>

                        </div>


                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-100 py-3 fs-4"
                        >
                            <i className="fa-solid fa-right-to-bracket me-2"></i>
                            Login
                        </button>

                    </form>


                    {/* Message */}
                    {message && (
                        <div
                            className={`alert mt-4 ${
                                message === "Login successful"
                                    ? "alert-success"
                                    : "alert-danger"
                            }`}
                        >
                            {message}
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
};

export default Login;