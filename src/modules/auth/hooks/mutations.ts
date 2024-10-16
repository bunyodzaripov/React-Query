import { useMutation } from "@tanstack/react-query";
import { signIn } from "../service";
import { SignInType } from "../types";
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
   });
}
