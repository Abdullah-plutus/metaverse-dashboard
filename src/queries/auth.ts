import { useQuery, useMutation } from "@tanstack/react-query";
import { API } from "../constants";
import { apiClient } from "../services";

const useLogin = () => {
  const login = async (body: {
    username: string;
    email: string;
    password: string;
  }) => {
    const res = await apiClient.post(API.ROUTES.AUTH_LOGIN, body);
    return res;
  };

  return useMutation(login);
};

const useGetCurrentUser = () => {
  const getCurrentUser = async () => {
    const res = await apiClient.get(API.ROUTES.AUTH_CURRENT_USER);
    return res;
  };

  return useQuery({ queryKey: ["currentUser"], queryFn: getCurrentUser });
};

export { useLogin, useGetCurrentUser };
