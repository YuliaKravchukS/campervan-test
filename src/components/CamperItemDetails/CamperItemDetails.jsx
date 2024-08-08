import { Link, NavLink } from "react-router-dom";
import css from "./CamperItemDetails.module.css";
import ReactModal from "react-modal";
import clsx from "clsx";
import { useState } from "react";
import Review from "../Review/Review";
import Features from "../Features/Features";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    maxHeight: "80%",
    overflow: "auto",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};
const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

ReactModal.setAppElement("#root");

const CamperItemDetails = ({ modalIsOpen, closeModal, advert }) => {
  const [activeTab, setActiveTab] = useState("features");
  const countReviews = advert.reviews.length > 0 ? advert.reviews.length : 0;
  const locationCar =
    typeof advert.location === "string"
      ? advert.location.split(",").reverse().join(", ")
      : "";

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div>
        <div>
          <div>
            <h2>{advert.name}</h2>
            <button onClick={closeModal}>X</button>
          </div>
          <div>
            <Link to='/catalog/reviews'>
              {`${advert.rating}(${countReviews} Reviews)`}
            </Link>
            <div>
              <svg width={24} height={24}>
                <use
                  href='../../assets/icons.svg#icon-mapBl'
                  width={20}
                  height={20}
                />
              </svg>
              <p>{locationCar}</p>
            </div>
            <p>{`${advert.price},00`}</p>
            {advert.gallery.length > 0 && (
              <ul>
                {advert.gallery.map((photo, index) => (
                  <li key={index}>
                    <img src={photo} alt={`Gallery image ${index}`} />
                  </li>
                ))}
              </ul>
            )}
            <p>{advert.description}</p>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <NavLink
                className={getNavLinkClassName}
                to='#'
                onClick={() => setActiveTab("features")}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className={getNavLinkClassName}
                to='#'
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          {activeTab === "features" && <Features advert={advert} />}
          {activeTab === "reviews" && (
            <div>
              {advert.reviews.length > 0 ? (
                <ul>
                  {advert.reviews.map((review, index) => (
                    <li key={index}>
                      <Review review={review} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </ReactModal>
  );
};

export default CamperItemDetails;
