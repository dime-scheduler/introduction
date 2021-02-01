import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faIndustry, faPlug, faDumbbell } from '@fortawesome/free-solid-svg-icons'

const iconStyle = { width: "0.55em" };
export default [
    {
        icon: <FontAwesomeIcon icon={faLink} style={iconStyle} />,
        header: <FormattedMessage id="properties.property1.header" defaultMessage='Connected to Microsoft Dynamics 365 Business Central' />,
        text: <FormattedMessage id="properties.property1.text" defaultMessage='Seamless integration between Dime.Scheduler and products from the Microsoft Dynamics suite.' />
    },
    {
        icon: <FontAwesomeIcon icon={faIndustry} style={iconStyle} />,
        header: <FormattedMessage id="properties.property2.header" defaultMessage='For any type of industry' />,
        text: <FormattedMessage id="properties.property2.text" defaultMessage='Widespread use of Dime.Scheduler in various industries makes it the planning solution of choice for Microsoft Dynamics 365 Business Central.' />
    },
    {
        icon: <FontAwesomeIcon icon={faDumbbell} style={iconStyle} />,
        header: <FormattedMessage id="properties.property3.header" defaultMessage='Versatile and flexible' />,
        text: <FormattedMessage id="properties.property3.text" defaultMessage='Tailor Dime.Scheduler to the way your customer works through extensive configuration and customization capabilities.' />
    },
    {
        icon: <FontAwesomeIcon icon={faPlug} style={iconStyle} />,
        header: <FormattedMessage id="properties.property4.header" defaultMessage='Easy to integrate' />,
        text: <FormattedMessage id="properties.property4.text" defaultMessage='Plug and play Dime.Scheduler with your own tools and create a seamless and integrated technological landscape.' />
    }
];