import { FormattedMessage } from 'react-intl';
import ImageCard from '../components/imageCard';

import bgImage from "../static/images/ds-screenshot-6.png";
import properties from '../data/properties';

export default function Properties() {

    const propertiesList = properties.map(({ icon, header, text }, i) => (
        <li key={'property-' + i}>
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
                <div className="card-50">
                    <div className="flex-content" style={{ padding: 0 }}>
                        <ul className="flexblock specs">
                            {propertiesList}
                        </ul>
                    </div>
                    <figure>
                        <ImageCard image={bgImage} imageId="ds-props" className="alignleft" alt="Dime.Scheduler" />
                    </figure>
                </div>
            </div>
        </section>
    )
}