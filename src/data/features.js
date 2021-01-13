import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faProjectDiagram, faHandPointUp, faMap, faFilter, faChartLine, faCalendar, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

export default [
    {
        name: <FormattedMessage id="features.feature1.title" defaultMessage="Drag and drop planning" />,
        text: <FormattedMessage id="features.feature1.content" defaultMessage="Use the powerful planning board and intuitive drag and drop capabilities to plan your tasks and resources." />,
        icon: <FontAwesomeIcon icon={faHandPointUp} />
    },
    {
        name: <FormattedMessage id="features.feature2.title" defaultMessage="Gantt chart project planning" />,
        text: <FormattedMessage id="features.feature2.content" defaultMessage="Keep your projects on schedule and within budget with the trustee Gantt chart." />,
        icon: <FontAwesomeIcon icon={faProjectDiagram} />
    },
    {
        name: <FormattedMessage id="features.feature3.title" defaultMessage="Integrated map" />,
        text: <FormattedMessage id="features.feature3.content" defaultMessage="Track your resources with real-time GPS tracking data and calculate optimal routes for your tasks and resources." />,
        icon: <FontAwesomeIcon icon={faMap} />
    },
    {
        name: <FormattedMessage id="features.feature4.title" defaultMessage="Powerful resource filters" />,
        text: <FormattedMessage id="features.feature4.content" defaultMessage="Find the right resource for the task at hand with smart matching filters." />,
        icon: <FontAwesomeIcon icon={faFilter} />
    },
    {
        name: <FormattedMessage id="features.feature5.title" defaultMessage="Capacity overview" />,
        text: <FormattedMessage id="features.feature5.content" defaultMessage="Manage the load of your resources with the built-in pivot grid." />,
        icon: <FontAwesomeIcon icon={faChartLine} />
    },
    {
        name: <FormattedMessage id="features.feature6.title" defaultMessage="Calendars" />,
        text: <FormattedMessage id="features.feature6.content" defaultMessage="Keep the schedule of your resources up to date with an integrated calendar system." />,
        icon: <FontAwesomeIcon icon={faCalendar} />
    },
    {
        name: <FormattedMessage id="features.feature7.title" defaultMessage="Connect to Microsoft Exchange" />,
        text: <FormattedMessage id="features.feature7.content" defaultMessage="Synchronize appointments in Dime.Scheduler with the Outlook calendars of your resources." />,
        icon: <FontAwesomeIcon icon={faExchangeAlt} />
    },
    {
        name: <FormattedMessage id="features.feature8.title" defaultMessage="and many more" />,
        text: <FormattedMessage id="features.feature8.content" defaultMessage=" " />,
        icon: <FontAwesomeIcon icon={faLink} />
    },
];