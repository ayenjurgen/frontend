import { useState, useEffect } from "react";
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

const ProductCategory = () => {
    const [product, setProducts] = useState([]);

    const add = () => {
        Swal.fire(
            'Good job!',
            'Category was added successfully!',
            'success'
        )
    };

    const handleSubmit =() => {
        alert("Submit");
    };

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="main-container">
                <div className="card-box pb-10 mb-10">
                    <div className="h2 pd-20 mb-0">Add Category</div>
                    <div className="pd-20 mb-30">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>New Category</label>
                                        <input type="text" className="form-control" placeholder="Add new product category" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button type="submit" class="btn btn-primary btn-lg" onClick={add}>Add Category</button>
                    </div>
                </div>
                <div className="card-box pb-10">
                    <div className="h2 pd-20 mb-0">Category List</div>
                    <div className="pd-20 mb-30">

                    </div>
                </div>
            </div>
      </div>
    )

};

export default ProductCategory;