import { FormattedMessage } from 'react-intl'
import tableOfContentsData from '../data/toc';

export default function TableOfContents() {

    const tableOfContentsList = tableOfContentsData.map(({ pageNo, pageNoDisplay, chapter }, i) => {
        const slideUrl = `#slide=${pageNo}`;
        return (
            <li key={i}>
                <a href={slideUrl} title={chapter}>
                    <span className="chapter">{chapter}</span>
                    <span className="toc-page">{pageNoDisplay}</span>
                </a>
            </li>
        )
    });
    return (
        <section>
            <div className="wrap size-50">
                <h3>
                    <FormattedMessage id="toc.title" defaultMessage="Table of contents" />
                </h3>
                <hr />
                <div className="toc">
                    <ol>{tableOfContentsList}</ol>
                </div>
            </div>
        </section>
    )
}