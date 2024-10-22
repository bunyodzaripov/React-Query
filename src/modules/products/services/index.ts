import axiosInstance from "@api";
import { ParamsType } from "@types";

////////////////////////////// GET PRODUCT //////////////////////////////
export async function getProduct(params: ParamsType) {
   return await axiosInstance.get("products/search", { params });
}

////////////////////////////// DELETE PRODUCT //////////////////////////////
export async function deleteProduct(id: number) {
   const res = await axiosInstance.delete(`products/delete/${id}`);
   return res?.data;
}
