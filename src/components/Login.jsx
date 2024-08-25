import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth";
import { useDispatch } from "react-redux";
import { login as signin } from "../store/authSlice";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (data) => {
    setError("");
    authService
      .login(data)
      .then(() => authService.getCurrentUser())
      .then((currentUser) => {
        if (currentUser) {
          dispatch(signin({ currentUser }));
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="px-4 py-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="">
          <div className="w-full flex justify-center">
            <Logo />
          </div>

          <h2 className="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-ghost">
            Sign in to your account
          </h2>
        </div>
        <p className="mt-10 text-ghost text-center">
          Don&apos;t have any account?&nbsp;
          <Link to="/signup" className="text-primary font-semibold">
            Sign Up
          </Link>
        </p>
        {error && (
          <div className="alert alert-error mt-3 w-full " role="alert">
            <span>{error}</span>
          </div>
        )}
        <div className="mt-10 ">
          <form onSubmit={handleSubmit(login)} className="space-y-6">
            <div className="grid gap-2">
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
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
