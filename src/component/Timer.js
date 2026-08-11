import React, { useEffect, useState } from "react";
const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        if (isRunning) {

            const interval = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }

    }, [isRunning]);

    return (
        <div className="container-fluid bg-light min-vh-100 py-2">
            <div className="container">

                {/* Main Card */}
                <div className="card shadow-sm border rounded-4">

                    <div className="card-body p-4">

                        {/* Header */}
                        <div className="text-center mb-4">

                            <div
                                className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                                style={{ width: "55px", height: "55px" }}
                            >
                                <i className="fa-regular fa-clock text-white fs-3"></i>
                            </div>

                            <h1 className="display-5 fw-bold mb-2">
                                React Timer
                            </h1>

                            <p className="text-secondary fs-4 mb-0">
                                Start, stop, and reset the timer
                            </p>

                        </div>

                        {/* Timer Display */}
                        <div className="card border-primary bg-primary bg-opacity-10 rounded-3 mb-3">

                            <div className="card-body text-center py-4">

                                <div
                                    className="bg-transparent d-flex align-items-center justify-content-center mx-auto mb-2"
                                    style={{ width: "60px", height: "60px" }}
                                >
                                    <i className="fa-solid fa-stopwatch text-primary fs-1"></i>
                                </div>

                                <h3 className="fw-bold mb-2">
                                    Timer
                                </h3>

                                <div className="display-1 fw-bold text-primary mb-1">
                                    {timer}
                                </div>

                                <div className="fs-4 text-secondary fw-semibold">
                                    seconds
                                </div>

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="card border rounded-3 mb-3">

                            <div className="card-body p-3">

                                <div className="row g-3">

                                    <div className="col-md-4">
                                        <button className="btn btn-success btn-lg w-100 fw-bold"
                                            onClick={() => setIsRunning(true)}>
                                            <i className="fa-solid fa-play me-3"></i>
                                            Start
                                        </button>
                                    </div>

                                    <div className="col-md-4">
                                        <button className="btn btn-warning btn-lg w-100 fw-bold text-white"
                                        onClick={() => setIsRunning(false)} >
                                            <i className="fa-solid fa-pause me-3"></i>
                                            Stop
                                        </button>
                                    </div>

                                    <div className="col-md-4">
                                        <button className="btn btn-danger btn-lg w-100 fw-bold" 
                                        onClick={() => setTimer(0)}>
                                            <i className="fa-solid fa-rotate-right me-3"></i>
                                            Reset
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* How it works */}
                        <div className="alert alert-warning rounded-3 p-4 mb-3">

                            <div className="d-flex gap-3">

                                <div>
                                    <i className="fa-solid fa-circle-info text-warning fs-3"></i>
                                </div>

                                <div>

                                    <h4 className="fw-bold mb-2">
                                        How it works
                                    </h4>

                                    <ul className="fs-5 mb-0">
                                        <li>Click Start to begin the timer.</li>
                                        <li>Click Stop to pause the timer.</li>
                                        <li>Click Reset to set the timer back to 0.</li>
                                        <li>The timer counts up every 1 second.</li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                        {/* Status */}
                        <div className="alert alert-success rounded-3 mb-0">

                            <div className="d-flex align-items-center gap-2">

                                <i className="fa-solid fa-circle-check text-success fs-5"></i>

                                <span className="fw-bold text-success">
                                    Status:
                                </span>

                                <span className="fs-5">
                                    Timer is stopped
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Timer;