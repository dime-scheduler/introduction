import bgImage from "../static/images/ds-screenshot-1.png";
import properties from '../data/properties';

export default function Start() {

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
        <section className="bg-primary">
            <div class="wrap">
                <div class="card-50">
                    <div class="flex-content">
                        <ul class="flexblock specs">
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