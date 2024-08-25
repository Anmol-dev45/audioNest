import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Logo from "./Logo";
import authService from "../services/auth";
import { useDispatch } from "react-redux";

const Signup = () => {
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = async (data) => {
    setError("");
    try {
      const currentUser = await authService.signup(data);
      if (currentUser) dispatch(login({ currentUser }));
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="px-4 py-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <div className="w-full flex justify-center">
            <Logo />
          </div>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-ghost">
            Sign up to create account
          </h2>
        </div>
        <p className="mt-10 text-ghost text-center">
          Already have an account?&nbsp;
          <Link to="/login" className="text-primary font-semibold">
            Sign In
          </Link>
        </p>
        {error && (
          <div className="alert alert-error mt-3 " role="alert">
            <span>{error}</span>
          </div>
        )}
        <div className="mt-10">
          <form onSubmit={handleSubmit(signup)} className="space-y-6">
            <div className="grid gap-2">
              <Input
                label="Full Name"
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: true,
                })}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
