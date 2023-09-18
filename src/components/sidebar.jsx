// Sidebar.jsx
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../pages/productList';

export default class Header extends Component {
    render(){
        return (
            <>
                <div className="right-sidebar">
                    <div className="sidebar-title">
                    <h3 className="weight-600 font-16 text-blue">
                        Layout Settings
                        <span className="btn-block font-weight-400 font-12">
                        User Interface Settings
                        </span>
                    </h3>
                    <div className="close-sidebar" data-toggle="right-sidebar-close">
                        <i className="icon-copy ion-close-round" />
                    </div>
                    </div>
                    <div className="right-sidebar-body customscroll">
                        <div className="right-sidebar-body-content">
                            <h4 className="weight-600 font-18 pb-10">Header Background</h4>
                            <div className="sidebar-btn-group pb-30 mb-10">
                                <a href="javascript:void(0);" className="btn btn-outline-primary header-white active">White</a>
                                <a href="javascript:void(0);" className="btn btn-outline-primary header-dark">Dark</a>
                            </div>
                            <h4 className="weight-600 font-18 pb-10">Sidebar Background</h4>
                            <div className="sidebar-btn-group pb-30 mb-10">
                                <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-light">White</a>
                                <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-dark active">Dark</a>
                            </div>
                            <h4 className="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>
                            <div className="reset-options pt-30 text-center">
                            <button className="btn btn-danger" id="reset-settings">
                                Reset Settings
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-side-bar">
                    <div className="brand-logo">
                    <a href="#">
                        <img src="../public/deskapp/vendors/images/deskapp-logo.svg" alt="" className="dark-logo"/>
                        <img src="../public/deskapp/vendors/images/deskapp-logo-white.svg" alt="" className="light-logo"/>
                    </a>
                    <div className="close-sidebar" data-toggle="left-sidebar-close">
                        <i className="ion-close-round" />
                    </div>
                    </div>
                    <div className="menu-block customscroll">
                    <div className="sidebar-menu">
                        <ul id="accordion-menu">
                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                <span className="micon bi bi-bag" />
                                <span className="mtext">Products</span>
                                </a>
                                <ul className="submenu">
                                    <Link to="/addProduct">
                                        <li><a>Add Product</a></li>
                                    </Link>
                                    <Link to="/productList">
                                        <li><a>Product List</a></li>
                                    </Link>
                                    <Link to="/productCategory">
                                        <li><a>Product Category</a></li>
                                    </Link>
                                </ul>
                            </li>
                        
                            <li>
                                <a href="calendar.html" className="dropdown-toggle no-arrow">
                                <span className="micon bi bi-calendar4-week" />
                                <span className="mtext">Manage Appointments</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="mobile-menu-overlay" />
            </>
        )
    }
}