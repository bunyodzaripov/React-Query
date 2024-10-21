import { useQuery } from "@tanstack/react-query";
import { getBrandCategory } from "../services";
import { ParamsType } from "@types";

export function useGetBrandCategory(params: ParamsType) {
   return useQuery({
      queryKey: ["brandCategory", params],
      queryFn: () => getBrandCategory(params),
   });
}
