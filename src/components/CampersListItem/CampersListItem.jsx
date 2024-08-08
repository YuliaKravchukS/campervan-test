import { Link } from "react-router-dom";
import ShowMoreBtn from "../ShowMoreBtn/ShowMoreBtn";
import { useState } from "react";
import CamperItemDetails from "../CamperItemDetails/CamperItemDetails";

const CampersListItem = ({ advert }) => {
  const countReviews = advert.reviews.length > 0 ? advert.reviews.length : 0;
  const locationCar =
    typeof advert.location === "string"
      ? advert.location.split(",").reverse().join(", ")
      : "";
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <div>
        <h2>{advert.name}</h2>
        <p>{advert.price}</p>
        <button>
          <svg width={24} height={24}>
            <use
              href='../../assets/icons.svg#icon-heart'
              width={20}
              height={20}
            />
          </svg>
        </button>
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
        <p>{advert.description}</p>
        <ul>
          <li>
            <p>{`${advert.adults} adults`}</p>
          </li>
          <li>
            <p>{advert.transmission}</p>
          </li>
          <li>
            <p>{advert.engine}</p>
          </li>
          <li>{advert.details.kitchen && <p>Kitchen</p>}</li>
          <li>
            <p>{`${advert.details.beds} beds`}</p>
          </li>
          <li>{advert.details.airConditioner && <p>AC</p>}</li>
        </ul>
      </div>
      <ShowMoreBtn onClick={openModal} />
      {modalIsOpen && (
        <CamperItemDetails
          advert={advert}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default CampersListItem;
