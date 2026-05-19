import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";
import { getToken } from "next-auth/jwt";

const ADMIN_GITHUB_ID = process.env.ADMIN_GITHUB_ID;

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // ✅ Protect route
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token || token.githubId !== ADMIN_GITHUB_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id } = params;

    const updatedProduct = await writeClient
      .patch(id)
      .set({
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
      })
      .commit();

    return NextResponse.json({ success: true, data: updatedProduct }, { status: 200 });
  } catch (error) {
    console.error("❌ Update product error:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // ✅ Protect route
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token || token.githubId !== ADMIN_GITHUB_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = params;
    await writeClient.delete(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Delete product error:", error);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}