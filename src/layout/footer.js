
export default function Footer() {
    const splitUrl = window.location.href.split("slide=");
    const slideNumber = splitUrl.length > 1 ? parseInt(splitUrl[1].substring(0, 2) ?? 0) : 1;
    const visibility = slideNumber === 1 ? "hidden" : "visible";

    return (
        <footer style={{ visibility: visibility }}>
            <span className="alignleft"><a href="#slide=29" style={{ color: '#abc' }}>Contact</a></span>
            <span className="alignright">
                <a href="http://dimescheduler.com" title="Dime.Scheduler">
                    <img className="image" alt="Dime.Scheduler" />
                </a>
            </span>
        </footer>
    )
}