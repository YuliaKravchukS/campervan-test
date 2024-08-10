import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import CampersListItem from "../CampersListItem/CampersListItem";
import css from "./CampersList.module.css";

const CampersList = () => {
  const adverts = useSelector(selectAdverts);
  if (!Array.isArray(adverts)) return null;

  return (
    <ul className={css.list}>
      {adverts.map((advert) => (
        <li className={css.item} key={advert._id}>
          <CampersListItem advert={advert} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
