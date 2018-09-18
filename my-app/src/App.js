import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import hpimg from './assets/hp/hp.png'
import hpimg2 from './assets/hp/hpv2.png'
import omni from './assets/omni/omni.jpg'
import personalize from './assets/personalize/personalize.jpg'
import gender from './assets/gender/gender.jpg'

import {BrowserRouter, Route, Link} from 'react-router-dom';
import HP from './HP';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <div className="Nyssa-body">

          <div>
            <Route exact={true} path='/' render={() => (
              <div className="App">
                <Home />
              </div>
            )}/>
          </div>

          <div>
            <Route exact={true} path='/HP' render={() => (
              <div className="HP">
                <HP />
              </div>
            )}/>
          </div>


        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
