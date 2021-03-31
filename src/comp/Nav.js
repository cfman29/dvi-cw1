import React from 'react'
import './Nav.css'
import logo from '../img/logo.png'
import Contact from './Contact'
import Shop from './Shop'

import {Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";


function Nav() {

    return (
        <div>
            
            <div className="navbar">
                <ul className="nav">
                    <Link to="/" exact ><li className="nav-link"><img src={logo} alt=""/></li></Link>
                    <Link to="/" exact ><li className="nav-link"><p>Home</p></li></Link>
                    <Link to="/Shop"><li className="nav-link"><p>Shop</p></li></Link>
                    <Link to="/Contact"><li className="nav-link"><p>Contact</p></li></Link> 
                </ul>
            </div>
        </div>
    )
}

export default Nav;