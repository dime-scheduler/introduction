import { FormattedMessage } from 'react-intl';

import tour from "../static/images/tour.jpg";
import highlights from '../data/tour';

function Highlight({ title, intro, body, img, alignContentLeft = true }) {

    const content = <div className="column">
        <h1>{title}</h1>
        <p className="text-intro">{intro}</p>
        <p>{body}</p>
    </div>;

    const image = <div className="column">
        <figure>
            <img src={img} />
        </figure>
    </div>

    var first = null;
    var second = null;

    if (alignContentLeft) {
        first = (content);
        second = (image);
    } else {
        first = (image);
        second = (content);
    }

    return (
        <section>
            <div className="wrap">
                <div className="grid vertical-align">
                    {first}
                    {second}
                </div>
            </div>
        </section>
    )
}

export default function Tour() {
    const highlightsList = highlights.map(({ title, intro, body, img, alignContentLeft }, i) =>
        (<Highlight key={i} title={title} intro={intro} body={body} img={img} alignContentLeft={alignContentLeft} />))

    return [
        (
            <section className="bg-primary slide-top">
                <span className="background" style={{ backgroundImage: `url(${tour})` }}></span>
                <div className="wrap">
                    <h2 className="text-landing"><FormattedMessage id="tour.title" defaultMessage="Highlight reel" /></h2>
                    <p className="text-context text-intro"><FormattedMessage id="tour.subtitle" defaultMessage="A brief tour of the features of Dime.Scheduler" /></p>
                </div>
            </section>
        ),
        ...highlightsList
    ]
}