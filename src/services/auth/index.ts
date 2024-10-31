import { axiosInstance } from "@/lib/AxiosInstance";
import { cookies } from "next/headers";

export const loginUser = async (userData: any) => {
  try {
    const data = await axiosInstance.post("/singIn", userData);
    console.log(data, 1);
    // if (data.success) {
    //   cookies().set("jwt", data?.data?.accessToken);
    //   cookies().set("refreshToken", data?.data?.refreshToken);
    // }

    return data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  }
};
