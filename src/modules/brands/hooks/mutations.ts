import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBrands, updateBrands, createBrands } from "../services";
import { Notification } from "../../../utils/notification";
import { BrandsType } from "../types";

//////////////////////// CREATE BRANDS //////////////////////////////
export function useCreateBrands() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: BrandsType) => createBrands(data),
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

//////////////////////// UPDATE BRANDS //////////////////////////////
export function useUpdateBrands() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: BrandsType) => updateBrands(data),
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
