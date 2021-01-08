import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faProjectDiagram, faObjectGroup, faLanguage, faUserAlt, faEdit,faBell, faDatabase,faCloud, faLock, faCalendar, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const style = { fontSize: '0.7em' };

export default [
    { name: 'Real-time bi-directional message flow', icon: <FontAwesomeIcon icon={faExchangeAlt} style={style} /> },
    { name: 'Tasks and resources can be anything', icon: <FontAwesomeIcon icon={faProjectDiagram} style={style} /> },
    { name: 'Multi-database', icon: <FontAwesomeIcon icon={faDatabase} style={style} /> },
    { name: 'Multi-language', icon: <FontAwesomeIcon icon={faLanguage} style={style} /> },
    { name: 'Custom fields', icon: <FontAwesomeIcon icon={faEdit} style={style} /> },
    { name: 'Multiple planning boards', icon: <FontAwesomeIcon icon={faCalendar} style={style} /> },
    { name: 'Extensive personalization', icon: <FontAwesomeIcon icon={faUserAlt} style={style} /> },
    { name: 'Grouping, sorting, filtering', icon: <FontAwesomeIcon icon={faObjectGroup} style={style} /> },
    { name: 'Host on-premise or in the cloud', icon: <FontAwesomeIcon icon={faCloud} style={style} /> },
    { name: 'Alerts and notifications based on business rules in back-end​', icon: <FontAwesomeIcon icon={faBell} style={style} /> },
    { name: 'Data-driven setup and security', icon: <FontAwesomeIcon icon={faLock} style={style} /> },
    { name: 'Easy integration with Fast Track', icon: <FontAwesomeIcon icon={faLink} style={style} /> }
];