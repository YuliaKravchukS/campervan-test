import { Link } from "react-router-dom";
import { useState } from "react";
import CamperItemDetails from "../CamperItemDetails/CamperItemDetails";
import css from "./CampersListItem.module.css";
import icons from "../../assets/icons.svg";
import StarRatings from "react-star-ratings";
import Button from "../../ui/Button/Button";
import EquipmentsList from "../EquipmentsList/EquipmentsList";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selector";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";

const CampersListItem = ({ advert }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const countReviews = advert.reviews.length > 0 ? advert.reviews.length : 0;
  const locationCar =
    typeof advert.location === "string"
      ? advert.location.split(",").reverse().join(", ")
      : "";
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const isFavorite = favorites.includes(advert._id);

  const handleClick = () => {
    isFavorite
      ? dispatch(removeFavorite(advert._id))
      : dispatch(addFavorite(advert._id));
  };

  return (
    <div className={css.campersListItem}>
      <img className={css.img} src={advert.gallery[0]} alt={advert.name} />
      <div className={css.wrapDescription}>
        <div className={css.wrapTittle}>
          <h2 className={css.tittle}>{advert.name}</h2>
          <div className={css.tittleLeftBlock}>
            <p className={css.price}>{`€${advert.price}.00`}</p>
            <button className={css.favoriteBtn} onClick={handleClick}>
              <svg className={css.favoriteIcon} width={24} height={24}>
                <use
                  className={css.heart}
                  href={
                    isFavorite
                      ? `${icons}#icon-heartPressed`
                      : `${icons}#icon-heart`
                  }
                />
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

        <EquipmentsList advert={advert} limit={6} />

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
