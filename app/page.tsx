import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-3">Pages: </h1>

      {/* Navigációs gombok */}
      <div className="mb-4">
        <Link
          href="/products"
          className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Products
        </Link>
        <Link
          href="/users"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
        >
          Users
        </Link>
      </div>
    </div>
  );
}
