import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Notification } from "../../../utils/notification";
import {
   deleteBrandCategory,
   createBrandCategory,
   updateBrandCategory,
} from "../services";
import { BrandCategoryType } from "../types";

////////////////////////// CREATE BRAND CATEGORY //////////////////////////////
export function useCreateBrandCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: BrandCategoryType) => createBrandCategory(data),
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

///////////////////////// UPDATE BRAND CATEGORY //////////////////////////////
export function useUpdateBrandCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: BrandCategoryType) => updateBrandCategory(data),
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
