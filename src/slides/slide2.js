import bgImage from "../static/images/hello.jpg";

export default function Start() {
    return (
        <section className="bg-purple aligncenter">
            <span className="background cover" style={{ backgroundImage: `url(${bgImage})` }}></span>
            <div className="wrap aligncenter">
                <h1>What is Dime.Scheduler?</h1>
            </div>
        </section>
    )
}