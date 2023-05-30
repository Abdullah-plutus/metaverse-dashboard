import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../constants";
import { apiClient } from "../services";

const useGetProperties = () => {
  const getProperties = async () => {
    const { data } = await apiClient.get(`${API.ROUTES.GET_PROPERTIES}`);
    return data;
  };

  return useQuery({ queryKey: ["properties"], queryFn: getProperties });
};

export { useGetProperties };
