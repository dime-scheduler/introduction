import { FormattedMessage } from 'react-intl';

import industry1 from "../static/images/industries/service.svg";
import industry2 from"../static/images/industries/truck.svg";
import industry3 from "../static/images/industries/foodservices.svg";
import industry4 from "../static/images/industries/utilities.svg";
import industry5 from "../static/images/industries/education.svg";
import industry6 from "../static/images/industries/manufacturing.svg";
import industry7 from "../static/images/industries/agriculture.svg";
import industry8 from "../static/images/industries/construction.svg";
import industry9 from "../static/images/industries/rental.svg";
import industry10 from "../static/images/industries/professionalservices.svg";
import industry11 from "../static/images/industries/healthcare.svg";
import industry12 from "../static/images/industries/more.svg";

export default [
    {
        name: <FormattedMessage id="industries.industry1" defaultMessage='Field service' />,
        icon: <img src={industry1} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry2" defaultMessage='Transportation' />,
        icon: <img src={industry2} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry3" defaultMessage='Accommodation & food' />,
        icon: <img src={industry3} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry4" defaultMessage='Utilities' />,
        icon: <img src={industry4} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry5" defaultMessage='Construction' />,
        icon: <img src={industry8} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry6" defaultMessage='Educational services' />,
        icon: <img src={industry5} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry7" defaultMessage='Manufacturing' />,
        icon: <img src={industry6} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry8" defaultMessage='Agriculture' />,
        icon: <img src={industry7} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry9" defaultMessage='Rental' />,
        icon: <img src={industry9} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry10" defaultMessage='Professional services' />,
        icon: <img src={industry10} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry11" defaultMessage='Health care' />,
        icon: <img src={industry11} style={{ height: "60px" }} />
    },
    {
        name: <FormattedMessage id="industries.industry12" defaultMessage='and many more' />,
        icon: <img src={industry12} style={{ height: "30px", marginTop:"10px" }} />
    }
];