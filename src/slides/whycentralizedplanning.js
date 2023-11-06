import { FormattedMessage } from 'react-intl'
import ds from "../static/images/logo_light.svg";
import bgImage from '../static/images/bg-centralizedplanningsolutionmatters2.jfif'

export default function WhyCentralizedPlanning() {
  return (
    <section className="bg-primary">
      <span className="background dark" style={{ backgroundImage: `url(${bgImage})` }}></span>
      <div className="wrap size-40">
        <figure style={{ marginBottom: "25px" }} >
          <img src={ds} alt="Dime.Scheduler" />
        </figure>
        <h3 style={{ textAlign: "center" }}><FormattedMessage id="whyplanning.title" defaultMessage="Why centralized planning matters" /></h3>
      </div>
    </section>
  )
}