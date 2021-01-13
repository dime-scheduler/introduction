import worker from "../static/images/person3.png";

export default function WhyPlaningQuote() {
    return (
        <section className="bg-gradient-v">
            <div className="wrap">
                <div className="content-left" style={{width:'70%'}}>
                    <blockquote className="text-quote">
                        <p>Organizations with predictable scheduling are 53% more likely to experience lower turnover than their industry average.</p>
                    </blockquote>
                </div>
            </div>
            <span className="background-right-bottom" style={{ backgroundImage: `url(${worker})`, backgroundSize: '40%', marginRight: '5%' }}></span>
        </section>
    )
}