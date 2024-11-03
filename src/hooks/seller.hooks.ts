import { becomeSeller } from "@/services/seller/seller";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export const BecomeSeller = (): UseMutationResult<any, Error, any> => {
  return useMutation({
    mutationKey: ["BeCome-Seller"],
    mutationFn: async (userData: any) => await becomeSeller(userData),
    onSuccess: () => {
      toast.success("Request from seller account successful", {
        duration: 1500,
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        duration: 1500,
      });
    },
  });
};
