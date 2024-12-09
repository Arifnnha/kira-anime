"use client";

import { XCircle } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-color-dark text-color-primary px-6 py-8 sm:px-12">
      <div className="animate-bounce mb-6 sm:mb-8">
        <XCircle size={72} weight="bold" className="text-color-primary" />
      </div>
      <h1 className="text-4xl font-extrabold text-center mb-6 text-color-primary animate__animated animate__fadeIn">
        404 - Halaman Tidak Ditemukan
      </h1>
      <p className="text-sm sm:text-sm md:text-3xl text-center mb-6 text-color-primary animate__animated animate__fadeIn animate__delay-1s">
        Oops! Sepertinya halaman yang kamu cari tidak ada atau sudah dihapus.
      </p>
      <Link href="/">
        <button className="bg-color-accent text-color-dark py-3 px-8 sm:px-10 rounded-lg shadow-lg hover:scale-105 hover:bg-color-accent-dark transition-all duration-300 ease-in-out transform">
          Kembali ke Beranda
        </button>
      </Link>
    </div>
  );
};

export default Page;
