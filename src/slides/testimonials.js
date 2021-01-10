import testimonials from '../data/testimonials';

export default function Testimonials() {

    const testimonialsList = testimonials.map(({ url, title }) => (
        <li>
            <figure>
                <div className="embed">
                    <iframe src={url}></iframe>
                </div>
                <figcaption>
                    <h2>{title}</h2>
                </figcaption>
            </figure>
        </li>
    ));
    return (
        <section>
            <div class="wrap">
                <h2>Testimonials</h2>
               
                <ul class="flexblock gallery">
                    {testimonialsList}
                </ul>
            </div>
        </section>
    )
}