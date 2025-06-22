import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Succes from "./pages/Succes";
import Error from "./pages/Error";
import ProtectedRouter from "./components/ProtectedRouter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/succes"
          element={<ProtectedRouter element={<Succes />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
