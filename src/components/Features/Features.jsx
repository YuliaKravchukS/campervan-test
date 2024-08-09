import Details from "../Details/Details";
import EquipmentsList from "../EquipmentsList/EquipmentsList";

const Features = ({ advert }) => {
  return (
    <div>
      <div>
        <EquipmentsList advert={advert} />
      </div>
      <Details advert={advert} />
    </div>
  );
};

export default Features;
