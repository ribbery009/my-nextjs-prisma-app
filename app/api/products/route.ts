import { NextResponse } from "next/server";
import { prisma } from "../../../prismaInstance";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      cacheStrategy: { ttl: 60 },
    });
    return NextResponse.json({ status: 200, products });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
}
