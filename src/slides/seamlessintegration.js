import bgImage2 from "../static/images/ds-screenshot-3.png";
import ds from "../static/images/ds-light.png";

export default function Integration() {
    return (
        <section id="section-34" class="slide current">
            <div class="wrap">
                <div class="grid vertical-align">
                    <div class="column">
                        <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
                        <br />
                        <h2>Seamless integration with your technological landscape.</h2>
                        <p class="text-intro">Plug Dime.Scheduler into systems such as Microsoft Dynamics 365 Business Central and get started planning your resources and projects in minutes.</p>
                    </div>
                    <div class="column">
                        <figure>
                            <img src={bgImage2} alt="Dime.Scheduler" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}