import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { setBaseCurrency } from "./redux/slice";
import { baseCurrencyThunk } from "./redux/thunk";
import { getUserInfo } from "./services/apiGeolocation";

const HomePage = lazy(() => import("./pages/HomePage"));
const RatesPage = lazy(() => import("./pages/RatesPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(baseCurrencyThunk(crd));
    }

    function error(error) {
      dispatch(setBaseCurrency("USD"));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/rates" element={<RatesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
