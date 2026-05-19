import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";
import { getToken } from "next-auth/jwt";

const ADMIN_GITHUB_ID = process.env.ADMIN_GITHUB_ID;

export async function POST(request: NextRequest) {
  // ✅ Protect route
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token || token.githubId !== ADMIN_GITHUB_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    const newProduct = await writeClient.create({
      _type: "product",
      name: body.name,
      shortName: body.shortName,
      slug: { _type: "slug", current: body.slug },
      category: { _type: "reference", _ref: body.categoryId },
      price: Number(body.price),
      isNew: body.isNew,
      description: body.description,
      features: body.features,
      inTheBox: body.inTheBox,
      mainImage: body.mainImage,
      gallery: body.gallery,
    });

    return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
  } catch (error) {
    console.error("❌ Create product error:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}