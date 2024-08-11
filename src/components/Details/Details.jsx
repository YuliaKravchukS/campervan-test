import { useAdvert } from "../AdvertContext/AdvertContext";
import css from "./Details.module.css";

// const Details = ({ advert }) => {

const Details = () => {
  const advert = useAdvert();

  const { form, length, width, height, tank, consumption } = advert;
  const formArr = {
    alcove: "Alcove",
    fullyIntegrated: "Fully integrated",
    panelTruck: "Panel truck",
  };

  return (
    <div>
      <p className={css.detailsTittle}>Vehicle details</p>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <p>Form</p>
          <p>{formArr[form]}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Length</p>
          <p>{`${length.slice(0, length.length - 1)} ${length.slice(-1)}`}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Width</p>
          <p>{`${width.slice(0, width.length - 1)} ${width.slice(-1)}`}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Height</p>
          <p>{`${height.slice(0, height.length - 1)} ${height.slice(-1)}`}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Tank</p>
          <p>{`${tank.slice(0, tank.length - 1)} ${tank.slice(-1)}`}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Details;
