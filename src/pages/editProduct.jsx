import { useState, useEffect } from "react";
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

const EditProduct = () => {
    const [product, setProduct] = useState({
        productImage:"",
        productName:"",
        quantity: 0,
        status:"",
    });

    const update = () => {
        Swal.fire(
            'Good job!',
            'Product was updated successfully!',
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
                <div className="card-box pb-10">
                    <div className="h2 pd-20 mb-0">Edit Product</div>
                    <div className="pd-20 mb-30">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="file" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Product Category</label>
                                        <select className="selectpicker form-control">
                                            <optgroup label="Medicine" data-max-options="2">
                                                <option>Antibiotic</option>
                                                <option>Paracetamol</option>
                                                <option>Mefenamic</option>
                                            </optgroup>
                                            <optgroup label="Equipment" data-max-options="2">
                                                <option>Face Mask</option>
                                                <option>Buccal Tube</option>
                                                <option>Bracket Edgewise</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button type="submit" class="btn btn-primary btn-lg" onClick={update}>Update</button>                   
                    </div>
                </div>
            </div>
      </div>
    )
};

export default EditProduct;