import { NextResponse } from "next/server";
import { prisma } from "../../../prismaInstance";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      cacheStrategy: { ttl: 60 },
    });
    return NextResponse.json({ status: 200, users });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
}
