import features from '../data/morefeatures';

export default function MoreFeatures() {
    const featuresList = features.map(({ name, icon }) => {
        return (
            <li style={{ marginBottom: '1em'}}>
                <div><h3><span>{icon}</span> {name}</h3></div>
            </li>
        );
    });

    return (
        <section>
            <div className="wrap">
                <h3>What's more</h3>
                <ul className="flexblock features">
                    {featuresList}
                </ul>
            </div>
        </section>
    )
}