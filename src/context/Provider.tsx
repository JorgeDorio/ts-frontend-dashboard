import { Router } from "react-router-dom";
import Context from "./Context";

export const Provider = () => {
  const providerValues = {
    teste: 'teste'
  };
  return (
    <Context.Provider value={providerValues}>

    </Context.Provider>
  );
};
