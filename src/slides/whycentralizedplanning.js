import ds from "../static/images/ds-dark.png";
import bgImage from '../static/images/bg-centralizedplanningsolutionmatters2.jfif'

export default function WhyCentralizedPlanning() {
  return (
    <section class="bg-secondary" id="section-10">
      <span class="background dark" style={{ backgroundImage: `url(${bgImage})` }}></span>
      <div class="wrap size-50">
        <figure>
          <img src={ds} alt="Dime.Scheduler" />
        </figure>
        <h2>The importance of planning</h2>
      </div>
    </section>
  )
}