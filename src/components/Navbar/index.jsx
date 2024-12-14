import InputSearch from "./InputSearch";
import Brand from "./Brand";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Brand />
        <InputSearch />
        <Link href="/api/auth/signin" className="">
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
