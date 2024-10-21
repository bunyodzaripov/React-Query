import axiosInstance from "@api";
import { ParamsType } from "@types";
import { BrandCategoryType } from "../types";

////////////////////////////// GET BRAND CATEGORY //////////////////////////////
export async function getBrandCategory(params: ParamsType) {
   return await axiosInstance.get("brand-category/search", { params });
}

////////////////////////////// CREATE BRAND CATEGORY //////////////////////////////
export const createBrandCategory = async (data: BrandCategoryType) => {
   const res = await axiosInstance.post("brand-category/create", data);
   return res?.data;
};

////////////////////////////// UPDATE BRAND CATEGORY //////////////////////////////
export const updateBrandCategory = async (data: BrandCategoryType) => {
   const { id } = data;
   delete (data as any).id;
   const res = await axiosInstance.patch(`brand-category/update/${id}`, data);
   return res?.data;
};

////////////////////////////// DELETE BRAND CATEGORY //////////////////////////////
export const deleteBrandCategory = async (id: number) => {
   const res = await axiosInstance.delete(`brand-category/delete/${id}`);
   return res?.data;
};
