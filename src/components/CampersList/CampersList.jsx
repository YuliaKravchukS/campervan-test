import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import CampersListItem from "../CampersListItem/CampersListItem";

const CampersList = ({ showAll = false }) => {
  const adverts = useSelector(selectAdverts);

  if (!Array.isArray(adverts)) return null;

  const displayedAdverts = showAll ? adverts : adverts.slice(0, 3);

  return (
    <ul>
      {displayedAdverts.map((advert) => (
        <li key={advert._id}>
          <CampersListItem advert={advert} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
