import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faIndustry, faPlug, faDumbbell } from '@fortawesome/free-solid-svg-icons'

export default [
    {
        icon: <FontAwesomeIcon icon={faLink} />,
        header: <FormattedMessage id="properties.property1.header" defaultMessage='Connected to Microsoft Dynamics 365 Business Central' />,
        text: <FormattedMessage id="properties.property1.text" defaultMessage='Seamless integration between Dime.Scheduler and products from the Microsoft Dynamics suite.' />
    },
    {
        icon: <FontAwesomeIcon icon={faIndustry} />,
        header: <FormattedMessage id="properties.property2.header" defaultMessage='For any type of industry' />,
        text: <FormattedMessage id="properties.property2.text" defaultMessage='Widespread use of Dime.Scheduler in various industries makes it the planning solution of choice for many of our customers.' />
    },
    {
        icon: <FontAwesomeIcon icon={faDumbbell} />,
        header: <FormattedMessage id="properties.property3.header" defaultMessage='Versatile and flexible' />,
        text: <FormattedMessage id="properties.property3.text" defaultMessage='Tailor Dime.Scheduler to the way your customer works through extensive configuration and customization capabilities.' />
    },
    {
        icon: <FontAwesomeIcon icon={faPlug} />,
        header: <FormattedMessage id="properties.property4.header" defaultMessage='Easy to integrate with your own solutions' />,
        text: <FormattedMessage id="properties.property4.text" defaultMessage='Whitelabel Dime.Scheduler and bill it as your own product.' />
    }
];