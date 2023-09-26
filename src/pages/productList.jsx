import { useState, useEffect } from "react";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/products`;
        const controller = new AbortController();

        const requestOPtions = {
            signal: controller.signal,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(url, requestOPtions)
            .then((response) => response.json())
            .then((json) => {
                setProducts(json);
            })
            .catch((err) => console.log(err));

        return () => {
            controller.abort();
        };

    }, []);

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="navb-logo">
                        <img src="../../../public/imported/vendors/images/logo-icon.png" alt="hi" />
                        <h3>BlueSky</h3>
                    </div>
                    {/* <div className="navb-items">
                        <ul className="main-nav">
                            <li className="item">
                                <a href="login.php">LOGOUT</a>
                            </li>
                        </ul>
                    </div> */}
                    {/* Button trigger modal */}
                    {/* <div className="mobile-toggler">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                            <i className="fa-solid fa-bars-staggered" />
                        </a>
                    </div> */}
                    {/* Modal */}
                    <div className="modal fade" id="navbModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                        <i class="icon-copy bi bi-x-circle"></i>
                                    </button>
                                </div>
                                <div className="modal-middle">
                                    <img src="../../../public/imported/vendors/images/logo-icon.png" alt="hi" />
                                    <h3>BlueSky</h3>
                                </div>
                                <div className="modal-body">
                                    <ul>
                                        <li id="dashboard">
                                            <a href="index.php">
                                                <span class="micon bi bi-house"></span>
                                                <span className="name">HOME</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li id="dashboard">
                                            <a href="login.php">
                                                <span class="micon bi bi-arrow-bar-left"></span>
                                                <span className="name">LOGOUT</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="wrap-div">
                <div className="xs-pd-20-10 pd-ltr-20">
                    <div class="title pb-20">
                        <h2 class="h3 mb-0">Product List</h2>
                    </div>
                    <Link to={`./products/create`}>
                        <button type="button" className="btn btn-primary" style={{ marginTop: 20 }}>
                            Create Product
                        </button>
                    </Link>
                    <div className="card-box" style={{ marginTop: 10, padding: 20}}>
                        <table className="data-table table nowrap">
                            <thead>
                                <tr>
                                    <th className="table-plus">Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th className="datatable-nosort">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((product) => {
                                    return (
                                        <tr key={product.id}>
                                            <td className="table-plus">
                                                <div className="name-avatar d-flex align-items-center">
                                                    <div className="txt">
                                                        <div className="weight-600">{product.product_name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.quantity}</td>
                                            <td>{product.price}</td>
                                            <td>{product.status == 1 ? "Available" : "Not available"}</td>
                                            <td>
                                                <div className="table-actions">
                                                    <Link to={`products/${product.id}`}>
                                                        <a href="#" data-color="#265ed7" style={{fontSize: 15, marginRight: 10}}>
                                                            <i className="icon-copy bi bi-eye" /> View
                                                        </a>
                                                    </Link>
                                                    <Link to={`/products/edit/${product.id}`}>
                                                        <a href="#" data-color="#e95959" style={{fontSize: 15}}>
                                                            <i className="icon-copy dw dw-edit2" /> Edit
                                                        </a>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )

};

export default ProductList;