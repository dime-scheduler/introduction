import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function End() {
    return (
        <section className="aligncenter">
            <div className="wrap size-50">
                <h2 className="text-landing">Dime.Scheduler</h2>
                <p className="text-intro">Stop puzzling. Start planning.</p>
                <p><FormattedMessage id="end.title" defaultMessage="Connect with us" /></p>
                <nav className="aligncenter">
                    <ul>
                        <li><a href="https://be.linkedin.com/company/dimenics" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="http://www.facebook.com/pages/Dime/352837688099832" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="https://twitter.com/Dimenics" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="https://www.youtube.com/user/DimenicsTV" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}