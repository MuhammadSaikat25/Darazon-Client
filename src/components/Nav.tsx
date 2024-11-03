"use client";
import { useUser } from "@/app/context/user.context";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-3 bg-red-600 p-2">
      <Link href={"/"}>Home</Link>
      <Link href={"/registration"}>Sing UP</Link>
      <Link href={"/admin"}>Admin</Link>
      <Link href={"/seller"}>seller</Link>
      <div className="">
        {user?.role === "user" && (
          <Link href={"beCome-seller"}>Be come seller</Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
