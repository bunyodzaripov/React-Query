import axiosInstance from "@api";
import { ParamsType } from "@types";

////////////////////////////// GET PRODUCT //////////////////////////////
export async function getProduct(params: ParamsType) {
   return await axiosInstance.get("products/search", { params });
}

////////////////////////////// CREATE PRODUCT //////////////////////////////
export const createProduct = async (data: ParamsType) => {
   const res = await axiosInstance.post("products/create", data);
   return res?.data;
};

////////////////////////////////// UPDATE PRODUCT //////////////////////////////
export const updateProduct = async (data: any) => {
   const { id } = data;
   delete data?.id;
   const res = await axiosInstance.patch(`products/update/${id}`, data);
   return res?.data;
};

////////////////////////////// DELETE PRODUCT //////////////////////////////
export async function deleteProduct(id: number) {
   const res = await axiosInstance.delete(`products/delete/${id}`);
   return res?.data;
}
