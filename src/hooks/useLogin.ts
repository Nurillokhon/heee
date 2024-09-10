import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/service";

interface LoginData {
  username: string;
  password: string;
}

const createLogin = async (data: LoginData) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: createLogin,
  });
};