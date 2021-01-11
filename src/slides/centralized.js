import bgImage from '../static/images/bg-centralizedplanningsolutionmatters.jfif'

export default function CentralizedPlanningMatters() {
  return (
    <section class="bg-gradient-v">
      <span class="background dark" style={{ backgroundImage: `url(${bgImage})` }}></span>
      <div class="wrap size-60">
        <p class="text-context">A centralized planning solution matters</p>
        <h4>Say goodbye to duplicate bookings, delays, missing materials, incomplete timesheets, incorrect invoices, unfinished jobs, no-shows, high employee turnover and low morale, unnecessary overtime, excessive status meetings and so many other little annoyances that hinder - and might even hurt - your company's growth.</h4>
      </div>
    </section>
  )
}