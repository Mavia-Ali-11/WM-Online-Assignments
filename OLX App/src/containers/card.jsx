import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';

class Card extends Component {
    render() {
        return(
            <div className="card">
              <p id="featured">FEATURED</p>
              <FontAwesomeIcon icon="heart" id="icon" />
              <center>
                <img src={ this.props.pic } className="card-img-top" />
              </center>
              <div className="card-body">
                <h5 className="card-title">{ this.props.price }</h5>
                <p className="card-text">{ this.props.product }</p>
              </div>
            </div>
        )
    }
}

export default Card;
