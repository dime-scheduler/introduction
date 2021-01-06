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

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const webslides = new window.WebSlides();
  }

  render() {

    return (
      <div className="App">
        <div id='webslides'>

          <Slide1></Slide1>
          <Slide2></Slide2>
          <Slide3></Slide3>
          <Slide4></Slide4>
          <Slide5></Slide5>
          <Slide6></Slide6>
          <Slide7></Slide7>
          <Slide9></Slide9>
          <Slide10></Slide10>
          <Slide8></Slide8>
        </div>
      </div >
    );
  }
}
