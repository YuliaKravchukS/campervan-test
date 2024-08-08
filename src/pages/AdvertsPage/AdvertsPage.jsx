import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { selectError, selectLoading } from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/operations";
import SeeMoreBtn from "../../components/SeeMoreBtn/SeeMoreBtn";

const AdvertsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(true);
  };

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <h1> Adventure Awaits: Rent Your Perfect Camping Car Today!</h1>
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      <CampersList showAll={showAll} />
      {!loading && !error && <SeeMoreBtn onClick={handleClick} />}
    </div>
  );
};

export default AdvertsPage;
