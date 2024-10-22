import { useQuery } from "@tanstack/react-query";
import { getBrandCategory, getBrandCategoryByBrand } from "../services";
import { ParamsType } from "@types";

export function useGetBrandCategory(params: ParamsType) {
   return useQuery({
      queryKey: ["brandCategory", params],
      queryFn: () => getBrandCategory(params),
   });
}

export function useGetBrandCategoryByBrand(id: number) {
   return useQuery({
      queryKey: ["brandCategory", id],
      queryFn: () => getBrandCategoryByBrand(id),
   });
}
