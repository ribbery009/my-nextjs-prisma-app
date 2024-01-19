"use client";

import { User } from "@prisma/client";
import { fetchUser } from "../services";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => fetchUser(),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-3">Users</h1>
      <Link
        href="/products"
        className="mb-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Products
      </Link>
      <ul>
        {data?.users?.map((user: User) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
