import Details from "../Details/Details";
import EquipmentsList from "../EquipmentsList/EquipmentsList";
import css from "./Features.module.css";

const Features = ({ advert }) => {
  return (
    <div className={css.wrap}>
      <div>
        <EquipmentsList advert={advert} />
      </div>
      <Details advert={advert} />
    </div>
  );
};

export default Features;
