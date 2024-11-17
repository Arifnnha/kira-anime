"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  return (
    <div className="position-relative">
      <input placeholder="cari anime..." className="p-2 rounded" />
      <button className="absolute top-2 end-2">
        <MagnifyingGlass size={26} />
      </button>
    </div>
  );
};

export default InputSearch;
