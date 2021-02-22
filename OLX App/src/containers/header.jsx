import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-light" style={{ height: "70px" }}>
          <div className="container-fluid pr-5">
            <div className="col-1 col-md-1 pr-0">
              <a className="name" href="/">O<span className="l">l</span>x</a>
            </div>
            <div className="col-3 col-md-3 pl-0 input-group">
              <select className="custom-select" className="province" id="inputGroupSelect01">
                <option selected>Pakistan</option>
                <option value="1">Punjab</option>
                <option value="2">Islamabad Capital Territory</option>
                <option value="3">Sindh</option>
                <option value="4">Khyber Pakhtunkhwa</option>
              </select>
            </div>
              <div className="col-5 col-md-6 p-0">
                <input type="text" className="items" placeholder="Find Cars, Mobile Phones and more... " />
              </div>
              <span>
                <FontAwesomeIcon icon="search" id="magnifier" />
              </span>
            <div className="col-1 col-md-1">
              <center>
                <a className="login" href="">Login</a>
              </center>
            </div>
            <div className="col-1 col-md-1 pl-0">
              <center>
                <button type="button" className="sell">+SELL</button>
              </center>
            </div>
          </div>
        </nav>
        <div className="container-fluid bg-white p-2 header-two">
          <div className="col-2 col-md-2 p-0 text-center dropdown">
            <div>
              <h6 style={{marginRight:"10px"}}>ALL CATEGORIES</h6>
            </div>
            <div>
              <FontAwesomeIcon icon="chevron-down" />
            </div>
          </div>
          <div className="col-2 col-md-1 p-0 text-center category">
            <a href="">Mobile Phones</a>
          </div>
          <div className="col-1 col-md-1 p-0 text-center category">
            <a href="">Motor Cars</a>
          </div>
          <div className="col-1 col-md-1 p-0 text-center category">
            <a href="">Motorcycles</a>
          </div>
          <div className="col-1 col-md-1 p-0 text-center category">
            <a href="">Houses</a>
          </div>
          <div className="col-2 col-md-1 p-0 text-center category">
            <a href="">Video - Audio</a>
          </div>
          <div className="col-1 col-md-1 p-0 text-center category">
            <a href="">Tablets</a>
          </div>
          <div className="col-1 col-md-1 p-0 text-center category">
            <a href="">Land &amp; Plots</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
