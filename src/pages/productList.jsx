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
            <div className="header">
                <div className="header-left">
                <div className="menu-icon bi bi-list" />
                </div>
            </div>
            <div className="left-side-bar sidebar-light">
                <div className="profile">
                <div className="prof-top">
                    <img src="../../../public/imported/vendors/images/logo-icon.png" />
                    <p className="studname">greenhills escandor-mariano callanta-peligro</p>
                </div>
                <div className="close-sidebar" data-toggle="left-sidebar-close">
                    <i className="ion-close-round" />
                </div>
                </div>
                <div className="menu-block customscroll">
                <div className="sidebar-menu">
                    <ul id="accordion-menu">
                    <li>
                        <a href="#" className="dropdown-toggle no-arrow">
                        <span className="micon bi bi bi-house" />
                        <span className="mtext">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="dropdown-toggle no-arrow">
                        <span className="micon bi bi-person-check" />
                        <span className="mtext">My Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="dropdown-toggle no-arrow">
                        <span className="micon bi bi-arrow-left" />
                        <span className="mtext">Logout</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="mobile-menu-overlay" />
            <div className="main-container">
                <div className="xs-pd-20-10 pd-ltr-20">
                <div className="title pb-20">
                    <h2 className="h3 mb-0">My Profile</h2>
                </div>
                <form action="post">
                    <div className="row">
                    <div className="col-md-9">
                        <div className="pd-20 card-box mb-30">
                        <section>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <label>First Name :</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    className="form-control"
                                />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <label>Middle Name :</label>
                                <input
                                    type="text"
                                    name="middlename"
                                    className="form-control"
                                />
                                </div>
                            </div>
                            </div>
                        </section>
                        </div>
                    </div>
                    <div
                        className="col-md-3"
                        style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                        }}
                    >
                        <button
                        type="submit"
                        name="register"
                        className="btn"
                        id="submit-button"
                        >
                        Update
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </>
                
    )

};

export default ProductList;