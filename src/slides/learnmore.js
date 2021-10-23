import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default function LearnMore() {
    return (
        <section>
            <div className="wrap">
                <div className="content-left">
                    <h3><FormattedMessage id="learnmore.title" defaultMessage="Want to learn more?" /></h3>
                    <p><FormattedMessage id="learnmore.subtitle" defaultMessage="Watch our introduction Dime.Scheduler webinar!" /></p>
                    <p><FormattedMessage
                        id="learnmore.content"
                        defaultMessage="In this hour-long webinar, we give you a helicopter overview of what Dime.Scheduler is and how it works side by side Microsoft Dynamics 365 Business Central. You will learn how easy it is to get started and how by configuring the application you can alter the behavior to the way you like it." />
                    </p>

                    <p>
                        <FormattedMessage
                            id="learnmore.links"
                            defaultMessage="More videos are available on {youtube} or check out the docs at {docs}."
                            values={{
                                youtube: <a href="https://www.youtube.com/channel/UCYD4LGox7SJLL7r8gmjulNA" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>,
                                docs: <a href="https://docs.dimescheduler.com" target="_blank"><FontAwesomeIcon icon={faBookOpen} /></a>
                            }} />
                    </p>
                </div>

                <div className="content-left">
                    <div className="embed">
                        <iframe src="https://www.youtube.com/embed/RE49agLKtdo" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}