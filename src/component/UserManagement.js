import React, { useState } from "react";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [userCount, setUserCount] = useState(0);

    const [deleteId, setDeleteId] = useState(null);

    // formlist
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [editId, setEditId] = useState(null);

    const newUser = {
        id: Date.now(),
        name: name,
        email: email
    };

    //user add and display user

    function handleSubmit(e) {
        e.preventDefault();

        if (editId) {

            setUsers(
                users.map(user =>
                    user.id === editId
                        ? {
                            ...user,
                            name: name,
                            email: email
                        }
                        : user
                )
            );

            setEditId(null);
        } else {

            if (name === "" || email === "") {
                alert("Please fill all fields");
                return;
            }

            setUsers([...users, newUser]);

            setUserCount(count => count + 1);

            setName("");
            setEmail("");
        }
    }

    // user delete

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
        setDeleteId(null);
    };

    //edit user

    const handleEdit = (id) => {
        const user = users.find(user => user.id === id);

        if (user) {
            setName(user.name);
            setEmail(user.email);
            setEditId(id);
        }
    };

    return (
        <div className="container-fluid bg-light min-vh-100 py-4">

            <div className="container">

                {/* Main Card */}
                <div className="card shadow-sm border rounded-4">

                    <div className="card-body p-4">

                        {/* Header */}
                        <div className="text-center mb-4">

                            <div
                                className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{ width: "60px", height: "60px" }}
                            >
                                <i className="fa-solid fa-users text-white fs-3"></i>
                            </div>

                            <h1 className="display-5 fw-bold mb-2">
                                User Management
                            </h1>

                            <p className="text-secondary fs-5 mb-0">
                                Add, edit, and manage users easily.
                            </p>

                        </div>


                        {/* Add User Form */}
                        <div className="card border-primary bg-primary bg-opacity-10 rounded-3 mb-4">

                            <div className="card-body p-4">

                                <h4 className="fw-bold text-primary mb-3">
                                    <i className="fa-solid fa-user-plus me-2"></i>
                                    Add User
                                </h4>

                                <div className="row g-3">

                                    {/* Name */}
                                    <div className="col-md-5">

                                        <label className="form-label fw-semibold">
                                            Name
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                <i className="fa-solid fa-user"></i>
                                            </span>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter user name"
                                                value={name}
                                                onChange={(e) => { setName(e.target.value) }}
                                            />

                                        </div>

                                    </div>


                                    {/* Email */}
                                    <div className="col-md-5">

                                        <label className="form-label fw-semibold">
                                            Email
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                <i className="fa-solid fa-envelope"></i>
                                            </span>

                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                placeholder="Enter email address"
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value) }}
                                            />

                                        </div>

                                    </div>


                                    {/* Button */}
                                    <div className="col-md-2 d-flex align-items-end">
                                        <form onSubmit={handleSubmit}>
                                            <button className="btn btn-primary btn-lg w-100">
                                                <i className="fa-solid fa-plus me-2"></i>
                                                Add User
                                            </button>
                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Users List */}
                        {userCount > 0 ?
                            (<div className="card border rounded-3">

                                <div className="card-header bg-white py-3">

                                    <div className="d-flex justify-content-between align-items-center">

                                        <h4 className="fw-bold mb-0">
                                            <i className="fa-solid fa-list me-2 text-primary"></i>
                                            Users List
                                        </h4>

                                        <span className="badge bg-primary fs-6">
                                            {userCount} Users
                                        </span>

                                    </div>

                                </div>


                                {/* Table */}
                                <div className="table-responsive">

                                    <table className="table table-hover align-middle mb-0">

                                        <thead className="table-primary">

                                            <tr>
                                                <th className="px-4">#</th>
                                                <th>User</th>
                                                <th>Email</th>
                                                <th className="text-center">Actions</th>
                                            </tr>

                                        </thead>

                                        <tbody>

                                            {/* User 1 */}

                                            {users.map((user) => (
                                                <tr>

                                                    <td className="px-4 fw-bold">
                                                        {user.id}
                                                    </td>

                                                    <td>

                                                        <div className="d-flex align-items-center gap-3">

                                                            <div
                                                                className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                                                                style={{
                                                                    width: "45px",
                                                                    height: "45px"
                                                                }}
                                                            >
                                                                <i className="fa-solid fa-user text-primary"></i>
                                                            </div>

                                                            <span className="fw-semibold">
                                                                {user.name}
                                                            </span>

                                                        </div>

                                                    </td>

                                                    <td className="text-secondary">
                                                        {user.email}
                                                    </td>

                                                    <td className="text-center">

                                                        <button className="btn btn-outline-primary me-2"
                                                            onClick={() => handleEdit(user.id)} >
                                                            <i className="fa-solid fa-pen"></i>
                                                        </button>

                                                        <button
                                                            className="btn btn-outline-danger"
                                                            onClick={() => setDeleteId(user.id)}
                                                        >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>

                                                    </td>

                                                </tr>
                                            ))
                                            }



                                        </tbody>

                                    </table>

                                    {deleteId && (
                                        <div className="alert alert-danger d-flex justify-content-between align-items-center mt-3">

                                            <span className="fw-semibold">
                                                Are you sure you want to delete this user?
                                            </span>

                                            <div>
                                                <button
                                                    className="btn btn-secondary me-2"
                                                    onClick={() => setDeleteId(null)}
                                                >
                                                    Cancel
                                                </button>

                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(deleteId)}
                                                >
                                                    Yes, Delete
                                                </button>
                                            </div>

                                        </div>
                                    )}

                                </div>

                            </div>) : ("")}


                        {/* Information */}
                        <div className="alert alert-info mt-4 mb-0">

                            <div className="d-flex gap-3">

                                <i className="fa-solid fa-circle-info fs-4"></i>

                                <div>

                                    <h5 className="fw-bold mb-1">
                                        User Management
                                    </h5>

                                    <p className="mb-0">
                                        Add new users and use the Edit or Delete
                                        buttons to manage existing users.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default UserManagement;