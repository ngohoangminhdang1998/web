import React, { Component } from 'react'
import HeaderStyle from "./Header-style.scss"
import Footer from '../Footer/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from '../Homepage/Homepage';
class Header extends Component {
    render() {
        return (
            <div className="Header-website">
                <div className="container-fluid header-block">
                    <div className="row">
                        <div className="col-7 header-left">
                            <ul>
                                <li><a href="" className="text-white">Corporate information</a></li>
                                <li><a href="" className="text-white">Brand</a></li>
                                <li><a href="" className="text-white">News</a></li>
                                <li><a href="" className="text-white">Contact us</a></li>
                                <li><select>
                                    <option>US</option>
                                    <option>English</option>
                                </select>
                                </li>
                            </ul>
                        </div>
                        <div className="col-5 header-right">
                            <ul>
                                <li><a href="" className="text-white">Manage Booking</a></li>
                                <li><a href="" className="text-white">Your cart</a><span className="image-your-cart">1</span></li>
                                <li><button className="sign-in-button">Sign in</button></li>
                                <li>/</li>
                                <li><button className="sign-in-button">Sign up</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid header-logo">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/ascott/logo-ascott-en.svg" width="100px" height="100px" />
                        </div>
                        <div className="col-5">
                       
                                <div>
                                    <nav>
                                        <ul className="navbar-router">
                                            <li>
                                                <Link to="/homepage">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/membership">Membership</Link>
                                            </li>
                                            <li>
                                                <Link to="/business-travel">Business travel</Link>
                                            </li>
                                            <li>
                                                <Link to="/help">Help</Link>
                                            </li>
                                            <li>
                                                <Link to="/about-us">About us</Link>
                                            </li>
                                        </ul>
                                    </nav>

                                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                                    <Switch>
                                        <Route path="/homepage">
                                          <Homepage/>  
                                        </Route>
                                        <Route path="/contact">

                                        </Route>
                                        <Route path="/help">

                                        </Route>
                                    </Switch>
                                </div>
                    
                        </div>
                        <div className="col-3">
                            <button className="search-button">Search & Book</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
