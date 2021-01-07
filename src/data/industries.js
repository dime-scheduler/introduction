import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGlobe,
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
    { name: 'Field service', faIcon: <FontAwesomeIcon icon={faWrench} /> },
    { name: 'Transportation', faIcon: <FontAwesomeIcon icon={faTruck} /> },
    { name: 'Accommodation & food', faIcon: <FontAwesomeIcon icon={faHotel} /> },
    { name: 'Utilities', faIcon: <FontAwesomeIcon icon={faBolt} /> },
    { name: 'Construction', faIcon: <FontAwesomeIcon icon={faHardHat} /> },
    { name: 'Educational services', faIcon: <FontAwesomeIcon icon={faChalkboardTeacher} /> },
    { name: 'Manufacturing', faIcon: <FontAwesomeIcon icon={faIndustry} /> },
    { name: 'Agriculture', faIcon: <FontAwesomeIcon icon={faTractor} /> },
    { name: 'Rental', faIcon: <FontAwesomeIcon icon={faTruckMoving} /> },
    { name: 'Professional services', faIcon: <FontAwesomeIcon icon={faUserTie} /> },
    { name: 'Health care', faIcon: <FontAwesomeIcon icon={faUserNurse} /> },
    { name: 'and many more', faIcon: <FontAwesomeIcon icon={faEllipsisH} /> }
];