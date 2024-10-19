import axiosInstance from "@api";
import { SubCategoryType } from "../types";

////////////////////////////// GET SUBCATEGORY //////////////////////////////
export async function getSubCategory(
   id: string | number | undefined,
   params: SubCategoryType
) {
   return await axiosInstance.get(`sub-category/search/${id}`, {
      params,
   });
}

////////////////////////////// CREATE SUBCATEGORY //////////////////////////////
export const createSubCategory = async (data: SubCategoryType) => {
   const res = await axiosInstance.post("/sub-category/create", data);
   return res?.data;
};

////////////////////////////// UPDATE SUBCATEGORY //////////////////////////////
export const updateSubCategory = async (data: SubCategoryType) => {
   const { id } = data;

   delete (data as any).id;
   const res = await axiosInstance.patch(`sub-category/update/${id}`, data);
   return res?.data;
};

////////////////////////////// DELETE SUBCATEGORY //////////////////////////////
export const deleteSubCategory = async (id: number) => {
   const res = await axiosInstance.delete(`sub-category/delete/${id}`);
   return res?.data;
};
