import features from '../data/features';

export default function Features() {
    const featuresList = features.map(({ name, icon, text }) => {
        return (
            <li>
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
                    <h2 className="text-landing">Key features</h2>
                    <p>Among many others, here is a selection of key features:</p>
                </div>

                <ul className="flexblock">
                    {featuresList}
                </ul>

                <div className="aligncenter" style={{ marginTop: '1em' }}>
                    <p>For a complete overview of all features, check out <a href='https://docs.dimescheduler.com' target='_blank'>docs.dimescheduler.com</a></p>
                </div>
            </div>
        </section >
    )
}