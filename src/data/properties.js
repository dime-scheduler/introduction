import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faIndustry, faPlug, faDumbbell } from '@fortawesome/free-solid-svg-icons'

export default [
    {
        icon: <FontAwesomeIcon icon={faLink} />,
        header: 'Connected to Microsoft Dynamics 365 Business Central',
        text: 'Seamless integration between Dime.Scheduler and products from the Microsoft Dynamics suite.'
    },
    {
        icon: <FontAwesomeIcon icon={faIndustry} />,
        header: 'For any type of industry',
        text: 'Widespread use of Dime.Scheduler in various industries makes it the planning solution of choice for many of our customers.        .'
    },
    {
        icon: <FontAwesomeIcon icon={faDumbbell} />,
        header: 'Versatile and flexible',
        text: 'Tailor Dime.Scheduler to the way your customer works through extensive configuration and customization capabilities.'
    },
    {
        icon: <FontAwesomeIcon icon={faPlug} />,
        header: 'Easy to integrate with your own solutions',
        text: 'Whitelabel Dime.Scheduler and bill it as your own product.'
    }
];