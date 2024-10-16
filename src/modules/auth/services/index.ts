import axiosInstance from "@api";
import { SignInType, SignUpType } from "../types";

////////////////////////////// SIGN IN //////////////////////////////
export async function signIn(data: SignInType) {
   return await axiosInstance.post("/auth/sign-in", data);
}

////////////////////////////// SIGN UP //////////////////////////////
export async function signUp(data: SignUpType) {
   return await axiosInstance.post("/auth/admin/sign-up", data);
}
