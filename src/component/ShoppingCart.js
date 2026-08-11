import React, { useState } from "react";

const ShoppingCart = () => {

    const [appleQuantity, setappleQuantity] = useState(0);
    const [mangoQuantity, setmangoQuantity] = useState(0);
    const [orangeQuantity, setorangeQuantity] = useState(0);

    const products = [
        {
            id: 1,
            name: "Apple",
            description: "Fresh red apple full of nutrients.",
            price: 100,
            quantity: appleQuantity,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8cqwcVTXLr1ClylUyrurV8kYdPaEztkbhrbpdQxgMQ&s"
        },
        {
            id: 2,
            name: "Mango",
            description: "Sweet and juicy organic mango.",
            price: 80,
            quantity: mangoQuantity,
            image: "https://5.imimg.com/data5/SELLER/Default/2026/4/602086668/ZJ/TZ/JM/125193389/mango.jpg"
        },
        {
            id: 3,
            name: "Orange",
            description: "Citrusy and fresh orange.",
            price: 60,
            quantity: orangeQuantity,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrZXQtLG-S6N3LeSCvDVZLICiX9CFxKZq2LJiPgkb8zNGhepHacWP1X0&s=10"
        }
    ];

    const totalAmount = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    return (
        <div className="container-fluid bg-light min-vh-100 py-4">

            <div className="container">

                {/* Main Card */}
                <div className="card shadow-sm border-0 rounded-4">

                    {/* Header */}
                    <div className="text-center py-4">

                        <h1 className="fw-bold display-5">
                            <i className="fa-solid fa-cart-shopping text-primary me-3"></i>
                            My Shopping Cart
                        </h1>

                        <p className="text-secondary fs-5 mb-0">
                            Add items, update quantity and see total in real-time.
                        </p>

                    </div>


                    {/* Cart */}
                    <div className="px-3 pb-3">

                        {/* Table Header */}
                        <div className="row bg-primary bg-opacity-10 py-3 rounded-top fw-bold fs-5">

                            <div className="col-md-4">
                                Product
                            </div>

                            <div className="col-md-2">
                                Price
                            </div>

                            <div className="col-md-3 text-center">
                                Quantity
                            </div>

                            <div className="col-md-2">
                                Total
                            </div>

                            <div className="col-md-1">
                            </div>

                        </div>


                        {/* Products */}
                        {products.map((product) => (

                            <div
                                className="row align-items-center py-3 border border-top-0"
                                key={product.id}
                            >

                                {/* Product */}
                                <div className="col-md-4">

                                    <div className="d-flex align-items-center gap-4">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="rounded-3 border"
                                            width="105"
                                            height="95"
                                        />

                                        <div>

                                            <h5 className="fw-bold mb-1">
                                                {product.name}
                                            </h5>

                                            <p className="text-secondary fs-5 mb-0">
                                                {product.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* Price */}
                                <div className="col-md-2">

                                    <strong className="fs-5">
                                        ₹{product.price.toFixed(2)}
                                    </strong>

                                </div>


                                {/* Quantity */}
                                <div className="col-md-3 text-center">

                                    <div className="btn-group">

                                        <button
                                            className="btn btn-outline-primary px-4"
                                            onClick={() => {

                                                if (product.id === 1) {
                                                    setappleQuantity(qty =>
                                                        qty > 0 ? qty - 1 : 0
                                                    );
                                                }

                                                if (product.id === 2) {
                                                    setmangoQuantity(qty =>
                                                        qty > 0 ? qty - 1 : 0
                                                    );
                                                }

                                                if (product.id === 3) {
                                                    setorangeQuantity(qty =>
                                                        qty > 0 ? qty - 1 : 0
                                                    );
                                                }

                                            }}
                                        >
                                            −
                                        </button>

                                        <button className="btn btn-outline-primary px-4">
                                            {product.quantity}
                                        </button>

                                        <button
                                            className="btn btn-outline-primary px-4"
                                            onClick={() => {

                                                if (product.id === 1) {
                                                    setappleQuantity(qty => qty + 1);
                                                }

                                                if (product.id === 2) {
                                                    setmangoQuantity(qty => qty + 1);
                                                }

                                                if (product.id === 3) {
                                                    setorangeQuantity(qty => qty + 1);
                                                }

                                            }}
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>


                                {/* Total */}
                                <div className="col-md-2">

                                    <strong className="fs-5">
                                        ₹{(product.price * product.quantity).toFixed(2)}
                                    </strong>

                                </div>


                                {/* Delete */}
                                <div className="col-md-1">

                                    <button className="btn btn-outline-danger">

                                        <i className="fa-solid fa-trash"></i>

                                    </button>

                                </div>

                            </div>

                        ))}


                        {/* Total Amount */}
                        <div className="alert alert-success d-flex justify-content-between align-items-center mt-3 mb-4">

                            <h4 className="fw-bold mb-0">
                                Total Amount
                            </h4>

                            <h3 className="fw-bold mb-0">
                                ₹{totalAmount}
                            </h3>

                        </div>


                        {/* Buttons */}
                        <div className="d-flex justify-content-center gap-4 pb-3">

                            <button className="btn btn-outline-danger btn-lg px-5">

                                <i className="fa-solid fa-trash me-2"></i>

                                Clear Cart

                            </button>


                            <button className="btn btn-primary btn-lg px-5">

                                <i className="fa-solid fa-cart-shopping me-2"></i>

                                Checkout

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ShoppingCart;
