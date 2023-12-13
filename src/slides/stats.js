import { FormattedMessage } from 'react-intl';
import resllers from '../static/images/stats/resellers.svg'
import countries from '../static/images/stats/countries.svg'
import resources from '../static/images/stats/resources.svg'
import planners from '../static/images/stats/planners.svg'

export default function Stats() {
    var imgStyle = { maxHeight: "200px", paddingBottom: "10px" };

    return (
        <section className="">
            <div className="wrap aligncenter">
                <h4>
                    <FormattedMessage
                        id="stats.subtitle"
                        defaultMessage="With a proven track record and a network of excellent resellers, you can get started with Dime.Scheduler in no time." />
                </h4>
            </div>
            <ul className="flexblock metrics">
                <li>
                    <img src={resllers} alt="More than 100 resellers" style={imgStyle} />
                    <FormattedMessage id="stats.metric1" defaultMessage="+ 100 resellers" />
                </li>
                <li>
                    <img src={countries} alt="Active in more than 20 countries" style={imgStyle} />
                    <FormattedMessage id="stats.metric2" defaultMessage="Active in more than 20 countries" />
                </li>
                <li>
                    <img src={resources} alt="More than 20.000 planned resources" style={{ ...imgStyle, height: "275px" }} />
                    <FormattedMessage id="stats.metric3" defaultMessage="+ 20.000 planned resources" />
                </li>
                <li>
                    <img src={planners} alt="Over 500 FTE planners" style={imgStyle} />
                    <FormattedMessage id="stats.metric4" defaultMessage="+ 500 FTE planners" />
                </li>
            </ul>
        </section >
    )
}