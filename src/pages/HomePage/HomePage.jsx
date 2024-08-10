import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.hero}>
        <h1 className={css.tittle}>Discover the Freedom of the Open Road</h1>
      </div>
      <p className={css.text}>
        Welcome to <span className={css.company}>CamperRent</span>, where
        adventure meets comfort. Explore breathtaking landscapes, serene
        campgrounds, and hidden gems all from the comfort of our premium
        campervans. Whether you are planning a weekend getaway or an extended
        road trip, our fully equipped campervans offer the perfect blend of
        convenience and luxury.
      </p>
      <p className={css.text}>
        <b>Why Choose Us?</b>
      </p>
      <ul>
        <li>
          {" "}
          <p className={css.text}>
            <span className={css.benefits}>Comfort & Convenience</span>: Our
            campervans are designed with your comfort in mind, featuring cozy
            sleeping quarters, fully functional kitchens, and modern amenities.
          </p>
        </li>
        <li>
          {" "}
          <p className={css.text}>
            <span className={css.benefits}>Adventure Awaits</span>: Embark on
            your adventure with confidence knowing our campervans are
            well-maintained and ready for the road.
          </p>
        </li>
        <li>
          {" "}
          <p className={css.text}>
            <span className={css.benefits}>Customer Support</span>: Our
            dedicated team is here to support you every step of the way,
            ensuring a seamless rental experience. Plan Your Perfect Trip
          </p>
        </li>
      </ul>

      <p className={css.text}>
        Browse our selection of campervans and start planning your dream
        adventure today. Whether you’re exploring national parks, coastal
        highways, or mountain trails,{" "}
        <span className={css.company}>CamperRent</span> is your trusted partner
        for an unforgettable journey.
      </p>
      <p className={css.text}>
        Don’t wait – your adventure is just a{" "}
        <Link className={css.link} to='/catalog'>
          {" "}
          click{" "}
        </Link>{" "}
        away. Book your campervan today and experience the ultimate road trip
        freedom.
      </p>
    </div>
  );
};

export default HomePage;
