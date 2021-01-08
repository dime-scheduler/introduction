import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function End() {
    return (
        <section class="aligncenter">
            <div class="wrap size-50">
                <h2 class="text-landing">Dime.Scheduler</h2>
                <p class="text-intro">Stop puzzling. Start planning.</p>

                <p>Connect with us</p>
                <nav class="aligncenter">
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