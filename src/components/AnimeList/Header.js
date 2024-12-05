import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex items-center justify-between">
      <h1 className="md:text-xl sm:text-sm text-color-primary font-bold">
        {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          className="md:text-xl sm:text-sm underline text-color-primary hover:text-color-accent transition-all"
          href={linkHref}
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
