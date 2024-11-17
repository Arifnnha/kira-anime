import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex items-center justify-between">
      <h1 className="md:text-xl sm:text-sm font-bold">{title}</h1>
      <Link
        className="md:text-xl sm:text-sm underline hover:text-indigo-500 transition-all"
        href={linkHref}
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
