import bgImage from "../static/images/ds-laptop.png";
import ds from "../static/images/ds-light.png";

export default function ThePlanningSolution() {
    return (
        <section id="section-34" className="slide current">
            <div className="wrap">
                <div className="grid vertical-align">
                    <div className="column">
                        <figure>
                            <img src={bgImage} alt="Dime.Scheduler" />
                        </figure>
                    </div>

                    <div className="column">
                        <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
                        <br />
                        <h2>The graphical resource and project planning solution.</h2>
                        <p className="text-intro">Supercharge your ERP, CRM or any LoB system with Dime.Scheduler and plan ahead.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}