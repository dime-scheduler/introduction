import bgImage2 from "../static/images/ds-screenshot-5.png";
import ds from "../static/images/ds-light.png";

export default function Integration() {
    return (
        <section id="section-34" class="slide current">
            <div class="wrap">
                <div class="grid vertical-align">
                    <div class="column">
                        <figure>
                            <img src={bgImage2} alt="Dime.Scheduler" />
                        </figure>
                    </div>

                    <div class="column">
                        <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
                        <br />
                        <h2>Tailor Dime.Scheduler to your way of working</h2>
                        <p class="text-intro">A flexible design allows for easy integration, configuration and customization.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}