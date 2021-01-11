import worker from "../static/images/worker-2.png";

export default function WhyPlaningQuote() {
    return (
        <section class="bg-gradient-r">
            <div class="wrap">
                <div className="content-left" style={{width:'70%'}}>
                    <blockquote class="text-quote">
                        <p>Employee turnover is 174% more likely without real-time scheduling capabilities.</p>
                        <p><cite>Bersin by Deloitte</cite></p>
                    </blockquote>
                </div>
            </div>
            <span class="background-right-bottom" style={{ backgroundImage: `url(${worker})`, backgroundSize: '40%', marginRight: '5%' }}></span>
        </section>
    )
}