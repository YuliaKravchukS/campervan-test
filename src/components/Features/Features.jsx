import Details from "../Details/Details";
import EquipmentsList from "../EquipmentsList/EquipmentsList";
import css from "./Features.module.css";

const Features = () => {
  return (
    <div className={css.wrap}>
      <div>
        {/* <EquipmentsList advert={advert} /> */}
        <EquipmentsList limit={10} />
      </div>
      {/* <Details advert={advert} /> */}
      <Details />
    </div>
  );
};

export default Features;

// const Features = ({advert}) => {
