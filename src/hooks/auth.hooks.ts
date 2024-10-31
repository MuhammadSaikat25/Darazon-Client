// auth.hooks.ts
import { loginUser } from "@/services/auth";
import { TLoginInputs } from "@/types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUserLogin = (): UseMutationResult<any, Error, TLoginInputs> => {
  return useMutation({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData: TLoginInputs) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successful.",{
        duration:1500
      });
    },
    onError: (error) => {
      toast.error(error.message,{
        duration:1500
      });
    },
  });
};
