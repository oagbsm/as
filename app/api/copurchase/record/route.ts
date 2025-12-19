import { NextResponse } from "next/server";
import { recordCoPurchase } from "@/lib/copurchase-store";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const productIds = Array.isArray(body?.productIds) ? body.productIds : [];
  recordCoPurchase(productIds.map(Number));
  return NextResponse.json({ ok: true });
}
