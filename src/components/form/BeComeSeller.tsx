"use client";
import { useUser } from "@/app/context/user.context";
import { BecomeSeller } from "@/hooks/seller.hooks";
import { TLoginInputs } from "@/types";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputs extends TLoginInputs {
  interests: string[];
}

const BeComeSeller = () => {
  const { mutate: handleBeComeSeller, isPending, isSuccess } = BecomeSeller();
  const [userId, setUserId] = useState<string | undefined>();
  const { user, isLoading } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      email: user?._id || "",
      interests: [],
    },
  });

  useEffect(() => {
    setUserId(user?._id);

    if (user?._id) {
      reset({
        email: user._id,
        interests: [],
      });
    }
  }, [user, reset]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const sellerInfo = {
      userId,
      productsCategories: data.interests,
    };
    console.log(sellerInfo);
    handleBeComeSeller(sellerInfo);
  };

  return (
    <div className="w-full md:w-[50%] bg-blue-200 h-fit py-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        {/* Interests Selection */}
        <p className="w-[70%] text-left text-[16px] text-gray-950">
          Which category of products do you want to sell?
        </p>
        <div className="flex flex-col w-[70%] gap-2">
          {["Electronics", "Books", "Home and Kitchen", "Clothes", "Food"].map(
            (category) => (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={category}
                  {...register("interests")}
                />
                {category}
              </label>
            )
          )}
          {errors.interests && (
            <p className="text-red-500">{errors.interests.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[70%] p-1 text-white bg-blue-600 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BeComeSeller;
