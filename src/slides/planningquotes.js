import { FormattedMessage } from 'react-intl';
import research from '../data/research';

export default function WhyPlaningQuote() {
    return research.map(({ gradient, imageAlign, image, text }) => {
        const className = `bg-gradient-${gradient}`;
        const imageClassName = `background-${imageAlign}-bottom`;
        const contentAlignment = imageAlign == "left" ? "content-right" : "content-left";

        return (
            <section className={className}>
                <div className="wrap">
                    <div className={contentAlignment} style={{ width: '70%' }}>
                        <blockquote className="text-quote">
                            <p>{text}</p>
                        </blockquote>
                    </div>
                </div>
                <span className={imageClassName} style={{ backgroundImage: `url(${image})`, backgroundSize: '40%', marginRight: '5%' }}></span>
            </section>
        )
    });
}