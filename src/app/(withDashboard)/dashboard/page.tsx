/* eslint-disable @next/next/no-img-element */
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 dark:bg-slate-900 dark:text-white px-6">
      {session?.user ? (
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center w-full max-w-lg">
          {session?.user?.image && (
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-md"
              />
            </div>
          )}

          <h1 className="text-3xl font-semibold">
            Welcome, {session.user.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Logged in as:{" "}
            <span className="font-medium">{session.user.email}</span>
          </p>
        </div>
      ) : (
        <p className="text-xl text-red-500">You are not logged in.</p>
      )}
    </div>
  );
};

export default DashboardPage;
