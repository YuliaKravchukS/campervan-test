import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AdvertsPage = lazy(() => import("./pages/AdvertsPage/AdvertsPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <div>
      <header className={s.header}>
        <Navigation />
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<AdvertsPage />} />
          <Route path='/favorites' element={<FavoritePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
