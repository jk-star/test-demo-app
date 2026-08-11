import React, { useEffect, useState } from "react";

const PageVisitCounter = () => {

    const [visitCount, setVisitCount] = useState(0);
    const [lastVisited, setLastVisited] = useState("");

    useEffect(() => {
        setVisitCount(prev => prev + 1);

        const now = new Date();

        setLastVisited(
            now.toLocaleString("en-IN", {
                dateStyle: "long",
                timeStyle: "medium"
            })
        );
    }, []);

    return (
        <div className="container-fluid bg-light min-vh-100 py-3">

            <div className="container">

                {/* Main Card */}
                <div className="card border-0 shadow-sm rounded-4">

                    <div className="card-body p-4 p-md-5">

                        {/* Header */}
                        <div className="text-center mb-5">

                            <div
                                className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{
                                    width: "85px",
                                    height: "85px"
                                }}
                            >
                                <i className="fa-solid fa-chart-line text-white fs-1"></i>
                            </div>

                            <h1 className="display-4 fw-bold">
                                Page Visit Counter
                            </h1>

                            <p className="text-secondary fs-4 mb-0">
                                This counter increases every time you visit this page.
                            </p>

                        </div>


                        {/* Counter Box */}
                        <div className="border border-primary-subtle bg-primary bg-opacity-10 rounded-4 text-center p-5 mb-4">

                            <h2 className="fw-bold text-primary mb-4">
                                You visited this page
                            </h2>

                            <div className="display-1 fw-bold text-primary">
                                {visitCount}
                            </div>

                            <div className="fs-3 text-secondary">
                                times
                            </div>

                        </div>


                        {/* How it works */}
                        <div className="card border rounded-4">

                            <div className="card-body p-4">

                                <div className="row align-items-start">

                                    {/* Icon */}
                                    <div className="col-auto">

                                        <div
                                            className="bg-primary bg-opacity-10 text-primary rounded-4 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "65px",
                                                height: "65px"
                                            }}
                                        >
                                            <i className="fa-solid fa-info fs-2"></i>
                                        </div>

                                    </div>


                                    {/* Content */}
                                    <div className="col">

                                        <h3 className="fw-bold mb-2">
                                            How it works
                                        </h3>

                                        <p className="text-secondary fs-5 mb-1">
                                            The counter increases whenever this page loads.
                                        </p>

                                        <p className="text-secondary fs-5 mb-0">
                                            Try refreshing the page to see it increase!
                                        </p>

                                    </div>

                                </div>


                                <hr className="my-4" />


                                {/* Last Visited */}
                                <div className="d-flex align-items-center gap-3">

                                    <i className="fa-regular fa-calendar-days text-primary fs-4"></i>

                                    <span className="text-secondary fs-5">
                                        Last visited:
                                    </span>

                                    <span className="text-primary fs-5">
                                        {lastVisited}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default PageVisitCounter;