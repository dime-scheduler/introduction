import { FormattedMessage } from 'react-intl'

import bgImage2 from "../static/images/ds-screenshot-3.png";
import ds from "../static/images/ds-light.png";

export default function Integration() {
    return (
        <section id="section-34" className="slide current">
            <div className="wrap">
                <div className="grid vertical-align">
                    <div className="column">
                        <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
                        <br />
                        <h2><FormattedMessage id="ds.property2.title" defaultMessage="Seamless integration with your technological landscape" /></h2>
                        <p className="text-intro"><FormattedMessage id="ds.property2.content" defaultMessage="Plug Dime.Scheduler into systems such as Microsoft Dynamics 365 Business Central and get started planning your resources and projects in minutes." /></p>
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