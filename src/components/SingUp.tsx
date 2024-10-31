"use client";
import { signIn } from "next-auth/react";

const SingUp = () => {
  return (
    <div>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "http://localhost:3000",
          })
        }
      >
        Google
      </button>
    </div>
  );
};

export default SingUp;
