import React from "react";
import { AuthLayout, Login as Form } from "../components";

const Login = () => {
  return (
    <AuthLayout authentication={false}>
      <div className="py-12">
        <Form />
      </div>
    </AuthLayout>
  );
};

export default Login;
