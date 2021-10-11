import { FormattedMessage } from 'react-intl';
import features from '../data/morefeatures';

export default function MoreFeatures() {
    const featuresList = features.map(({ name, icon }) => {
        return (
            <li style={{ marginBottom: '0.5em' }}>
                <div><h5><span>{icon}</span> {name}</h5></div>
            </li>
        );
    });

    return (
        <section>
            <div className="wrap">
                <h3><FormattedMessage id="morefeatures.title" defaultMessage="What's more" /></h3>
                <ul className="flexblock features">
                    {featuresList}
                </ul>
            </div>
        </section>
    )
}