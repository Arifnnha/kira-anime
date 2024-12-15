"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center px-4 mb-4">
      <button
        className="text-color-primary text-xl hover:text-color-accent transition-all"
        onClick={handleBack}
      >
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-color-primary text-2xl font-bold">{title}</h3>
    </div>
  );
};

export default Header;
