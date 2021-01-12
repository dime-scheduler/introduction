import bgImage2 from "../static/images/ds-screenshot-5.png";
import ds from "../static/images/ds-light.png";

export default function Integration() {
    return (
        <section id="section-34" className="slide current">
            <div className="wrap">
                <div className="grid vertical-align">
                    <div className="column">
                        <figure>
                            <img src={bgImage2} alt="Dime.Scheduler" />
                        </figure>
                    </div>

                    <div className="column">
                        <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
                        <br />
                        <h2>Tailor Dime.Scheduler to your way of working.</h2>
                        <p className="text-intro">A flexible design allows for easy integration, configuration and customization.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}