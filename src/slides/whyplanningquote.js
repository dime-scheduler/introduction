import worker from "../static/images/worker-2.png";

export default function WhyPlaningQuote() {
    return (
        <section className="bg-gradient-r">
            <div className="wrap">
                <div className="content-left" style={{width:'70%'}}>
                    <blockquote className="text-quote">
                        <p>Employee turnover is 174% more likely without real-time scheduling capabilities.</p>
                        <p><cite>Bersin by Deloitte</cite></p>
                    </blockquote>
                </div>
            </div>
            <span className="background-right-bottom" style={{ backgroundImage: `url(${worker})`, backgroundSize: '40%', marginRight: '5%' }}></span>
        </section>
    )
}