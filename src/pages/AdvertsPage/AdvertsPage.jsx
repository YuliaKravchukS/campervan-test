import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { selectError, selectLoading } from "../../redux/adverts/selectors";
import { fetchAdvertsPagination } from "../../redux/adverts/operations";
import css from "./AdvertsPage.module.css";
import Button from "../../ui/Button/Button";
import { useSearchParams } from "react-router-dom";
import { requestAdverts } from "../../api/api";

const AdvertsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [countPage, setCountPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handleClick = () => {
    const nextPage = countPage + 1;
    setCountPage(nextPage);
    setSearchParams({ page: nextPage });
  };

  useEffect(() => {
    dispatch(fetchAdvertsPagination({ page: countPage }));
  }, [dispatch, countPage]);

  useEffect(() => {
    const calculateTotalPage = async () => {
      const data = await requestAdverts();
      setTotalPage(Math.ceil(data.length / 4));
    };
    calculateTotalPage();
  }, []);

  return (
    <div className={css.advertsPage}>
      <h1>
        {" "}
        Adventure Awaits!
        <br /> Rent Your Perfect Camping Car Today!
      </h1>
      <div className={css.adverts}>
        {/* <SearchBox /> */}
        {loading && !error && <b>Request in progress...</b>}
        <div className={css.list}>
          <CampersList />
          {!loading && !error && countPage < totalPage && (
            <Button onClick={handleClick} buttonText='Load more' type='load' />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvertsPage;
