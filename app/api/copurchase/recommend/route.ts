import { NextResponse } from "next/server";
import { getCartRecommendations } from "@/lib/copurchase-store";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const cartIds = Array.isArray(body?.cartIds) ? body.cartIds : [];
  const limit = Number(body?.limit ?? 8);

  const recs = getCartRecommendations(cartIds.map(Number), limit);
  return NextResponse.json({ recs });
}
