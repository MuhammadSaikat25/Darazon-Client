import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center space-x-5 p-4 bg-red-600">
      <h1>Nav</h1>
      <div className="">
        <Link href={"/registration"}>Sing UP</Link>
      </div>
    </div>
  );
};

export default Nav;
