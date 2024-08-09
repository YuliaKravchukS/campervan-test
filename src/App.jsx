import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AdvertsPage = lazy(() => import("./pages/AdvertsPage/AdvertsPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<AdvertsPage />} />
            <Route path='/favorites' element={<FavoritePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
export default App;
