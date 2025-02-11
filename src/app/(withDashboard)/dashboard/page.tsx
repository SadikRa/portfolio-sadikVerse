import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className="text-gray-800 bg-white dark:bg-slate-900 dark:text-white">
      {session?.user ? (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1>logged in user email: {session?.user?.email}</h1>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardPage;
