import React from "react";
import { AuthLayout, Signup as Form } from "../components";
const Signup = () => {
  return (
    <AuthLayout authentication={false}>
      <div className="py-12">
        <Form />
      </div>
    </AuthLayout>
  );
};

export default Signup;
