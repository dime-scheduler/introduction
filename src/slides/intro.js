import bgImage from "../static/images/bg.png";
import ds from "../static/images/ds.svg";

export default function Introduction() {
    return (
        <section className="bg-primary aligncenter">
            <span className="background auto" style={{ backgroundImage: `url(${bgImage})`, }}></span>
            <div className="wrap">
                <figure>
                    <img src={ds} alt="Dime.Scheduler" className="logo" style={{ maxHeight: 200 }} />
                </figure>

                <br />
                <br />
                <p className="text-symbols">Stop puzzling. Start planning.</p>
            </div>
        </section>
    )
}