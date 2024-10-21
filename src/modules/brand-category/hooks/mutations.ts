import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Notification } from "../../../utils/notification";
import { deleteBrandCategory } from "../services";

//////////////////////// DELETE BRAND CATEGORY //////////////////////////////
export function useDeleteBrandCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (id: number) => deleteBrandCategory(id),
      onSuccess: (response) => {
         Notification({
            type: "success",
            message: response?.message,
         });
      },
      onSettled: async (_, error) => {
         if (error) {
            Notification({
               type: "error",
               message: error?.message,
            });
         } else {
            await queryClient.invalidateQueries({
               queryKey: ["brandCategory"],
            });
         }
      },
   });
}
