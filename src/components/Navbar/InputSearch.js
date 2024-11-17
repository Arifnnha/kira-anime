"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  return (
    <div>
      <input placeholder="cari anime..." className="p-2 rounded" />
      <button className="absolute top-6 end-5">
        <MagnifyingGlass size={26} />
      </button>
    </div>
  );
};

export default InputSearch;
