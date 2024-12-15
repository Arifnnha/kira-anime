import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="mt-4 w-full">
      <Header title={"My Collection"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-2">
        <Link
          href="/"
          className="relative border-2 border-color-accent rounded-sm"
        >
          <Image
            href=""
            width={250}
            height={250}
            alt="..."
            className="w-full"
          />
          <div className="absolute bottom-0 flex justify-center items-center bg-color-accent w-full h-16">
            <h5 className="text-center text-xl">Judul Anime</h5>
          </div>
        </Link>
        <Link
          href="/"
          className="relative border-2 border-color-accent rounded-sm"
        >
          <Image
            href=""
            width={250}
            height={250}
            alt="..."
            className="w-full"
          />
          <div className="absolute bottom-0 flex justify-center items-center bg-color-accent w-full h-16">
            <h5 className="text-center text-xl">Judul Anime</h5>
          </div>
        </Link>
        <Link
          href="/"
          className="relative border-2 border-color-accent rounded-sm"
        >
          <Image
            href=""
            width={250}
            height={250}
            alt="..."
            className="w-full"
          />
          <div className="absolute bottom-0 flex justify-center items-center bg-color-accent w-full h-16">
            <h5 className="text-center text-xl">Judul Anime</h5>
          </div>
        </Link>
        <Link
          href="/"
          className="relative border-2 border-color-accent rounded-sm"
        >
          <Image
            href=""
            width={250}
            height={250}
            alt="..."
            className="w-full"
          />
          <div className="absolute bottom-0 flex justify-center items-center bg-color-accent w-full h-16">
            <h5 className="text-center text-xl">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
