import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();
  console.log(user);

  return (
    <div className="text-color-primary">
      <h3>dashboard</h3>
      <h5>Welcome, {user.name}</h5>
      <Image src={user.image} alt={user.name} width={250} height={250} />
    </div>
  );
};

export default Page;
