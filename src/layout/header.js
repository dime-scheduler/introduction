import ds from "../static/images/ds-light.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (<header role="banner">
        <nav role="navigation">
            <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
            <ul>
                <li>
                    <a rel="external" href="https://www.dimescheduler.com" title="Dime.Scheduler">
                        <FontAwesomeIcon icon={faGlobe} />
                    </a>
                </li>
                <li>
                    <a rel="external" href="https://docs.dimescheduler.com" title="Dime.Scheduler Docs">
                        <FontAwesomeIcon icon={faBookOpen} />
                    </a>
                </li>

                <li>
                    &nbsp;&nbsp;
                </li>
                <li>
                    <a rel="#" onClick={handleEnglishOnClick} title="Switch to English">
                        EN
                    </a>
                </li>
                <li>
                    <a rel="#" onClick={handleDutchOnClick} title="Switch to Dutch">
                        NL
                    </a>
                </li>
                {/* <li>
                    <a rel="#" onClick={handleGermanOnClick} title="Switch to German">
                        DE
                    </a>
                </li> */}
            </ul>
        </nav>
    </header>)
}

function handleEnglishOnClick() {
    window.location.search = 'lng=en';
}

function handleDutchOnClick() {
    window.location.search = 'lng=nl';
}

function handleGermanOnClick() {
    window.location.search = 'lng=de';
}