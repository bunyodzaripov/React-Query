import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory, deleteCategory, updateCategory } from "../services";
import { CategoryType } from "../types";
import { Notification } from "../../../utils/notification";

//////////////////////// CREATE CATEGORY //////////////////////////////
export function useCreateCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: CategoryType) => createCategory(data),
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
            await queryClient.invalidateQueries({ queryKey: ["category"] });
         }
      },
   });
}

//////////////////////// UPDATE CATEGORY //////////////////////////////
export function useUpdateCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data: CategoryType) => updateCategory(data),
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

//////////////////////// DELETE CATEGORY //////////////////////////////
export function useDeleteCategory() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (id: number) => deleteCategory(id),
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
            await queryClient.invalidateQueries({ queryKey: ["category"] });
         }
      },
   });
}
