import Navbar from "@/components/Navbar";
import { getCurrentUser } from "@/modules/auth/helpers";
import Link from "next/link";

export const metadata = {
  title: "Giveaways",
  description: "A battle tested giveaway bot",
};

function insertCommas(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Home() {
  const stats = [
    {
      title: "Giveaways Held",
      count: 300,
    },
    {
      title: "Servers",
      count: 3000,
    },
    {
      title: "Entries",
      count: 123456789,
    },
    {
      title: "Winners",
      count: 12345,
    },
  ];

  const statsElements = stats.map((stat) => {
    return (
      <div
        key={stat.title}
        className="flex justify-center flex-col border p-4 md:mx-3 mx-0 my-3 md:my-0 rounded border-gray-300 hover:border-gray-500 transition duration-300 ease-in-out basis-1/2"
      >
        <div className="font-medium text-2xl text-center">
          {insertCommas(stat.count)}
        </div>
        <div className="block text-center text-gray-500">{stat.title}</div>
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <div className="h-full">
        <div className="flex flex-col justify-center">
          <div className="mt-3">
            <h1 className="text-6xl text-center">Giveaways</h1>
            <p className="text-center text-xl mt-3">
              A battle tested and highly scalable giveaway bot
            </p>
            <div className="flex justify-center mt-4 gap-x-4">
              <Link
                href="/add"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Add Giveaways to Your Server
              </Link>
              <Link
                href="/manage"
                className="bg-gray-400 hover:bg-gray-700 py-2 px-4 text-white rounded"
              >
                Manage Giveaways on Your Server
              </Link>
            </div>
            <div className="flex justify-center mt-6 md:flex-row flex-col items-center">
              {statsElements}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
