import React from "react";
import {Link, link } from 'react-router-dom';
// <div className="navbar bg-dark text-white rounded">
//   <div > </div>

// </div>
function Header() {
    return (
        <nav className="navbar navbar-expand-lg  bg-dark text-white rounded sticky-top">
            <div className="container">
                <a className="navbar-brand text-white" href="#"><span style={{color:"yellow"}}>D-</span>PIZZA</a>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="the-item collapse navbar-collapse text-white" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/login' className="nav-link" aria-current="page" >login</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sec2">OUR SNACK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#sec3">ABOUT US </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header;