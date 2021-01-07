import tableOfContentsData from '../data/toc';
export default function TableOfContents() {

    const tableOfContentsList = tableOfContentsData.map(({ pageNo, pageNoDisplay, chapter }) => {
        const slideUrl = `#slide=${pageNo}`;
        return (
            <li>
                <a href={slideUrl} title={chapter}>
                    <span class="chapter">{chapter}</span>
                    <span class="toc-page">{pageNoDisplay}</span>
                </a>
            </li>
        )
    });
    return (
        <section >
            <div class="wrap size-50">
                <h3>Table of Contents</h3>
                <hr />
                <div class="toc">
                    <ol>{tableOfContentsList}</ol>
                </div>
            </div>
        </section>
    )
}