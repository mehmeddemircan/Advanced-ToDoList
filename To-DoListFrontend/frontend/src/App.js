import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LoginPage2 from "./pages/LoginPage2";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/Actions/AuthAction";
import { useEffect } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import PeoplePage from "./pages/PeoplePage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route index element={<HomePage />} />
        <Route path="/person" element={<PeoplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
