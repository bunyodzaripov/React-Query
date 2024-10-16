import { useMutation } from "@tanstack/react-query";
import { signIn, signUp } from "../service";
import { SignInType, SignUpType } from "../types";
import { saveAccessToken } from "../../../utils/token-service";

//////////////// SIGN IN MUTATION //////////////////////////////
export function useSignInMutation() {
   return useMutation({
      mutationFn: (data: SignInType) => signIn(data),
      onSuccess: (res) => {
         const { access_token } = res.data?.data?.tokens;
         saveAccessToken(access_token);
         window.location.href = "/";
      },
      onError: (err) => {
         console.log(err);
      },
   });
}

////////////////// SIGN UP MUTATION //////////////////////////////
export function useSignUpMutation() {
   return useMutation({
      mutationFn: (data: SignUpType) => signUp(data),
      onSuccess: (res) => {
         const { access_token } = res.data?.data?.tokens;
         saveAccessToken(access_token);
         window.location.href = "/";
      },
      onError: (err) => {
         console.log(err);
      },
   });
}
