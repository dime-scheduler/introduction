import './App.css';
import { React, Component } from 'react';

import './static/css/webslides.css';
import './static/css/svg-icons.css';

import './static/js/webslides';
import './static/js/svg-icons';

import Slide1 from './slides/slide1';
import Slide2 from './slides/slide2';
import Slide3 from './slides/slide3';
import Slide4 from './slides/slide4';
import Slide5 from './slides/slide5';
import Slide6 from './slides/slide6';
import Slide7 from './slides/slide7';
import Slide8 from './slides/slide8';
import Slide9 from './slides/slide9';
import Slide10 from './slides/slide10';
import Slide11 from './slides/slide11';
import Slide12 from './slides/slide12';
import Slide13 from './slides/slide13';

import ds from "./static/images/ds-light.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const webslides = new window.WebSlides({
      loop: false,
      changeOnClick: true
    });
  }

  render() {

    return (
      <div>
        <header role="banner">
          <nav role="navigation">
            <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
            <ul>
              <li>
                <a rel="external" href="https://www.dimescheduler.com" title="Dime.Scheduler">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </li>
              <li>
                <a rel="external" href="https://docs.dimescheduler.com" title="Dime.Scheduler Docs">
                  <FontAwesomeIcon icon={faBookOpen} />
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main role="main">
          <div id='webslides'>
            <Slide1></Slide1>
            <Slide2></Slide2>
            <Slide3></Slide3>
            <Slide11></Slide11>

            <Slide13></Slide13>

            <Slide4></Slide4>
           
            <Slide5></Slide5>
            
            <Slide6></Slide6>
            <Slide7></Slide7>
            <Slide12></Slide12>
            <Slide9></Slide9>
            
            <Slide10></Slide10>
            <Slide8></Slide8>
          </div>
        </main>
      </div >
    );
  }
}
