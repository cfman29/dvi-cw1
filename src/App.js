import React, { useState} from 'react'
import './App.css';
import {Button} from '@material-ui/core'
import { Link as LinkScroll } from 'react-scroll';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from './comp/Modal.js'
import ReactPlayer from 'react-player'

import 'react-toastify/dist/ReactToastify.css'

import ReactMap from './ReactMap.js'

import Arrow from '@material-ui/icons/PlayArrowTwoTone';


import ReactTooltip from 'react-tooltip';


import Nav from './comp/Nav'


import {Route, BrowserRouter as Router, Switch } from "react-router-dom";


import Contact from './comp/Contact'
import Shop from './comp/Shop'
import Main from './comp/Main'

import logo from './img/logo.png'
import { render } from 'react-dom';



function App() {
  return(
    <div className="container">
    <Router>
      <Nav />            
        <Switch>
          <Route path="/Shop" component={Shop} />
          <Route path="/Contact" component={Contact} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
      </div>
  )
  }

export default App;