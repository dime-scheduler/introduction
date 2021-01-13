import './App.css';
import { React, Component } from 'react';
import { IntlProvider } from 'react-intl'

import './static/css/webslides.css';
import './static/css/svg-icons.css';

import './static/js/webslides';
import './static/js/svg-icons';

import Header from './layout/header';
import Footer from './layout/footer';

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
import End from './slides/end';
import MoreFeatures from './slides/morefeatures';
import CentralizedPlanningMatters from './slides/centralized';
import Testimonials from './slides/testimonials';
import Reasons from './slides/reasons';
import WhyPlanningQuote from './slides/whyplanningquote';
import Tour from './slides/tour';

import ds from "./static/images/ds-light.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBookOpen } from '@fortawesome/free-solid-svg-icons'

import messages_nl from "./i18n/nl.json";
import messages_de from "./i18n/de.json";

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

    const messages = {
      'nl': messages_nl,
      'de': messages_de
    };

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const language = (params.get('lng').substr(0, 2) || "EN").toLowerCase();

    return (
      <div>
        <Header />

        <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">

          <main role="main">
            <div id='webslides'>

              <Introduction />
              <TableOfContents />
              <WhyCentralizedPlanning />
              {Reasons}
              <WhyPlanningQuote />
              <CentralizedPlanningMatters />
              <WhatIsDimeScheduler />
              <ThePlanningSolution />
              <SeamlessIntegration />
              <FlexibleAndVersatile />
              <Features />
              {Tour()}
              <MoreFeatures />
              <Industries />
              <Properties />
              <Stats />
              <UseDimeScheduler />
              <Testimonials />
              <Reseller />
              <LearnMore />
              <Contact />
              <End />
            </div>
          </main>
        </IntlProvider>

        <Footer />
      </div >
    );
  }
}
