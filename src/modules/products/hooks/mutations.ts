import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, createProduct, updateProduct } from "../services";
import { Notification } from "../../../utils/notification";

///////////////////////// CREATE PRODUCT //////////////////////////////
export function useCreateProduct() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: any) => createProduct(data),
      onSuccess: (res) => {
         Notification({
            type: "success",
            message: res?.message,
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

////////////////////////// UPDATE PRODUCT //////////////////////////////
export function useUpdateProduct() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: any) => updateProduct(data),
      onSuccess: (res) => {
         Notification({
            type: "success",
            message: res?.message,
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
