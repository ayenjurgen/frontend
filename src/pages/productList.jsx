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
                    <div className="navb-items">
                        <ul className="main-nav">
                            <li className="item">
                                <a href="login.php">LOGOUT</a>
                            </li>
                        </ul>
                    </div>
                    {/* Button trigger modal */}
                    <div className="mobile-toggler">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                            <i className="fa-solid fa-bars-staggered" />
                        </a>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="navbModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
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
                                                <span className="name">HOME</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li id="dashboard">
                                            <a href="login.php">
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
                    <div className="title pb-20 mb-10">
                        <h3 style={{ background: "red", fontWeight: 600 }}>Product List</h3>
                    </div>
                    <Link to={`./products/create`}>
                        <button type="button" className="btn btn-primary" >
                            Create Product
                        </button>
                    </Link>

                    <div classname="card-box mb-30">
                        <div className="pb-20">
                            <table className="table hover multiple-select-row data-table-export nowrap">
                                <thead>
                                    <tr>
                                        <th className="table-plus datatable-nosort">Name</th>
                                        <th>Age</th>
                                        <th>Office</th>
                                        <th>Address</th>
                                        <th>Start Date</th>
                                        <th>Salart</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-plus">Gloria F. Mead</td>
                                        <td>25</td>
                                        <td>Sagittarius</td>
                                        <td>2829 Trainer Avenue Peoria, IL 61602</td>
                                        <td>29-03-2018</td>
                                        <td>$162,700</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

};

export default ProductList;