import './App.css';
import { React, Component } from 'react';
import { IntlProvider } from 'react-intl'
import Config from './App.config';
import ReactGA from 'react-ga';

import Header from './layout/header';
import Footer from './layout/footer';

import Introduction from './slides/intro';
import WhatIsDimeScheduler from './slides/whatisdimescheduler';
import ThePlanningSolution from './slides/planningsolution';
import WhyCentralizedPlanning from './slides/whycentralizedplanning';
import Properties from './slides/properties';
import Industries from './slides/industries';
import Stats from './slides/stats';
import SeamlessIntegration from './slides/seamlessintegration';
import LearnMore from './slides/learnmore';
import FlexibleAndVersatile from './slides/flexible';
import Contact from './slides/contact';
import End from './slides/end';
import MoreFeatures from './slides/morefeatures';
import CentralizedPlanningMatters from './slides/centralized';
import Testimonials from './slides/testimonials';
import Reasons from './slides/reasons';
import Tour from './slides/tour';
import DimeSchedulerScreenshot from './slides/ds';

import messages_nl from "./i18n/nl.json";
import messages_de from "./i18n/de.json";
import './static/css/webslides.css';
import './static/css/svg-icons.css';
import './static/js/webslides';
import './static/js/svg-icons';

ReactGA.initialize(Config.Google.GA_TRACKING_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
  componentDidMount() {
    const webslides = new window.WebSlides({
      loop: false,
      changeOnClick: true
    });

    webslides.el.addEventListener('ws:slide-change', (event) => {
      const classList = document?.getElementsByClassName("slide current")[0]?.classList ?? [];
      const footerClassList = document.querySelector('footer img')?.classList ?? [];

      if (classList.contains("bg-primary") && !footerClassList.contains("imageDark"))
        footerClassList.toggle("imageDark");
      else if (!classList.contains("bg-primary") && footerClassList.contains("imageDark"))
        footerClassList.toggle("imageDark");

      document.querySelector('footer').style.visibility = event.detail.currentSlide === 1 ? "hidden" : "visible";
    });
  }

  render() {
    return (
      <div>
        <Header />

        <IntlProvider  defaultLocale="en">

          <main role="main">
            <div id='webslides'>

              <Introduction />
              <DimeSchedulerScreenshot />
              <WhyCentralizedPlanning />
              {Reasons}
              <CentralizedPlanningMatters />
              <WhatIsDimeScheduler />
              <ThePlanningSolution />
              <SeamlessIntegration />
              <FlexibleAndVersatile />
              <Properties />
              {Tour()}
              <MoreFeatures />
              <Industries />
              <Stats />
              <Testimonials />
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
