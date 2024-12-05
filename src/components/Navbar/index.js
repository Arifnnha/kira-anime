import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link
          className="flex items-center font-bold md:text-2xl sm:text-xl"
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
