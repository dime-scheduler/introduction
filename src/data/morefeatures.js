import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faProjectDiagram, faObjectGroup, faLanguage, faUserAlt, faEdit, faBell, faDatabase, faCloud, faLock, faCalendar, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const style = { fontSize: '0.7em' };

export default [
    {
        name: <FormattedMessage id="morefeatures.feature1" defaultMessage='Real-time bi-directional message flow' />,
        icon: <FontAwesomeIcon icon={faExchangeAlt} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature2" defaultMessage='Tasks and resources can be anything' />,
        icon: <FontAwesomeIcon icon={faProjectDiagram} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature3" defaultMessage='Multi-database' />,
        icon: <FontAwesomeIcon icon={faDatabase} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature4" defaultMessage='Multi-language' />,
        icon: <FontAwesomeIcon icon={faLanguage} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature5" defaultMessage='Custom fields' />,
        icon: <FontAwesomeIcon icon={faEdit} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature6" defaultMessage='Multiple planning boards' />,
        icon: <FontAwesomeIcon icon={faCalendar} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature7" defaultMessage='Extensive personalization' />,
        icon: <FontAwesomeIcon icon={faUserAlt} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature8" defaultMessage='Grouping, sorting, filtering' />,
        icon: <FontAwesomeIcon icon={faObjectGroup} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature9" defaultMessage='Host on-premise or in the cloud' />,
        icon: <FontAwesomeIcon icon={faCloud} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature10" defaultMessage='Alerts and notifications based on business rules in back-end​' />,
        icon: <FontAwesomeIcon icon={faBell} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature11" defaultMessage='Data-driven setup and security' />,
        icon: <FontAwesomeIcon icon={faLock} style={style} />
    },
    {
        name: <FormattedMessage id="morefeatures.feature12" defaultMessage='Easy integration with Fast Track' />,
        icon: <FontAwesomeIcon icon={faLink} style={style} />
    }
];