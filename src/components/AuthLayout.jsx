import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Protected = ({ children, authentication = true }) => {
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    // If the route is for unauthenticated users and the user is authenticated, redirect to the homepage.
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoading(false);
  }, [authStatus, navigate, authentication]);

  return loading ? <Loading /> : <> {children}</>;
};

export default Protected;
