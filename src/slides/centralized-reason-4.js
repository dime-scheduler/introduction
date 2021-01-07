import worker from "../static/images/worker.jpg";
import planning from "../static/images/planning.jpg";
import professional from '../static/images/professional.jpg';
import meeting from '../static/images/meeting.jfif';

export default function App() {
    return (
        <section>
              <span class="background" style={{ backgroundImage: `url(${professional})` }}></span>
              <div class="wrap">
                <div class="content-right bg-trans-dark fadeInUp">
                  <h2><strong>Duplicate bookings</strong></h2>
                  <p>Don't waste your people's time with duplicate appointments.</p>
                </div>
              </div>
            </section>
    )
}