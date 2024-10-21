import axiosInstance from "@api";
import { ParamsType } from "@types";

////////////////////////////// GET BRAND CATEGORY //////////////////////////////
export async function getBrandCategory(params: ParamsType) {
   return await axiosInstance.get("brand-category/search", { params });
}

////////////////////////////// DELETE BRAND CATEGORY //////////////////////////////
export const deleteBrandCategory = async (id: number) => {
   const res = await axiosInstance.delete(`brand-category/delete/${id}`);
   return res?.data;
};
