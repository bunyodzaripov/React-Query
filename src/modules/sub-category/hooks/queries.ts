import { useQuery } from "@tanstack/react-query";
import { getSubCategory } from "../services";

export function useGetSubCategory(
   id: string | number | undefined,
   params: any
) {
   return useQuery({
      queryKey: ["subCategory", id, params],
      queryFn: () => getSubCategory(id, params),
   });
}
