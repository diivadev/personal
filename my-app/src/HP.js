import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';

import hero1 from './assets/hp/img1.png';
import hero2 from './assets/hp/img2.png';
import hero3 from './assets/hp/img3.png';

import Slider from "react-slick";
import {BrowserRouter, Route, Link, Router} from 'react-router-dom';

import './HP.css';

export default class HP extends Component {
   state = {
   }
   render () {
     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [{breakpoint: 500, settings: {autoplay: true, slidesToShow: 1}}],
    };

      return (
        <div>
         <header>
          <div className="hp-nav">
             <input type="checkbox" id="nav" class="hidden"/>
             <label for="nav" class="nav-open"><i></i><i></i><i></i></label>
             <div class="nav-container-hp">
               <ul>
                 <li><a href="#">Work</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Gallery</a></li>
               </ul>
             </div>

           </div>
         </header>
          <body>
          <div className="HP-title">
            <h2> Redesigning a cleaner, less cluttered, and editorial style homepage for macys.com </h2>
          </div>

          <div className="HP-WF">
            <code> Work file 1/4 </code>
          </div>

          <div className="sli">
            <Slider {...settings}>
              <div className='wrapper'>
                <img src={hero1} className="hero1" alt="hero" />
                <div className='hero_text' id='hero_text1'>
                </div>
              </div>
              <div className='wrapper'>
                <img src={hero2} className="hero2" alt="hero" />
                  <div className='hero_text' id='hero_text2'>

                  </div>
              </div>
              <div className='wrapper'>
                <img src={hero3} className="hero3" alt="hero" />
                <div className='hero_text' id='hero_text3'>
                </div>
              </div>
              </Slider>
            </div>


          <div className="box1">
            <div className="paragraph">
              <p>  Stakeholders  : VP of UX & Directory of Strategy <br />
                   Role : Developer & Designer <br />
                   Demo : <code> http://homepage-redesign.herokuapp.com/ </code> </p>
            </div>
          </div>
          </body>
          </div>
        );

   }
}
