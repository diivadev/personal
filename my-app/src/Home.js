import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import hpimg from './assets/hp/hp.png'
import hpimg2 from './assets/hp/hpv2.png'
import omni from './assets/omni/omni.jpg'
import personalize from './assets/personalize/personalize.jpg'
import gender from './assets/gender/gender.jpg'

import {BrowserRouter, Route, Link, Router} from 'react-router-dom';

import HP from './HP.js';

const R= () => (
<Router>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    <hr />


    <Route path="/about" component={About} />
  </div>
</Router>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
class Home extends Component {


  render() {
    return (

      <div className="App">

        <div className="Nyssa-body">

          <div className="first_row">

            <div className="HP">
              <div className="blah">
                <Link to="/HP" >
                    <img src={hpimg} />
                </Link>
                <div className="HPD">
                  <p className="hp_description">Homepage Redesign </p>
                </div>
              </div>

            </div>

            <div className="OmniCloset">
              <div className="blah2">
                <img src={omni} />
                  <div className="OCD">
                    <p class="oc_d"> Omni Closet </p>
                  </div>
              </div>
            </div>

          </div>

          <div className="second_row">

          <div class="PP">
            <div class="blah3">
              <img src={personalize} />
                <div className="PPD">
                  <p class="pp_d"> Personalization + Profile Building </p>
                </div>
            </div>
          </div>

          <div class="Visualize">
            <div class="blah4">
              <img src={gender} />
                <div class="GGD">
                  <p class="gg_d"> Visualizing the Gender Gap </p>
                </div>
              </div>
            </div>
          </div>

          <Route path="/HP" component={HP} />


        </div>
      </div>

    );
  }
}

export default Home;
