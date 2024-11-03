"use client";
import { useUserLogin } from "@/hooks/auth.hooks";
import { TLoginInputs } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import CircularProgress from "@mui/material/CircularProgress";
import { useUser } from "@/app/context/user.context";

const SignUp = () => {
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const [visible, setVisible] = useState(false);
  const route = useRouter();
  const { user, isLoading } = useUser();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TLoginInputs>();

  const onSubmit: SubmitHandler<TLoginInputs> = (data) => {
    handleUserLogin(data);
  };
  useEffect(() => {
    localStorage.setItem("jwt", JSON.stringify(user?.email));
    if (isSuccess) {
      route.push("/");
    }
  }, [isSuccess, isLoading]);

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className="w-[50%] bg-slate-200 p-5">
        <h1 className="text-center my-3 font-semibold">
          Welcome Back to Darazon
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center flex-col gap-5 clear-start "
        >
          <input
            className="px-4 rounded-3xl w-[70%] py-2 focus:outline-none"
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            required
          />

          {/* Password Input */}
          <div className="relative w-[70%]">
            <input
              className="px-4 rounded-3xl w-full py-2 focus:outline-none"
              type={visible ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              required
            />
            <div className="cursor-pointer absolute top-[10px] right-2">
              {visible ? (
                <FaEyeSlash onClick={() => setVisible(!visible)} />
              ) : (
                <IoEye onClick={() => setVisible(!visible)} />
              )}
            </div>
          </div>

          <button
            className="bg-blue-600 w-[70%] p-1 rounded-lg text-white"
            type="submit"
            disabled={isPending}
          >
            {isPending ? <CircularProgress color="success" /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
