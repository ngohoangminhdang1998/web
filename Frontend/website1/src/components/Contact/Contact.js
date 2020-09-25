import React, { Component } from 'react'
import Contact_style from './Contact-style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ContactUs from './contact-us-form/ContactUs';
export default class Contact extends Component {
    render() {
        return (
            <div className="Contact-us">
                <img src="https://img.lovepik.com/photo/50058/9486.jpg_wh860.jpg" width="100%" height="500px" />
                <div className="contact-content container-contact">
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col lg-4">
                            <p className="contact-content-thank">Thank you for your interest in Ascott The Residence. We welcome your enquiries and feedback regarding our properties, rates, reservations or generally about Ascott The Residence.</p>
                            <h4>Reservations and General Enquiries</h4>
                            <h4>Email: <a href="">enquiry@the-ascott.com</a></h4>
                            <h4><a href="">Global Reservations</a></h4>
                            <h6>From Europe</h6>
                            <a href="">+33 1 4105 7905</a>
                            <p>From Asia Pacific, the Americas, the Middle East & Other Countries/Regions </p>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <h4>We'd love to hear from you</h4>
                            <div className="contact-form">
                                <Router>
                                    <nav>
                                        <ul className="navbar-router">
                                            <li>
                                                <Link to="/contact-us">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/worldwide-reservation">Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <Switch>
                                        <Route path="/contact-us">
                                        <ContactUs/>
                                        </Route>
                                        <Route path="/worldwide-reservation">
                                     
                                        </Route>
                                    </Switch>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
