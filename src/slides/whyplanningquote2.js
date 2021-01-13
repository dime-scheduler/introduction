import worker from "../static/images/person2.png";

export default function WhyPlaningQuote() {
    return (
        <section className="bg-gradient-h">
            <div className="wrap">
                <div className="content-right" style={{width:'70%'}}>
                    <blockquote className="text-quote">
                        <p>Employees with the ability to manage schedules in real time are 6X more satisfied than those without.</p>
                    </blockquote>
                </div>
            </div>
            <span className="background-left-bottom" style={{ backgroundImage: `url(${worker})`, backgroundSize: '40%', marginRight: '5%' }}></span>
        </section>
    )
}