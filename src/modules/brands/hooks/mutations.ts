import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBrands } from "../services";
import { Notification } from "../../../utils/notification";

//////////////////////// DELETE BRANDS //////////////////////////////
export function useDeleteBrands() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (id: number) => deleteBrands(id),
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
            await queryClient.invalidateQueries({ queryKey: ["brands"] });
         }
      },
   });
}
