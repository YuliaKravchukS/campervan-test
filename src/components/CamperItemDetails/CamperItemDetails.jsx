import { Link, NavLink } from "react-router-dom";
import css from "./CamperItemDetails.module.css";
import ReactModal from "react-modal";
import clsx from "clsx";
import { useState } from "react";
import Review from "../Review/Review";
import Features from "../Features/Features";
import RentForm from "../RentForm/RentForm";
import icons from "../../assets/icons.svg";
import StarRatings from "react-star-ratings";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "910x",
    maxHeight: "80%",
    overflow: "auto",
    padding: "40px",
    borderRadius: "20px",
  },
  overlay: {
    backgroundColor: " rgba(17, 18, 19, 0.4)",
  },
};

ReactModal.setAppElement("#root");

const CamperItemDetails = ({ modalIsOpen, closeModal, advert }) => {
  const [activeTab, setActiveTab] = useState("features");
  const countReviews = advert.reviews.length > 0 ? advert.reviews.length : 0;
  const locationCar =
    typeof advert.location === "string"
      ? advert.location.split(",").reverse().join(", ")
      : "";
  const getNavLinkClassName = (tab) =>
    clsx(css.navLink, { [css.active]: activeTab === tab });

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={css.wrap}>
        <div>
          <div className={css.wrapTittle}>
            <h2>{advert.name}</h2>
            <button onClick={closeModal}>
              <svg width={20} height={20}>
                <use className={css.icon} href={`${icons}#icon-x`} />
              </svg>
            </button>
          </div>
          <div>
            <div className={css.wrapLocal}>
              <Link className={css.reviews} to='/catalog/reviews'>
                <StarRatings
                  numberOfStars={1}
                  starEmptyColor='rgb(255, 197, 49)'
                  starDimension='16px'
                />
                {`${advert.rating}(${countReviews} Reviews)`}
              </Link>
              <div className={css.location}>
                <svg width={16} height={16}>
                  <use className={css.icon} href={`${icons}#icon-mapBl`} />
                </svg>
                <p>{locationCar}</p>
              </div>
            </div>
            <p className={css.price}>{`€${advert.price}.00`}</p>
            {advert.gallery.length > 0 && (
              <ul className={css.listGallery}>
                {advert.gallery.map((photo, index) => (
                  <li className={css.itemGallery} key={index}>
                    <img
                      className={css.imgGallery}
                      src={photo}
                      alt={`Gallery image ${index}`}
                    />
                  </li>
                ))}
              </ul>
            )}
            <p className={css.description}>{advert.description}</p>
          </div>
        </div>
        <div>
          <ul className={css.addSectionList}>
            <li>
              <NavLink
                className={getNavLinkClassName("features")}
                to='#'
                onClick={() => setActiveTab("features")}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className={getNavLinkClassName("reviews")}
                to='#'
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <div className={css.addSection}>
            {activeTab === "features" && <Features advert={advert} />}
            {activeTab === "reviews" && (
              <div>
                {advert.reviews.length > 0 ? (
                  <ul className={css.listReviews}>
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
            <RentForm />
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default CamperItemDetails;
