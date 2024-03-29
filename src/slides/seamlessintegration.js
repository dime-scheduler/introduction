import { FormattedMessage } from 'react-intl'

import bgImage2 from "../static/images/ds-screenshot-3.png";
import ds from "../static/images/logo_light.svg";

export default function Integration() {
    return (
        <section id="section-34" className="slide current">
            <div className="wrap">
                <div className="grid vertical-align">
                    <div className="column">
                        <h2><FormattedMessage id="ds.property2.title" defaultMessage="Plan everything in one place" /></h2>
                        <p className="text-intro"><FormattedMessage id="ds.property2.content" defaultMessage="Place your entire business planning under one roof and schedule all your resources (technicians, machines, vehicles, sales people, consultants, and more.) and tasks (service orders, jobs, projects, production orders, sales orders, assembly orders, and more.) in one easy to use and fully integrated tool." /></p>
                    </div>
                    <div className="column">
                        <figure>
                            <img src={bgImage2} alt="Dime.Scheduler" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}