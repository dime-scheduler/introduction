import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faUsers, faUserFriends, faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function Stats() {
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
                    <FontAwesomeIcon icon={faHandshake} />
                    <FormattedMessage id="stats.metric1" defaultMessage="More than 60 resellers" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faGlobe} />
                    <FormattedMessage id="stats.metric2" defaultMessage="Active in more than 20 countries" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faUsers} />
                    <FormattedMessage id="stats.metric3" defaultMessage="More than 20.000 planned resources" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faUserFriends} />
                    <FormattedMessage id="stats.metric4" defaultMessage="More than 500 planners" />
                </li>
            </ul>
        </section >
    )
}