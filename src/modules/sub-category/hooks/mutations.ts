import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
   createSubCategory,
   deleteSubCategory,
   updateSubCategory,
} from "../services";
import { SubCategoryType } from "../types";
import { Notification } from "../../../utils/notification";

//////////////////////// CREATE SUBCATEGORY //////////////////////////////
export function useCreateSubCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: SubCategoryType) => createSubCategory(data),
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
            await queryClient.invalidateQueries({ queryKey: ["subCategory"] });
         }
      },
   });
}

//////////////////////// UPDATE CATEGORY //////////////////////////////
export function useUpdateCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: SubCategoryType) => updateSubCategory(data),
      onSuccess: (response) => {
         Notification({
            type: "success",
            message: response?.message,
         });
      },
      onSettled: async (_, error, variables) => {
         if (error) {
            Notification({
               type: "error",
               message: error?.message,
            });
         } else {
            await queryClient.invalidateQueries({
               queryKey: ["category", { id: variables.id }],
            });
         }
      },
   });
}

//////////////////////// DELETE SUBCATEGORY //////////////////////////////
export function useDeleteSubCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (id: number) => deleteSubCategory(id),
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
            await queryClient.invalidateQueries({ queryKey: ["subCategory"] });
         }
      },
   });
}
