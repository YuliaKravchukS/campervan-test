import css from "./EquipmentsList.module.css";
import icons from "../../assets/icons.svg";

const EquipmentsList = ({ advert, limit }) => {
  const { adults, children, engine, transmission } = advert;

  const {
    airConditioner,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
  } = advert.details;
  const isTruthy = (value) => value !== 0 && value !== "";

  const equipmentItems = [
    isTruthy(adults) && (
      <li key='adults' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use href={`${icons}#icon-adults`} />
        </svg>
        <p>{`${adults} adults`}</p>
      </li>
    ),
    isTruthy(children) && (
      <li key='children' className={css.equipmentItem}>
        <p>{`${children} children`}</p>
      </li>
    ),
    isTruthy(transmission) && (
      <li key='transmission' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-automatic`} />
        </svg>
        <p className={css.upperFirstLetter}>{transmission}</p>
      </li>
    ),
    isTruthy(engine) && (
      <li key='engine' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use href={`${icons}#icon-petrol`} />
        </svg>
        <p className={css.upperFirstLetter}>{engine}</p>
      </li>
    ),
    isTruthy(kitchen) && (
      <li key='kitchen' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-kitchen`} />
        </svg>
        <p>Kitchen</p>
      </li>
    ),
    isTruthy(beds) && (
      <li key='beds' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-bed`} />
        </svg>
        <p>{`${beds} beds`}</p>
      </li>
    ),
    isTruthy(airConditioner) && (
      <li key='airConditioner' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-hotel-air`} />
        </svg>
        <p>AC</p>
      </li>
    ),
    isTruthy(TV) && (
      <li key='TV' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-tv`} />
        </svg>
        <p>TV</p>
      </li>
    ),
    isTruthy(CD) && (
      <li key='CD' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-cd`} />
        </svg>
        <p>CD</p>
      </li>
    ),
    isTruthy(radio) && (
      <li key='radio' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-radio`} />
        </svg>
        <p>Radio</p>
      </li>
    ),
    isTruthy(hob) && (
      <li key='hob' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use href={`${icons}#icon-hob`} />
        </svg>
        <p>{`${hob} hob`}</p>
      </li>
    ),
    isTruthy(toilet) && (
      <li key='toilet' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use href={`${icons}#icon-toilet-paper`} />
        </svg>
        <p>Toilet</p>
      </li>
    ),
    isTruthy(shower) && (
      <li key='shower' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-shower1`} />
        </svg>
        <p>Shower</p>
      </li>
    ),
    isTruthy(freezer) && (
      <li key='freezer' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-freezer`} />
        </svg>
        <p>Freezer</p>
      </li>
    ),
    isTruthy(gas) && (
      <li key='gas' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use href={`${icons}#icon-gas`} />
        </svg>
        <p>Gas</p>
      </li>
    ),
    isTruthy(water) && (
      <li key='water' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-water`} />
        </svg>
        <p>Water</p>
      </li>
    ),
    isTruthy(microwave) && (
      <li key='microwave' className={css.equipmentItem}>
        <svg width={20} height={20}>
          <use className={css.icon} href={`${icons}#icon-microw`} />
        </svg>
        <p>Microwave</p>
      </li>
    ),
  ].filter(Boolean);

  return (
    <ul className={css.equipmentList}>
      {limit ? equipmentItems.slice(0, limit) : equipmentItems}
    </ul>
  );
};

export default EquipmentsList;
