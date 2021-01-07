import features from '../data/features';

export default function Features() {
    const featuresList = features.map(({ name, faIcon }) => {
        const linkHref = `#${faIcon}`;
        return (
            <li>
                <svg class={faIcon}>
                    <use xlinkHref={linkHref}></use>
                </svg>
                <h2>{name}</h2>
                Multipurpose: services, features, specs...
            </li>
        );
    });

    return (
        <section className="bg-primary">
            <div class="wrap">
                <div class="content-center">
                    <h2 class="text-landing">Key features</h2>
                    <p>Among many others, here is a selection of key features:</p>
                </div>

                <ul class="flexblock">
                    {featuresList}
                </ul >
            </div >
        </section >
    )
}