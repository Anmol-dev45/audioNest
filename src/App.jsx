import { Outlet } from "react-router-dom";

import { Sidebar, Header, Loading } from "./components";
import { useEffect, useState } from "react";
import authService from "./services/auth";
import { login, logout } from "./store/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((currentUser) => {
        if (currentUser) dispatch(login({ currentUser }));
        else dispatch(logout());
      })
      .catch((e) => {})
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
