import bgImage from "../static/images/ds-screenshot-2.png";
import ds from "../static/images/ds-light.png";

export default function Plan() {
    return (
        <section class="slide current">
            <div class="wrap">
                <div class="grid vertical-align">
                    <div class="column alignleft">
                        <figure><img className="alignleft" src={bgImage} alt="Dime.Scheduler" /></figure>
                    </div>
                    <div class="column">
                        <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>

                        <p class="text-intro">Plan everything in one place</p>
                        <p>Tailor Dime.Scheduler to your way of working and say goodbye to duplicate bookings, delays, missing materials, incomplete timesheets, incorrect invoices, unfinished jobs, unnecessary overtime, avoidable status meetings and so many other little annoyances.</p>
                        <p><a class="button" href="https://www.docs.dimescheduler.com" target="_blank">Learn more</a></p>
                    </div>
                </div>
            </div>
        </section>

    )
}