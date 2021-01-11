import bgImage from "../static/images/ds-screenshot-6.png";
import properties from '../data/properties';

export default function Properties() {

    const propertiesList = properties.map(({ icon, header, text }) => (
        <li>
            <div>
                {icon}
                <h2>{header}</h2>
                {text}
            </div>
        </li>
    ));

    return (
        <section>
            <div className="wrap">
                <h2>In a nutshell</h2> <br />
                <div className="card-50">
                    <div className="flex-content" style={{ padding: 0 }}>
                        <ul className="flexblock specs">
                            {propertiesList}
                        </ul>
                    </div>
                    <figure>
                        <img src={bgImage} alt="Dime.Scheduler" />
                    </figure>
                </div>
            </div>
        </section>
    )
}