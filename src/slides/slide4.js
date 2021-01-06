import bgImage from "../static/images/pointing.png";

export default function Start() {
    return (
        <section className="bg-primary">
            <span className="background-left-bottom" style={{ backgroundImage: `url(${bgImage})` }}></span>
            <div className="wrap">
                <div className="content-right">
                    <blockquote>
                        <p>"Stop puzzling. Start planning."</p>
                        <p><cite>Dime.Scheduler.</cite></p>
                    </blockquote>
                </div>
            </div>          
        </section>
    )
}