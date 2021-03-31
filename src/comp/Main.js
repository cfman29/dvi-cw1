import React, { useState} from 'react'
import './Main.css';
import {Button} from '@material-ui/core'
import { Link as LinkScroll } from 'react-scroll';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '../Modal'
import ReactPlayer from 'react-player'

import 'react-toastify/dist/ReactToastify.css'

import ReactMap from '../ReactMap.js'

import Arrow from '@material-ui/icons/PlayArrowTwoTone';


import ReactTooltip from 'react-tooltip';


import Nav from './Nav'


import {Route, BrowserRouter as Router, Switch } from "react-router-dom";


import Contact from './Contact'
import Shop from './Shop'
import logo from '../img/logo.png'



function Main() {

  
  const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }


  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container">
      
      <div className="top" name="top">
        <h1 className="header-text"><span className="Jus">Jus</span><span className="Jax">Jax</span></h1>
        <LinkScroll className="Link1" to="mid" smooth={true} duration={1000} >
          <Button className="header-btn">Click</Button>
        </LinkScroll>
      </div>

      <div className="mid" name="mid">
        <h1>About us!</h1>
        <div className="mid-cards">  
          <Card className="card">
            <CardContent>
              <CardMedia component="img" className="card-img" image="https://cdn.pixabay.com/photo/2020/07/13/08/15/cereals-5399962_960_720.jpg" title="Image" />
              <Typography variant="h5" component="h2" className="card-title">
                Our Farm
              </Typography>
              <Typography className="dj card-sub" color="textSecondary" >
                All our bars are 100% organic
              </Typography>
              <Typography variant="body2" component="p" className="card-body">
                All our bars are produced with high quality organic oats grown on our farm in Banff.
              </Typography>
              <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                <Button onClick={() => setIsOpen(true)} className="modal-open-btn">Open Modal</Button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                  We grow all of the ingredients in our farm in Banff. Every bite is made with love and care you need without the unwanted added sugar. 
                </Modal>
              </div>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <CardMedia component="img" className="card-img" image="https://cdn.pixabay.com/photo/2016/03/09/09/59/men-1245982_960_720.jpg" title="Image" />
              <Typography variant="h5" component="h2" className="card-title">
                Our Commitment
              </Typography>
              <Typography className="dj card-sub" color="textSecondary" >
                Healthy snacking form here on out
              </Typography>
              <Typography variant="body2" component="p" className="card-body">
                Our aim is to provide you with a delicious and healthy bar.
              </Typography>
              <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                <Button onClick={() => setIsOpen(true)} className="modal-open-btn">Open Modal</Button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                  We grow all of the ingredients in our farm in Banff. Every bite is made with love and care you need without the unwanted added sugar. 
                </Modal>
              </div>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <CardMedia component="img" className="card-img" image="https://cdn.pixabay.com/photo/2017/01/01/15/45/running-1944798_960_720.jpg" title="Image" />
              <Typography variant="h5" component="h2" className="card-title">
                Our Goal
              </Typography>
              <Typography className="dj card-sub" color="textSecondary" >
                Going on a run?
              </Typography>
              <Typography variant="body2" component="p" className="card-body">
                We are sponsoring countless events around the UK in the running community.
              </Typography>
              <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                <Button onClick={() => setIsOpen(true)} className="modal-open-btn">Open Modal</Button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                  We grow all of the ingredients in our farm in Banff. Every bite is made with love and care you need without the unwanted added sugar. 
                </Modal>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="bot-div" />
      
      <div className="bot" name="bot">
        <div className="running">
          <div className="running-sponsor">
            <h3>Our Sponsored events</h3>
            <h5>JusJax sponsored free running events all over the UK</h5>
            <div className="list-running">
              <ul> 
                <li data-tip="21st September, 2021">Edinburgh</li>
                <li data-tip="1st - 5th October, 2021">Manchester</li>
                <li data-tip="20th - 27th November, 2021">London</li>
                <li data-tip="5th - 6th January, 2022">Glasgow</li>
                <ReactTooltip place="right" type="info" effect="solid" />
              </ul>
            </div>
          </div>
          <div className="running-vid">
            <ReactPlayer url='https://youtu.be/NX7QNWEGcNI?t=20' playing="false" controls="false" loop="true" volume="0" className="player" />
          </div>
        </div>
        <h2>Use the map below to fine when and where our listed events are happening!</h2>
        <div className="asda">
          <Arrow className="arrow-down animate"/>
        </div>
      </div>
      <div className="bot-map">
          <ReactMap />
        </div>
    </div>
  );
}

export default Main;