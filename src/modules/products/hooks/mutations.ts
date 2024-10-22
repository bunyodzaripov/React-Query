import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../services";
import { Notification } from "../../../utils/notification";

//////////////////////// DELETE PRODUCT //////////////////////////////
export function useDeleteProduct() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (id: number) => deleteProduct(id),
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
            await queryClient.invalidateQueries({ queryKey: ["products"] });
         }
      },
   });
}
