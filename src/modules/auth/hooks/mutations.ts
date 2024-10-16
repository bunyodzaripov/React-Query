import { useMutation } from "@tanstack/react-query";
import { signIn } from "../service";
import { SignIn } from "../types";

export function useSignInMutations() {
   return useMutation({
      mutationFn: (data: SignIn) => signIn(data),
   });
}
