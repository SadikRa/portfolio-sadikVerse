import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user ? (
        <>
          <h1 className="text-4xl mt-24 text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1>logged in user email: {session?.user?.email}</h1>

          <Image
            src={session?.user?.image}
            alt="github img"
            width={300}
            height={300}
            className="mx-auto rounded-full"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default HomePage;
