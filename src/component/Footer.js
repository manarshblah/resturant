import React from "react";
import {Link, link } from 'react-router-dom';
import { FaPhoneVolume, FaClock, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer" style={{ alignItems:"center" }}>
        <div className="container" style={{ alignItems:"center" }}>
          <div className="box">
            <h3 style={{color:"#444"}}><span style={{color:"yellow",backgroundColor:"#444",borderRadius:"10px 0px 10px 0px"}}>D-</span>PIZZA</h3>
            <ul className="social">
            <li>
              <a href="https://google.com" className="facebook s">
                <i style={{color:"#444"}}><FaFacebookF /></i>
              </a>
            </li>
            <li>
              <a href="https://google.com" className="twitter s">
                <i style={{color:"#444"}}><FaTwitter /></i>
              </a>
            </li>
            <li>
              <a href="https://google.com" className="linkedin s">
                <i style={{color:"#444"}}><FaLinkedin /></i>
              </a>
            </li>
            </ul>
            <p className="text">
            our rerstaurant offers the best meals , if you want to visit a nice place and investigate a special time
            </p>
          </div>
          <div className="box">
            <ul className="links">
              <li> <a className="nav-link1" href="#sec2">OUR SNACK</a></li>
              <li> <a className="nav-link1 " href="#sec3">ABOUT US </a></li>
              <li><Link to='/login' className="nav-link1" aria-current="page" >login</Link></li>
            </ul>
          </div>
          <div className="box ">
            <div className="line">
              <i><FaMapMarkerAlt /></i>
              <div className="info">Syria, Homs, Alarman</div>
            </div>
            <div className="line">
              <i><FaClock /></i>
              <div className="info">Business Hours: From 9:00 To 18:00</div>
            </div>
            <div className="line">
              <i><FaPhoneVolume /></i>
              <div className="info">
                <span>+963981727698</span>
                <span>+963981727698</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default Footer;