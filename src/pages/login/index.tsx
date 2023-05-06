'use client';

import React, { useState } from "react";
import "./login.css";
import Link from 'next/link'
import { signin } from "@/actions/auth";
import Loader from "../loading";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useAppDispatch } from "@/hooks";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";

const Login: NextPageWithLayout = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isText, setIsText] = useState(false);

  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const showHandler = () => {
    setIsText((prev) => !prev);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    let dispatchFunc = signin(formValue, router)
    dispatchFunc(dispatch).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="auth_container">
      <div className="auth_header">
        <h2>MoonShine</h2>
      </div>
      <form onSubmit={handleFormSubmit} className="auth_form">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="auth_input"
          id="email"
          value={formValue.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type={isText ? "text" : "password"}
          className="auth_input"
          id="password"
          value={formValue.password}
          name="password"
          onChange={handleChange}
          placeholder="Enter Your Password"
        />
        {isLoading ? null : (
          <div className="auth_icon" onClick={showHandler}>
            {isText ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        )}
        <div className="auth_button_container">
          {isLoading ? (
            <Loader />
          ) : (
            <button
              className="auth_button"
              disabled={!(formValue.email && formValue.password)}
            >
              Login
            </button>
          )}
        </div>
        <Link href="/signup">
          <p>Don&apos;t have an account? Signup here</p>
        </Link>
      </form>
    </div>
  );
};

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <>{page}</>;
};

export default Login;
