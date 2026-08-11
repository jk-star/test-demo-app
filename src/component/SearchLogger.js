import React, { useEffect, useState } from "react";

const SearchLogger = () => {
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        console.log(`Searching for: ${searchText}`)
    }, [searchText]);
    return (
        <div className="container-fluid bg-light min-vh-100 py-2">

            {/* Main Card */}
            <div className="card shadow-sm border rounded-4">

                <div className="card-body p-4">

                    {/* Header */}
                    <div className="text-center mb-4">

                        <div
                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                            style={{
                                width: "58px",
                                height: "58px"
                            }}
                        >
                            <i className="fa-solid fa-magnifying-glass text-white fs-3"></i>
                        </div>

                        <h1 className="display-5 fw-bold mb-2">
                            Search Logger
                        </h1>

                        <p className="text-secondary fs-4 mb-0">
                            Type in the search box to see logs in the console.
                        </p>

                    </div>


                    {/* Search Box */}
                    <div className="input-group border border-primary border-2 rounded-3 overflow-hidden">

                        <span className="input-group-text bg-white border-0 px-4">
                            <i className="fa-solid fa-magnifying-glass text-primary fs-4"></i>
                        </span>

                        <input
                            type="text"
                            className="form-control border-0 shadow-none fs-4 py-3"
                            placeholder="Search products..."
                            value={searchText}
                            onChange = {(e) => setSearchText(e.target.value)}
                        />

                    </div>

                </div>

            </div>


            {/* Instructions */}
            <div className="alert alert-primary mt-4 mb-0 rounded-3 p-4">

                <div className="d-flex gap-3">

                    {/* Info Icon */}
                    <div>
                        <i className="fa-solid fa-circle-info text-primary fs-3"></i>
                    </div>

                    {/* Content */}
                    <div>

                        <h4 className="fw-bold mb-3">
                            Instructions
                        </h4>

                        <ul className="mb-0 ps-3">

                            <li className="fs-5 mb-2">
                                Type something in the search box.
                            </li>

                            <li className="fs-5 mb-2">
                                Every time the search text changes, a log will be printed in the console.
                            </li>

                            <li className="fs-5">
                                No log will be printed on initial page load.
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SearchLogger;