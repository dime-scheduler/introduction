import './App.css';
import { React, Component } from 'react';

import './static/css/webslides.css';
import './static/css/svg-icons.css';

import './static/js/webslides';
import './static/js/svg-icons';

import Introduction from './slides/intro';
import WhatIsDimeScheduler from './slides/whatisdimescheduler';
import ThePlanningSolution from './slides/planningsolution';
import WhyCentralizedPlanning from './slides/whycentralizedplanning';
import Properties from './slides/properties';
import Industries from './slides/industries';
import Features from './slides/features';
import Reseller from './slides/reseller';
import Stats from './slides/stats';
import UseDimeScheduler from './slides/use';
import SeamlessIntegration from './slides/seamlessintegration';
import LearnMore from './slides/learnmore';
import FlexibleAndVersatile from './slides/flexible';
import TableOfContents from './slides/toc';
import Contact from './slides/contact';

import Reason1 from './slides/centralized-reason-1';
import Reason2 from './slides/centralized-reason-2';
import Reason3 from './slides/centralized-reason-3';
import Reason4 from './slides/centralized-reason-4';
import Reason5 from './slides/centralized-reason-5';
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
            <Introduction />
            <TableOfContents />
            <WhyCentralizedPlanning />
            <Reason1 />
            <Reason2 />
            <Reason3 />
            <Reason4 />
            <Reason5 />
            <WhatIsDimeScheduler />
            <ThePlanningSolution />
            <SeamlessIntegration />
            <FlexibleAndVersatile />
            <Properties />
            <Industries />
            <Features />
            <Stats />
            <UseDimeScheduler />
            <Reseller />
            <LearnMore />
            <Contact />
          </div>
        </main>
        <footer>
          <div>
            <p>
              <span class="alignright">
                <a href="http://dimescheduler.com" title="Dime.Scheduler">
                  <img src={ds} alt="Dime.Scheduler" />
                </a>
              </span>
            </p>
          </div>
        </footer>
      </div >
    );
  }
}
