import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="flex flex-col justify-center items-center mt-8 text-color-primary">
      <h3 className="text-2xl font-bold">Welcome, {user?.name}</h3>
      <Image
        src={user?.image}
        className="rounded mt-4"
        alt={user?.name}
        width={250}
        height={250}
      />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          className="bg-color-accent text-color-dark font-bold text-xl px-4 py-2 rounded-sm"
          href="/users/dashboard/collection"
        >
          My Collection
        </Link>
        <Link
          className="bg-color-accent text-color-dark font-bold text-xl px-4 py-2 rounded-sm"
          href="/users/dashboard/comment"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
