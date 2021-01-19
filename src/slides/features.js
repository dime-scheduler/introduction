import { FormattedMessage } from 'react-intl';
import features from '../data/features';

export default function Features() {
    const featuresList = features.map(({ name, icon, text }, i) => {
        let key = `feature-${i}`;
        return (
            <li key={key}>
                {icon}
                <h2>{name}</h2>
                {text}
            </li>
        );
    });

    return (
        <section>
            <div className="wrap">
                <div className="content-center">
                    <h2 className="text-landing">
                        <FormattedMessage
                            id="features.title"
                            defaultMessage="Key features" />
                    </h2>
                    <p>
                        <FormattedMessage
                            id="features.subtitle"
                            defaultMessage="Among many others, here is a selection of key features" />
                    </p>
                </div>

                <ul className="flexblock">
                    {featuresList}
                </ul>

                <div className="aligncenter" style={{ marginTop: '1em' }}>
                    <p><FormattedMessage
                        id="features.links"
                        defaultMessage="For a complete overview of all features, check out {docs}."
                        values={{
                            docs: <a href='https://docs.dimescheduler.com' target='_blank'>docs.dimescheduler.com</a>
                        }} />
                    </p>
                </div>
            </div>
        </section >
    )
}