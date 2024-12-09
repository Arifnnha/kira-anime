import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link
          className="flex items-center font-bold text-xl md:text-3xl sm:text-2xl"
          href="/"
        >
          KiraAnime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
