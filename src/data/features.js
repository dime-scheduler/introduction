import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faProjectDiagram, faHandPointUp, faMap, faFilter, faChartLine, faCalendar, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

export default [
    { name: 'Drag & drop planning', text: 'Use the powerful planning board and intuitive drag and drop capabilities to plan your tasks.', icon: <FontAwesomeIcon icon={faHandPointUp} /> },
    { name: 'Gantt chart project planning', text: 'Keep your projects on schedule with the trustee Gantt chart.', icon: <FontAwesomeIcon icon={faProjectDiagram} /> },
    { name: 'Integrated map', text: 'Track your resources with real-time GPS tracking data and calculate optimal routes for your tasks and resources.', icon: <FontAwesomeIcon icon={faMap} /> },
    { name: 'Powerful resource filters', text: 'Find the right resource for the task at hand with smart matching filters.', icon: <FontAwesomeIcon icon={faFilter} /> },
    { name: 'Capacity overview', text: 'Manage the load of your resources with the built-in pivot grid', icon: <FontAwesomeIcon icon={faChartLine} /> },
    { name: 'Calendars', text: 'Keep the schedule of your resources up to date with an integrated calendar system.', icon: <FontAwesomeIcon icon={faCalendar} /> },
    { name: 'Connect to Microsoft Exchange', text: 'Synchronize appointments in Dime.Scheduler with the Outlook calendars of your resources.', icon: <FontAwesomeIcon icon={faExchangeAlt} /> },
    { name: 'and many more', text: '', icon: <FontAwesomeIcon icon={faLink} /> },
];