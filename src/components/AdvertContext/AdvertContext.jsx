import { createContext, useContext } from "react";
const AdvertContext = createContext();

export const useAdvert = () => useContext(AdvertContext);


export default AdvertContext;
