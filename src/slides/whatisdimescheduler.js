import { FormattedMessage } from 'react-intl';
import bgImage from "../static/images/hello.jpg";

export default function WhatIsDimeScheduler() {
    return (
        <section className="bg-purple aligncenter">
            <span className="background cover" style={{ backgroundImage: `url(${bgImage})` }}></span>
            <div className="wrap aligncenter">
                <h1 style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <FormattedMessage id="ds.title" defaultMessage="What is Dime.Scheduler?" />
                </h1>
            </div>
        </section>
    )
}