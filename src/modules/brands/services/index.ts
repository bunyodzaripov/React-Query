import axiosInstance from "@api";
import { ParamsType } from "@types";

////////////////////////////// GET BRANDS //////////////////////////////
export async function getBrands(params: ParamsType) {
   return await axiosInstance.get("brand/search", { params });
}

// ////////////////////////////// CREATE CATEGORY //////////////////////////////
// export const createCategory = async (data: CategoryType) => {
//    const res = await axiosInstance.post("category/create", data);
//    return res?.data;
// };

// ////////////////////////////// UPDATE CATEGORY //////////////////////////////
// export const updateCategory = async (data: CategoryType) => {
//    const { id } = data;
//    delete (data as any).id;
//    const res = await axiosInstance.patch(`category/update/${id}`, data);
//    return res?.data;
// };

// ////////////////////////////// DELETE CATEGORY //////////////////////////////
// export const deleteCategory = async (id: number) => {
//    const res = await axiosInstance.delete(`category/delete/${id}`);
//    return res?.data;
// };
