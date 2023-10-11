import { useQuery } from "@tanstack/react-query";
import type { Arrest, ArrestResponse } from "types/arrest";

const cacheKey = ["arrest"] as const;

export const useArrests = () => {
  const { isLoading, error, data } = useQuery<ArrestResponse, any, Arrest[]>({
    queryKey: cacheKey,
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}&API_KEY=${process.env.REACT_APP_API_KEY}`).then((res) =>
        res.json()
      ),
      select: (response) => response.data.map(yearData => ({
        year: Number(yearData.data_year),
        arrests: Object.entries(yearData).reduce((sum, e) => sum + Number(e[1]), 0) - Number(yearData.data_year)
      }))
  });

  return { isLoading, error, data };
};
