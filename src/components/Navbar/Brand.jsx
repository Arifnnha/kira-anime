"use client";

import Link from "next/link";
import { useRef } from "react";

const Brand = () => {
  const searchRef = useRef();

  const handleClick = () => {
    let keyword = searchRef.current.value;

    if (searchRef.current) {
      keyword = "";
    }
  };

  return (
    <Link
      className="flex items-center font-bold text-xl lg:text-3xl sm:text-2xl"
      href="/"
      onClick={handleClick}
    >
      KiraAnime
    </Link>
  );
};

export default Brand;
