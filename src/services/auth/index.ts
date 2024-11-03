"use server";
import { axiosInstance } from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const loginUser = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/singIn", userData);
    
    if (data.success) {
      cookies().set("jwt", data?.data?.jwtToken);
    }

    return data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  }
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("jwt")?.value;

  let decodedToken = null;
  
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      role: decodedToken.role,
    };
  }

  return decodedToken;
};
