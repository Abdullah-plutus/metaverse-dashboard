import { useMutation } from "@tanstack/react-query";
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

export { useLogin };
