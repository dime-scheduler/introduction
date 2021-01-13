import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserNurse,
    faUserTie,
    faChalkboardTeacher,
    faHardHat,
    faBolt,
    faHotel,
    faTruck,
    faWrench,
    faIndustry,
    faTractor,
    faEllipsisH,
    faTruckMoving
} from '@fortawesome/free-solid-svg-icons'

export default [
    {
        name: <FormattedMessage id="industries.industry1" defaultMessage='Field service' />,
        faIcon: <FontAwesomeIcon icon={faWrench} />
    },
    {
        name: <FormattedMessage id="industries.industry2" defaultMessage='Transportation' />,
        faIcon: <FontAwesomeIcon icon={faTruck} />
    },
    {
        name: <FormattedMessage id="industries.industry3" defaultMessage='Accommodation & food' />,
        faIcon: <FontAwesomeIcon icon={faHotel} />
    },
    {
        name: <FormattedMessage id="industries.industry4" defaultMessage='Utilities' />,
        faIcon: <FontAwesomeIcon icon={faBolt} />
    },
    {
        name: <FormattedMessage id="industries.industry5" defaultMessage='Construction' />,
        faIcon: <FontAwesomeIcon icon={faHardHat} />
    },
    {
        name: <FormattedMessage id="industries.industry6" defaultMessage='Educational services' />,
        faIcon: <FontAwesomeIcon icon={faChalkboardTeacher} />
    },
    {
        name: <FormattedMessage id="industries.industry7" defaultMessage='Manufacturing' />,
        faIcon: <FontAwesomeIcon icon={faIndustry} />
    },
    {
        name: <FormattedMessage id="industries.industry8" defaultMessage='Agriculture' />,
        faIcon: <FontAwesomeIcon icon={faTractor} />
    },
    {
        name: <FormattedMessage id="industries.industry9" defaultMessage='Rental' />,
        faIcon: <FontAwesomeIcon icon={faTruckMoving} />
    },
    {
        name: <FormattedMessage id="industries.industry10" defaultMessage='Professional services' />,
        faIcon: <FontAwesomeIcon icon={faUserTie} />
    },
    {
        name: <FormattedMessage id="industries.industry11" defaultMessage='Health care' />,
        faIcon: <FontAwesomeIcon icon={faUserNurse} />
    },
    {
        name: <FormattedMessage id="industries.industry12" defaultMessage='and many more' />,
        faIcon: <FontAwesomeIcon icon={faEllipsisH} />
    }
];