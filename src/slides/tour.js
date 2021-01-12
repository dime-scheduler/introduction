import tour from "../static/images/tour.jpg";
import highlights from '../data/tour';

function Highlight({ title, intro, body, img, alignContentLeft = true }) {

    const content = <div class="column">
        <h1>{title}</h1>
        <p class="text-intro">{intro}</p>
        <p>{body}</p>
    </div>;

    const image = <div class="column">
        <figure>
            <img src={img} />
        </figure>
    </div>

    var first = null;
    var second = null;

    if (alignContentLeft) {
        first = (content);
        second = (image);
    } else {
        first = (image);
        second = (content);
    }

    return (
        <section>
            <div class="wrap">
                <div class="grid vertical-align">
                    {first}
                    {second}
                </div>
            </div>
        </section>
    )
}

export default function Tour() {
    const highlightsList = highlights.map(({ title, intro, body, img, alignContentLeft }, i) =>
        (<Highlight key={i} title={title} intro={intro} body={body} img={img} alignContentLeft={alignContentLeft} />))

    return [
        (
            <section class="bg-black slide-top">
                <span class="background" style={{ backgroundImage: `url(${tour})` }}></span>
                <div class="wrap">
                    <h2 class="text-landing">Highlight reel</h2>
                    <p class="text-context text-intro">A brief tour of the features of Dime.Scheduler</p>
                </div>
            </section>
        ),
        ...highlightsList
    ]
}