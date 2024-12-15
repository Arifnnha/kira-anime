import InputSearch from "./InputSearch";
import Brand from "./Brand";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Brand />
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
