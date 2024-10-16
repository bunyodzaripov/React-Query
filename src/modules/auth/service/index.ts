import axiosInstance from "@api";
import { SignIn } from "../types";

////////////////////////////// SIGN IN //////////////////////////////

export async function signIn(data: SignIn) {
   return await axiosInstance.post("/auth/sign-in", data);
}

////////////////////////////// SIGN UP //////////////////////////////
