import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Discover the Freedom of the Open Road</h1>
      <p>
        Welcome to <span>CamperRent</span>, where adventure meets comfort.
        Explore breathtaking landscapes, serene campgrounds, and hidden gems all
        from the comfort of our premium campervans. Whether you are planning a
        weekend getaway or an extended road trip, our fully equipped campervans
        offer the perfect blend of convenience and luxury.
      </p>
      <p>Why Choose Us?</p>
      <p>
        <span>Comfort & Convenience</span>: Our campervans are designed with
        your comfort in mind, featuring cozy sleeping quarters, fully functional
        kitchens, and modern amenities.
      </p>
      <p>
        <span>Adventure Awaits</span>: Embark on your adventure with confidence
        knowing our campervans are well-maintained and ready for the road.
      </p>
      <p>
        <span>Customer Support</span>: Our dedicated team is here to support you
        every step of the way, ensuring a seamless rental experience. Plan Your
        Perfect Trip
      </p>
      <p>
        Browse our selection of campervans and start planning your dream
        adventure today. Whether you’re exploring national parks, coastal
        highways, or mountain trails, <span>CamperRent</span> is your trusted
        partner for an unforgettable journey.
      </p>
      <p>
        Don’t wait – your adventure is just a <Link to='/catalog'> click </Link>
        away. Book your campervan today and experience the ultimate road trip
        freedom.
      </p>
    </div>
  );
};

export default HomePage;
