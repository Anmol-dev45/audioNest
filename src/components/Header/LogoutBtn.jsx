import React from "react";
import authService from "../../services/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Error logging out", error);
      });
  };
  return (
    <button onClick={onClickHandler} className="btn btn-primary">
      Logout
    </button>
  );
};

export default LogoutBtn;
