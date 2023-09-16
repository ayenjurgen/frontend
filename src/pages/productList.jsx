import { useState, useEffect } from "react";
import React, { Component } from 'react';
import Header from "../components/header";
import Sidebar from "../components/sidebar";
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
        <div>
            <Header />
            <Sidebar />
            <div className="main-container">
                <div className="card-box pb-10">
                    <div className="h2 pd-20 mb-0">Product List</div>
                        <table className="data-table table nowrap">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th className="datatable-nosort">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>001</td>
                                <td className="table-plus">
                                    <div className="name-avatar d-flex align-items-center">
                                        <div className="avatar mr-2 flex-shrink-0">
                                            <img src="../public/deskapp/vendors/images/photo4.jpg" className="border-radius-100 shadow" width={45} height={45} alt=""/>
                                        </div>
                                        <div className="txt">
                                            <div className="weight-600">Antibiotic</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Medicine</td>
                                <td>90</td>
                                <td>
                                    <span className="badge badge-pill" data-bgcolor="#e7ebf5" data-color="#265ed7">Low Stock</span>
                                </td>
                                <td>
                                    <div className="table-actions">
                                        <a href="#" data-color="#265ed7">
                                            <i className="icon-copy dw dw-edit2" />
                                        </a>
                                            <a href="#" data-color="#e95959">
                                        <i className="icon-copy dw dw-delete-3" />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td className="table-plus">
                                    <div className="name-avatar d-flex align-items-center">
                                        <div className="avatar mr-2 flex-shrink-0">
                                            <img src="../public/deskapp/vendors/images/photo5.jpg" className="border-radius-100 shadow" width={45} height={45} alt=""/>
                                        </div>
                                        <div className="txt">
                                            <div className="weight-600">Penicillin</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Medicine</td>
                                <td>100</td>
                                <td>
                                    <span className="badge badge-pill" data-bgcolor="#e7ebf5" data-color="#265ed7">Low Stock</span>
                                </td>
                                <td>
                                    <div className="table-actions">
                                        <a href="#" data-color="#265ed7">
                                            <i className="icon-copy dw dw-edit2" />
                                        </a>
                                            <a href="#" data-color="#e95959">
                                        <i className="icon-copy dw dw-delete-3" />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                </div>
            </div>
      </div>
    )

};

export default ProductList;