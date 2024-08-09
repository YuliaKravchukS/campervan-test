import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import CampersListItem from "../CampersListItem/CampersListItem";
import css from "./CampersList.module.css";

const CampersList = ({ showAll = false }) => {
  const adverts = useSelector(selectAdverts);

  if (!Array.isArray(adverts)) return null;

  const displayedAdverts = showAll ? adverts : adverts.slice(0, 3);

  return (
    <ul className={css.list}>
      {displayedAdverts.map((advert) => (
        <li className={css.item} key={advert._id}>
          <CampersListItem advert={advert} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
