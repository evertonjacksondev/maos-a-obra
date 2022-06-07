
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Compromisso from "../pages/compromisso/Compromisso";


const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Compromisso/>} path="/" exact />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute;