import { useQuery } from "@tanstack/react-query";
import { getBrands, getBrandsByCategory } from "../services";
import { ParamsType } from "@types";

export function useGetBrands(params: ParamsType) {
   return useQuery({
      queryKey: ["brands", params],
      queryFn: () => getBrands(params),
   });
}

export function useGetBrandsByCategory(id: number) {
   return useQuery({
      queryKey: ["brands", id],
      queryFn: () => getBrandsByCategory(id),
   });
}
