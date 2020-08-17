import React, { Component } from 'react'
import HeaderStyle from "./Header-style.scss"
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
                <div className="col-2">
                <img src="https://www.the-ascott.com/content/dam/tal/common/assets/logos/brands/ascott/logo-ascott-en.svg" width="100px" height="100px"/>
                </div>
                <div className="col-10">
                    React Router
                </div>
            </div>
        </div>
        </div>
        )
    }
}
export default Header;
