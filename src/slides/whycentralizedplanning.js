import { FormattedMessage } from 'react-intl'
import ds from "../static/images/ds-dark.png";
import bgImage from '../static/images/bg-centralizedplanningsolutionmatters2.jfif'

export default function WhyCentralizedPlanning() {
  return (
    <section className="bg-secondary" id="section-10">
      <span className="background dark" style={{ backgroundImage: `url(${bgImage})` }}></span>
      <div className="wrap size-50">
        <figure>
          <img src={ds} alt="Dime.Scheduler" />
        </figure>
        <h3><FormattedMessage id="whyplanning.title" defaultMessage="Why planning can make or break your business" /></h3>
      </div>
    </section>
  )
}