import React, { Component } from 'react'
import FooterStyle from "./Footer-style.scss";
class Footer extends Component {
    render() {
        return (
            <div className="Footer-website ">
                <div className="Footer-website-logo container-fluid"> 
                <div class="footer-website-logobanner text-white">
                    <h1>Ascott</h1>
                    <p>A member of capitaland</p>
                </div>
                <div className="text-white">    
                    <h1>About us</h1>
                    <p>The Ascott Limited is a Singapore company that has grown to be one of the leading international lodging owner-operators. Ascott's portfolio spans more than 180 cities across over 30 countries in Asia Pacific, Central Asia, Europe, the Middle East, Africa and the USA. Ascott has about 69,000 operating units and over 48,000 units under development, making a total of about 117,000 units in over 700 properties.
                        Find out more about The Ascott Limited</p>
                </div>
                </div>
                <div className="Footer-website-information container-fluid d-flex justify-content-between">
                    <div className="FIND A RESIDENCE">
                    <h6>FIND A RESIDENCE</h6>
                    <ul> <li><a href="">By Property</a></li>
                        <li><a href="">By Map</a></li>
                        <li><a href="">By Destination</a></li>
                      
                    </ul>
                    </div>
                    <div className="ABOUT">
                    <h6>ABOUT</h6>
                    <ul>
                    <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                    </div>
                    <div className="OTHER LINKS">
                    <h6>OTHER LINKS</h6>
                    <ul>
                    <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                    </div>
                    <div className="ASCOTT STAR REWARDS">
                    <h6>ASCOTT STAR REWARDS</h6>
                    <ul>
                    <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                    </div>
                    <div className="HELP">
                    <h6>HELP</h6>
                    <ul>
                    <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;