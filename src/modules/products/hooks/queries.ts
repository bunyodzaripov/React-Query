import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../services";
import { ParamsType } from "@types";

export function useGetProduct(params: ParamsType) {
   return useQuery({
      queryKey: ["products", params],
      queryFn: () => getProduct(params),
   });
}
