import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import testimonials from '../data/testimonials';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../static/css/slider.css";

export default function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        adaptiveHeight: true
    };

    const testimonialsList = testimonials.map(createTestimonial);

    return (
        <section>
            <div className="wrap">
                <h2>
                    <FormattedMessage id="testimonials.title" defaultMessage="Testimonials" />
                </h2>
                <p className="text-intro">
                    <FormattedMessage
                        id="testimonials.subtitle"
                        defaultMessage="See what our partners and customers have to tell about Dime.Scheduler." /></p>

                <Slider {...settings}>{testimonialsList}</Slider>

                <br /> <br />
                <p className="aligncenter">
                    <FormattedMessage
                        id="testimonials.instructions"
                        defaultMessage="Click the arrow buttons to browse through the testimonials." />
                </p>
            </div>

        </section>
    )
}

function createTestimonial({ url, title }) {
    return (<figure>
        <div className="embed">
            <iframe src={url}></iframe>
        </div>
        <figcaption className="aligncenter">
            <p>{title}</p>
        </figcaption>
    </figure>);
}