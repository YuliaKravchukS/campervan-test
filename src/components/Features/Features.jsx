const Features = ({ advert }) => {
  const {
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = advert;

  const {
    airConditioner,
    kitchen,
    beds,
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
  return (
    <div>
      <div>
        <ul>
          {isTruthy(adults) && (
            <li>
              <p>{`${adults} adults`}</p>
            </li>
          )}
          {isTruthy(children) && (
            <li>
              <p>{`${children} children`}</p>
            </li>
          )}
          {isTruthy(transmission) && (
            <li>
              <p>{transmission}</p>
            </li>
          )}
          {isTruthy(engine) && (
            <li>
              <p>{engine}</p>
            </li>
          )}
          {isTruthy(kitchen) && (
            <li>
              <p>Kitchen</p>
            </li>
          )}
          {isTruthy(beds) && (
            <li>
              <p>{`${beds} beds`}</p>
            </li>
          )}
          {isTruthy(airConditioner) && (
            <li>
              <p>AC</p>
            </li>
          )}
          {isTruthy(CD) && (
            <li>
              <p>CD</p>
            </li>
          )}
          {isTruthy(radio) && (
            <li>
              <p>Radio</p>
            </li>
          )}
          {isTruthy(hob) && (
            <li>
              <p>{`${hob} hob`}</p>
            </li>
          )}
          {isTruthy(toilet) && (
            <li>
              <p>Toilet</p>
            </li>
          )}
          {isTruthy(shower) && (
            <li>
              <p>Shower</p>
            </li>
          )}
          {isTruthy(freezer) && (
            <li>
              <p>Freezer</p>
            </li>
          )}
          {isTruthy(gas) && (
            <li>
              <p>Gas</p>
            </li>
          )}
          {isTruthy(water) && (
            <li>
              <p>Water</p>
            </li>
          )}
          {isTruthy(microwave) && (
            <li>
              <p>Microwave</p>
            </li>
          )}
        </ul>
      </div>
      <p>Vehicle details</p>
      <ul>
        <li>
          <p>Form</p>
          <p>{form}</p>
        </li>
        <li>
          <p>Length</p>
          <p>{length}</p>
        </li>
        <li>
          <p>Width</p>
          <p>{width}</p>
        </li>
        <li>
          <p>Height</p>
          <p>{height}</p>
        </li>
        <li>
          <p>Tank</p>
          <p>{tank}</p>
        </li>
        <li>
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
