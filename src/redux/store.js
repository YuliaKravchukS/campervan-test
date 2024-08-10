import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoritesReducer } from "./favorites/slice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};
const advertsPersistConfig = {
  key: "adverts",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertsPersistConfig, advertsReducer),

    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
