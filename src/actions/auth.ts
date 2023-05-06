import { UserLoginData, UserSignupData } from "@/types/auth-entities";
import * as api from "../common/api";
import toast from "react-hot-toast";
import { AnyAction, Dispatch } from "redux";
import { NextRouter } from "next/router";

export const signin = (formValue: UserLoginData, router: NextRouter) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data } = await api.signIn(formValue);
    dispatch({ type: "AUTH", payload: data });
    router.push("/home");
    toast.success("loggedin successfully!!");
  } catch (error: any) {
    console.log("signin error", error);
    toast.error(error?.response?.data.message || "something went wrong");
  }
};

export const signup = (formvalue: UserSignupData, router: NextRouter) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data } = await api.signUP(formvalue);
    dispatch({ type: "AUTH", payload: data });
    router.push("/home");
    toast.success("user created successfully");
  } catch (error: any) {
    console.log("signup error", error);
    toast.error(error?.response?.data.message || "something went wrong");
  }
};
