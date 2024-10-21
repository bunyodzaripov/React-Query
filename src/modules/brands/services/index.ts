import axiosInstance from "@api";
import { ParamsType } from "@types";
import { BrandsType } from "../types";

////////////////////////////// GET BRANDS //////////////////////////////
export async function getBrands(params: ParamsType) {
   return await axiosInstance.get("brand/search", { params });
}

//////////////////////////////// GET BRANDS BY CATEGORY //////////////////////////////
export async function getBrandsByCategory(id: number) {
   return await axiosInstance.get(`brand/category/${id}`);
}

////////////////////////////// CREATE BRANDS //////////////////////////////
export const createBrands = async (data: BrandsType) => {
   const res = await axiosInstance.post("brand/create", data);
   return res?.data;
};

////////////////////////////// UPDATE BRANDS //////////////////////////////
export const updateBrands = async (data: BrandsType) => {
   const { id } = data;
   delete (data as any).id;
   const res = await axiosInstance.patch(`brand/update/${id}`, data);
   return res?.data;
};

////////////////////////////// DELETE BRANDS //////////////////////////////
export const deleteBrands = async (id: number) => {
   const res = await axiosInstance.delete(`brand/delete/${id}`);
   return res?.data;
};
