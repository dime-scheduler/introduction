import bgImage from '../static/images/bg-centralizedplanningsolutionmatters.jfif'

export default function App() {
  return (
    <section class="bg-gradient-v">
      <span class="background dark" style={{ backgroundImage: `url(${bgImage})` }}></span>
      <div class="wrap size-60">
        <p class="text-context">A centralized planning solution matters</p>
        <h3>Say goodbye to duplicate bookings, delays, missing materials, incomplete timesheets, incorrect invoices, unfinished jobs, unnecessary overtime, avoidable status meetings and so many other little annoyances.</h3>
      </div>
    </section>
  )
}