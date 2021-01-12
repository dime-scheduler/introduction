import testimonials from '../data/testimonials';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

export default function Testimonials() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        adaptiveHeight: true
    };

    const testimonialsList = testimonials.map(({ url, title }) => (
        <figure>
            <div className="embed">
                <iframe src={url}></iframe>
            </div>
            <figcaption className="aligncenter">
                <p>{title}</p>
            </figcaption>
        </figure>
    ));
    return (
        <section>
            <div className="wrap">
                <h2>Testimonials</h2>
                <p className="text-intro">See what our partners and customers have to tell about Dime.Scheduler.</p>

                <Slider {...settings}>{testimonialsList}</Slider>

                <br /> <br />
                <p className="aligncenter">Click the arrow buttons to browse through the testimonials.</p>    
            </div>
            
        </section>
    )
}