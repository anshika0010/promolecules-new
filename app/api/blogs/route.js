import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? "1";

  const res = await fetch(
    `https://magnus.cost2costsupplement.com/api/v1/blogs?page=${page}`,
    {
      headers: {
        "x-tenant": "promolecules.com",
        "Content-Type": "application/json",
      },
      next: { revalidate: 600 },
    }
  );

  const json = await res.json();
  return NextResponse.json(json);
}