import axiosInstance from "@api";
import { SignInType } from "../types";

////////////////////////////// SIGN IN //////////////////////////////

export async function signIn(data: SignInType) {
   return await axiosInstance.post("/auth/sign-in", data);
}

////////////////////////////// SIGN UP //////////////////////////////
