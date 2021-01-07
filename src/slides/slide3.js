import bgImage from "../static/images/ds-laptop.png";

export default function Start() {
    return (
        <section className="bg-secondary slide current">
            <div className="wrap size-50 frame">
                <h1 className="aligncenter">Dime.Scheduler is...</h1>
                <p className="text-symbols">A graphical resource and project <br /> planning solution</p>
                <img src={bgImage} />

                <br />
                <p className="text-symbols">for ERP, CRP and any other LoB systems.</p>
            </div>
        </section>
    )
}