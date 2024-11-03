"use server";
import { axiosInstance } from "@/lib/AxiosInstance";

export const becomeSeller = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/become-seller", userData);
    return data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  }
};
