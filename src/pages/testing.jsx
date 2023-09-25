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
            <h1>Product List</h1>
            <Link to={`./products/create`}>Create</Link>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        {/* <th>Rate</th> */}
                        <th>Price</th>
                        {/* <th>Active</th> */}
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.product_name}</td>
                                <td>{product.quantity}</td>
                                {/* <td>{product.rate}</td> */}
                                <td>{product.price}</td>
                                {/* <td>{product.active}</td> */}
                                <td>{product.status == 1 ? "available" : "Not available"}</td>
                                <td>
                                    <Link to={`products/${product.id}`}>View</Link>
                                    <Link to={`/products/edit/${product.id}`}>Edit</Link>

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>



            
        </>
    )

};

export default ProductList;