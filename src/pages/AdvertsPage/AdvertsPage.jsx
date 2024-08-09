import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { selectError, selectLoading } from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/operations";
// import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import css from "./AdvertsPage.module.css";
import Button from "../../ui/Button/Button";

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
    <div className={css.advertsPage}>
      <h1> Adventure Awaits: Rent Your Perfect Camping Car Today!</h1>
      <div className={css.adverts}>
        <SearchBox />
        {loading && !error && <b>Request in progress...</b>}
        <div className={css.list}>
          <CampersList showAll={showAll} />
          {!loading && !error && (
            <Button onClick={handleClick} buttonText='Load more' type='load' />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvertsPage;
