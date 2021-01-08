import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function LearnMore() {
    return (
        <section>
            <div className="wrap">
                <div className="content-left">
                    <h3>Want to learn more?</h3>
                    <p>Watch our introduction Dime.Scheduler webinar!</p>
                    <p>In this hour-long webinar, we give you a helicopter overview of what Dime.Scheduler is and how it works side by side Microsoft Dynamics 365 Business Central. You will learn how easy it is to get started and how by configuring the application you can alter the behavior to the way you like it.  </p>

                    <p>More videos are available on <a href="https://www.youtube.com/user/DimenicsTV" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></p>
                </div>

                <div className="content-left">
                    <div className="embed">
                        <iframe src="https://www.youtube.com/embed/RE49agLKtdo" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}