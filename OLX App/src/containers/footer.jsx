import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import appstore from '../images/appstore.webp'
import phoneapp from '../images/phone-app.webp'
import playstore from '../images/playstore.webp'
import '../App.css';


class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid p-3 mt-5 ending" style={{ backgroundColor: "Ghostwhite" }}>
                    <div className="col-md-4">
                        <img src={phoneapp} />
                    </div>
                    <div className="col-md-4">
                        <h2>TRY THE OLX APP</h2>
                        <p style={{ fontSize: "18px", fontFamily: "Arial" }}>
                            Buy, sell and find just about anything using the app on your mobile.
                        </p>
                    </div>
                    <div className="col-md-1">
                        <hr id="hr" />
                    </div>
                    <div className="col-md-3">
                        <h6 style={{ marginBottom: "15px" }}>GET YOUR APP TODAY</h6>
                        <img src={appstore} style={{ width: "130px", marginRight: "10px" }} />
                        <img src={playstore} style={{ width: "130px" }} />
                    </div>
                </div>

                <div className="container-fluid p-5 publicity" style={{ backgroundColor: "lavender" }}>
                    <div className="col-md-2 mr-4 ml-2">
                        <h6>POPULAR CATEGORIES</h6>
                        <a href="">Cars</a>
                        <a href="">Flats for rent</a>
                        <a href="">Jobs</a>
                        <a href="">Mobile Phones</a>
                    </div>
                    <div className="col-md-2 mr-4">
                        <h6>TRENDING SEARCHES</h6>
                        <a href="">Bikes</a>
                        <a href="">Watches</a>
                        <a href="">Books</a>
                        <a href="">Dogs</a>
                    </div>
                    <div className="col-md-2 mr-4">
                        <h6>ABOUT US</h6>
                        <a href="">About OLX Group</a>
                        <a href="">OLX Blog</a>
                        <a href="">Contact Us</a>
                        <a href="">OLX for Businesses</a>
                    </div>
                    <div className="col-md-2 mr-4">
                        <h6>OLX</h6>
                        <a href="">Help</a>
                        <a href="">Sitemap</a>
                        <a href="">Legal &amp; Privacy information</a>
                        <a href="">&nbsp;</a>
                    </div>
                    <div className="col-md-3" id="brands">
                        <h6>FOLLOW US</h6>
                        <a href="https://www.facebook.com/olxpakistan" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                        <a href="https://twitter.com/OLX_Pakistan" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1" target="_blank">
                            <FontAwesomeIcon icon="play" />
                        </a>
                        <a href="https://www.instagram.com/olx.pakistan/" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a><br />
                        <img src={appstore} style={{ width: "90px", marginRight: "10px" }} />
                        <img src={playstore} style={{ width: "90px" }} />
                    </div>
                </div>
                
                <div className="container-fluid p-3 footer" style={{ backgroundColor: "#002f34" }}>
                    <div className="col-md-4 pl-5">
                        <b>Other Countries</b>&nbsp;&nbsp;
                        <a href="https://www.olx.in/" target="_blank">India</a>
                        &nbsp;-&nbsp;
                        <a href="https://www.olx.co.za/" target="_blank">South Africa</a>
                        &nbsp;-&nbsp;
                        <a href="https://www.olx.co.id/" target="_blank">Indonesia</a>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 pr-5 text-right">
                        <b>Free Classifieds in Pakistan</b>&nbsp;&nbsp;
                        .© 2006-2020 OLX
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;