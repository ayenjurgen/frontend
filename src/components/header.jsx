// Header.js
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="header-left">
                    <div className="menu-icon bi bi-list" />
                    <div className="search-toggle-icon bi bi-search" data-toggle="header_search"/>
                    <div className="header-search">
                    <form>
                        <div className="form-group mb-0">
                        <i className="dw dw-search2 search-icon" />
                        <input type="text" className="form-control search-input" placeholder="Search Here"/>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="header-right">
                    <div className="dashboard-setting user-notification">
                    <div className="dropdown">
                        <a className="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">
                            <i className="dw dw-settings2" />
                        </a>
                    </div>
                    </div>

                    <div className="user-info-dropdown">
                        <div className="dropdown">
                            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                            <span className="user-icon">
                                <img src="../public/deskapp/vendors/images/photo1.jpg" alt="" />
                            </span>
                            <span className="user-name">Ross C. Lopez</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                            <a className="dropdown-item" href="profile.html">
                                <i className="dw dw-user1" /> Profile
                            </a>
                            <a className="dropdown-item" href="profile.html">
                                <i className="dw dw-settings2" /> Setting
                            </a>
                            <a className="dropdown-item" href="faq.html">
                                <i className="dw dw-help" /> Help
                            </a>
                            <a className="dropdown-item" href="login.html">
                                <i className="dw dw-logout" /> Log Out
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}