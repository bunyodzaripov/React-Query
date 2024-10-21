import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../services";
import { ParamsType } from "@types";

export function useGetBrands(params: ParamsType) {
   return useQuery({
      queryKey: ["brands", params],
      queryFn: () => getBrands(params),
   });
}
