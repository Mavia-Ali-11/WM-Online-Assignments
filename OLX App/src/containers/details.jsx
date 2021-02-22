import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import advertise from '../images/advertise.jpg'
import sellerpic from '../images/sellerpic.png'
import '../App.css';


class Details extends Component {
    render() {
        return (
            <div className="cotianer-fluid p-5">
                <div className="col-md-8 p-0 one">
                    <img src={this.props.pic} style={{width:"100%", height:"425px"}} />
                    <div className="container-fluid border mt-1 p-3 three">
                        <h5>Details</h5>
                        <div className="col-md-3" style={{ color: "gray" }}>Make</div>
                        <div className="col-md-3">{this.props.make}</div>
                        <div className="col-md-3" style={{ color: "gray" }}>Condition</div>
                        <div className="col-md-3">{this.props.condition}</div>
                        <hr />
                        <h5>Description</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi autem, ex doloribus voluptatum, laudantium ipsam doloremque quisquam voluptatem quas facilis numquam possimus culpa! Assumenda, quos. Cum incidunt voluptatem doloremque impedit.</p>
                    </div>
                </div>
                <div className="col-md-4 float-right two">
                    <div className="inner-of-two pb-1">
                        <h1>{this.props.price}</h1>
                        <p className="pb-2">Model : {this.props.model}<br /> <span style={{ color: "gray" }}>{this.props.product}</span></p>
                        <p style={{ color: "gray", fontSize: "13px" }}>{this.props.address}</p>
                    </div>
                    <div className="inner-of-two">
                        <h5 className="mb-3">Seller description</h5>
                        <div className="container-fluid p-0 ending">
                            <div className="col-md-3 p-0 mb-2">
                                <img src={sellerpic} width="72" height="72" />
                            </div>
                            <div className="col-md-9 p-0">
                                <p id="sellerName">{this.props.sellername}</p>
                                <p id="member">Member since {this.props.since}</p>
                            </div>
                        </div>
                        <button id="chat">Chat with seller</button>
                        <center>
                            <div id="contact-seller">
                                <FontAwesomeIcon icon="phone-alt" />&nbsp;&nbsp;<span>** *** ****</span>
                            </div>
                        </center>
                    </div>
                    <div>
                        <img className="mt-4" src={advertise} width="100%" height="235" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;