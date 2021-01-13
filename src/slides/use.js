import { FormattedMessage } from 'react-intl';

export default function UseDimeScheduler() {
  return (
    <section className="aligncenter bg-primary">
      <div className="wrap">
        <div id="tab-3" className="tab-content current">
          <h1 className="text-landing">
            <FormattedMessage id="use.title" defaultMessage="Want to use Dime.Scheduler?" />
          </h1>
          <br />
          <p className="text-intro">
            <FormattedMessage
              id="use.subtitle"
              defaultMessage="Find a certified reseller on {link} to get you started!"
              values={{
                link: <a href='http://www.dimenics.com/partners' target='_blank'><strong>dimenics.com/partners</strong></a>,
              }} />
          </p>
        </div>
      </div>
    </section>
  )
}