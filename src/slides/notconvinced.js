import { FormattedMessage } from 'react-intl';
import bgImage from "../static/images/notconvinced.jpg";

export default function NotConvinved() {
    return (
        <section className="bg-primary">
            <span className="background cover" style={{ backgroundImage: `url(${bgImage})` }}></span>
            <div className="wrap" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h1 className="aligncenter">
                    <FormattedMessage id="notconvinced.title" defaultMessage="Not convinced?" />
                </h1>
            </div>
        </section>
    )
}