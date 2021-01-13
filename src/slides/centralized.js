import { FormattedMessage } from 'react-intl'

import bgImage from '../static/images/bg-centralizedplanningsolutionmatters.jfif'

export default function CentralizedPlanningMatters() {
  return (
    <section className="bg-gradient-v">
      <span className="background dark" style={{ backgroundImage: `url(${bgImage})` }}></span>
      <div className="wrap size-60">
        <p className="text-context"><FormattedMessage id="centralized.title" defaultMessage="A centralized planning solution matters" /></p>
        <h4><FormattedMessage id="centralized.content" defaultMessage="Say goodbye to duplicate bookings, delays, missing materials, incomplete timesheets, incorrect invoices, unfinished jobs, no-shows, high employee turnover and low morale, unnecessary overtime, excessive status meetings and so many other little annoyances that hinder - and might even hurt - your company's growth." /></h4>
      </div>
    </section>
  )
}