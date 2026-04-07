import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
  slug?: { current?: string } | string;
};

function slugFromPayload(doc: WebhookPayload): string | undefined {
  const s = doc.slug;
  if (typeof s === "string" && s.length > 0) return s;
  if (s && typeof s === "object" && typeof s.current === "string" && s.current.length > 0) {
    return s.current;
  }
  return undefined;
}

/**
 * Sanity GROQ/webhook: point URL here, method POST, include JSON body of the document.
 * Secret must match SANITY_REVALIDATE_SECRET (Sanity → Webhooks → Configure signing secret).
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret?.trim()) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET is not set" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret.trim(), true);

  if (isValidSignature !== true) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid body" }, { status: 400 });
  }

  try {
    revalidatePath("/blog");

    if (body._type === "post") {
      const slug = slugFromPayload(body);
      if (slug) {
        revalidatePath(`/blog/${slug}`);
      }
    }

    return NextResponse.json({ revalidated: true, slug: slugFromPayload(body) ?? null });
  } catch {
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 });
  }
}
