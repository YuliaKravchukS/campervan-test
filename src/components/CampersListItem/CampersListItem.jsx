import { Link } from "react-router-dom";
import { useState } from "react";
import CamperItemDetails from "../CamperItemDetails/CamperItemDetails";
import css from "./CampersListItem.module.css";
import icons from "../../assets/icons.svg";
import StarRatings from "react-star-ratings";
import Button from "../../ui/Button/Button";

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
    <div className={css.campersListItem}>
      <img className={css.img} src={advert.gallery[0]} alt={advert.name} />
      <div className={css.wrapDescription}>
        <div className={css.wrapTittle}>
          <h2 className={css.tittle}>{advert.name}</h2>
          <div className={css.tittleLeftBlock}>
            <p className={css.price}>{`€${advert.price}.00`}</p>
            <button className={css.favoriteBtn}>
              <svg className={css.favoriteIcon} width={24} height={24}>
                <use className={css.heart} href={`${icons}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>

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
              <use className={css.heart} href={`${icons}#icon-mapBl`} />
            </svg>
            <p>{locationCar}</p>
          </div>
        </div>
        <p className={css.description}>{advert.description}</p>
        <ul className={css.equipmentList}>
          <li className={css.equipmentItem}>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-adults`} />
            </svg>
            <p>{`${advert.adults} adults`}</p>
          </li>
          <li className={css.equipmentItem}>
            <svg width={20} height={20}>
              <use className={css.icon} href={`${icons}#icon-automatic`} />
            </svg>
            <p className={css.upperFirstLetter}>{advert.transmission}</p>
          </li>
          <li className={css.equipmentItem}>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-petrol`} />
            </svg>
            <p className={css.upperFirstLetter}>{advert.engine}</p>
          </li>
          <li className={css.equipmentItem}>
            <svg width={20} height={20}>
              <use className={css.heart} href={`${icons}#icon-kitchen`} />
            </svg>
            {advert.details.kitchen && <p>Kitchen</p>}
          </li>
          <li className={css.equipmentItem}>
            <svg width={20} height={20}>
              <use className={css.icon} href={`${icons}#icon-bed`} />
            </svg>
            <p>{`${advert.details.beds} beds`}</p>
          </li>
          <li className={css.equipmentItem}>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-aircond`} />
            </svg>
            {advert.details.airConditioner && <p>AC</p>}
          </li>
        </ul>

        <Button onClick={openModal} buttonText='Show more' type='show' />

        {modalIsOpen && (
          <CamperItemDetails
            advert={advert}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default CampersListItem;
