import React from "react";
import { Input, Logo } from "../index";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <Input placeholder="Search" />
        </div>
        {authStatus && <LogoutBtn />}
      </div>
    </div>
  );
};

export default Header;
