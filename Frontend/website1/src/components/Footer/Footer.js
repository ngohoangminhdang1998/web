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
                <div className="Footer-website-information container-fluid text-white">
                    <div className="container d-flex justify-content-between pt-2 pb-2">
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
                                <li><a href="">About Us</a></li>
                                <li><a href="">Our Serviced Residences</a></li>
                                <li><a href="">eDirectory</a></li>
                                <li><a href="">Upcoming Properties</a></li>
                                <li><a href="">Extended Stay</a></li>
                                <li><a href="">News</a></li>
                            </ul>
                        </div>
                        <div className="OTHER LINKS">
                            <h6>OTHER LINKS</h6>
                            <ul>
                                <li><a href="">Best Rates Guaranteed</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Sitemap</a></li>
                            </ul>
                        </div>
                        <div className="ASCOTT STAR REWARDS">
                            <h6>ASCOTT STAR REWARDS</h6>
                            <ul>
                                <li><a href="">Become A Member</a></li>
                                <li><a href="">Member Benefits</a></li>
                                <li><a href="">ASR Participating Properties</a></li>
                            </ul>
                        </div>
                        <div className="HELP">
                            <h6>HELP</h6>
                            <ul>
                                <li><a href=""><i className="fas fa-phone-alt"></i>  Contact Us</a></li>
                                <li><a href=""><i className="far fa-comment-dots"></i>  Reservation Chat</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer-asr d-flex justify-content-between">
                        <a href="" className="pb-0"><img src="https://www.the-ascott.com/content/dam/tal/media/images/common-ascott/brand-logos/logo-asr-white.png.transform/ascott-lowres/image.png" height="26px" width="150px"/></a>
                        <a href=""><img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/ascott/logo-ascott-alt-en.png.transform/ascott-lowres/image.png" height="80px" width="100px"/></a>
                        <a href="" className="align-logo"><img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/citadines/logo-citadines-white-alt-en.png.transform/ascott-lowres/image.png" height="40px" width="100px"/></a>
                        <a href="" className="align-logo"><img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/citadines/citadines-connect-white-logo.png.transform/ascott-lowres/image.png" height="40px" width="100px"/></a>
                        <a href=""><img src="https://www.the-ascott.com/content/dam/tal/media/images/common-ascott/brand-logos/somerset/logo-somerset-alt-en.svg" height="80px" width="150px"/></a>
                        <a href="" className="align-logo"><img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/crest/logo-thecrestcollection-alt-en.png.transform/ascott-lowres/image.png" height="40px" width="150px"/></a>
                        <a href="" className="align-logo"><img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/lyf/logo-lyf-alt-en.png.transform/ascott-lowres/image.png" height="40px" width="50px"/></a>
                    </div>
                    <hr/>
                    <div className="Footer-quest d-flex justify-content-center">
                        <a href=""><img src="https://www.the-ascott.com/content/dam/tal/media/images/logo/footer-logo/quest_footer_logo.png.transform/ascott-lowres/image.png" width="100px" height="80px"/></a>
                        <a href=""><img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/tauzia/tauzia-white-logo.png.transform/ascott-lowres/image.png" width="100px" height="80px"/></a>
                    </div>
                </div>
                <div className="Footer-bottom container">
                    <div className="row">
                        <div className="col-md-1">
                        <a href=""><img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/ascottlimited/logo-theascottlimited.svg" width="100px" height="80px"/></a>
                        </div>
                        <div className="Footer-cookie col-md-8">
                            <ul>
                                <li><a href="">Terms of Uses</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Cookie Preferences</a></li>
                                <li><a href="">Guarantee and Cancellation Policy</a></li>
                            </ul>
                            <p><i className="far fa-copyright"></i> 2020 The Ascott Limited. ALl rights reserved</p>
                            <ul>
                                <li><a href="">ICP证: 沪ICP备12018090号-13</a></li>
                                <li><a href="">沪公网备31010102006539号</a></li>
                            </ul>
                        </div>
                        <div className="col-md-1 offset-md-2">
                            <img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/logo-capitaland.svg" width="100px" height="80px"/>
                        </div>
                    </div>
                
                </div>
            </div>

        )
    }
}
export default Footer;