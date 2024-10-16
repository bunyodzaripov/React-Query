import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../services";
import { SignInType, SignUpType } from "../types";
import { saveAccessToken } from "../../../utils/token-service";
import { Notification } from "../../../utils/notification";

//////////////// SIGN IN MUTATION //////////////////////////////
export function useSignInMutation() {
   const navigate = useNavigate();
   return useMutation({
      mutationFn: (data: SignInType) => signIn(data),
      onSuccess: (res) => {
         const { access_token } = res.data?.data?.tokens;
         saveAccessToken(access_token);
         navigate("/layout");
         Notification({
            type: "success",
            message: res?.data?.message,
         });
      },
      onError: (err) => {
         Notification({
            type: "error",
            message: err?.message,
         });
      },
   });
}

////////////////// SIGN UP MUTATION //////////////////////////////
export function useSignUpMutation() {
   const navigate = useNavigate();
   return useMutation({
      mutationFn: (data: SignUpType) => signUp(data),
      onSuccess: (res) => {
         const { access_token } = res.data?.data?.tokens;
         saveAccessToken(access_token);
         navigate("/layout");
         Notification({
            type: "success",
            message: res?.data?.message,
         });
      },
      onError: (err) => {
         Notification({
            type: "error",
            message: err?.message,
         });
      },
   });
}
