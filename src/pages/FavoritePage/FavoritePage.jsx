import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selector";
import CampersListItem from "../../components/CampersListItem/CampersListItem";
import css from "./FavoritePage.module.css";
import { selectAdverts } from "../../redux/adverts/selectors";
import { useEffect, useMemo } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const isFavoritesList = useMemo(
    () => adverts.filter((advert) => favorites.includes(advert._id)),
    [favorites, adverts]
  );

  return (
    <div className={css.favorites}>
      {favorites.length !== 0 ? (
        <ul className={css.list}>
          {isFavoritesList.map((favorite) => (
            <li className={css.item} key={favorite._id}>
              <CampersListItem advert={favorite} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>
          Your favorites list is currently empty. Start adding items to see them
          here!
        </p>
      )}
    </div>
  );
};

export default FavoritePage;
