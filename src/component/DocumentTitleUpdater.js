import React, { useEffect, useState } from "react";

const DocumentTitleUpdater = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    
    return (
        <div className="container-fluid bg-light min-vh-100 py-2">

            {/* Main Card */}
            <div className="card shadow-sm border rounded-4">

                <div className="card-body p-4">

                    {/* Header */}
                    <div className="text-center mb-4">

                        <div
                            className="bg-primary rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3"
                            style={{
                                width: "52px",
                                height: "52px"
                            }}
                        >
                            <i className="fa-regular fa-file-lines text-white fs-3"></i>
                        </div>

                        <h1 className="display-5 fw-bold mb-2">
                            Document Title Updater
                        </h1>

                        <p className="text-secondary fs-4 mb-0">
                            The document title updates as the count changes.
                        </p>

                    </div>


                    {/* How it works */}
                    <div className="alert alert-primary rounded-3 p-4 mb-3">

                        <div className="d-flex gap-3">

                            <div>
                                <i className="fa-solid fa-circle-info text-primary fs-3"></i>
                            </div>

                            <div>

                                <h4 className="fw-bold text-primary mb-2">
                                    How it works
                                </h4>

                                <p className="fs-5 mb-1">
                                    Click the "+" button to increase the count.
                                </p>

                                <p className="fs-5 mb-0">
                                    The browser tab title will update to show the current count.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Counter Card */}
                    <div className="card border rounded-3 mb-3">

                        <div className="card-body text-center py-3">

                            {/* Icon */}
                            <div
                                className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                                style={{
                                    width: "62px",
                                    height: "62px"
                                }}
                            >
                                <i className="fa-solid fa-chart-simple text-white fs-3"></i>
                            </div>


                            <h4 className="fw-bold mb-1">
                                Count
                            </h4>


                            {/* Count */}
                            <div className="display-1 fw-bold text-primary mb-2">
                                {count}
                            </div>


                            {/* Plus Button */}
                            <button className="btn btn-primary btn-lg px-4 fs-3 fw-bold"
                                onClick={() => setCount(count + 1)}>
                                +
                            </button>

                        </div>

                    </div>


                    {/* Check Tab Title */}
                    <div className="alert alert-success rounded-3 p-4 mb-0">

                        <div className="d-flex gap-3">

                            <div>
                                <i className="fa-solid fa-circle-check text-success fs-3"></i>
                            </div>

                            <div>

                                <h4 className="fw-bold text-success mb-2">
                                    Check the Tab Title
                                </h4>

                                <p className="fs-5 mb-1">
                                    Open this page and click the "+" button.
                                </p>

                                <p className="fs-5 mb-0">
                                    You will see the tab title change to:
                                    <strong className="ms-1">
                                        Count: 1, Count: 2, Count: 3, and so on...
                                    </strong>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default DocumentTitleUpdater;