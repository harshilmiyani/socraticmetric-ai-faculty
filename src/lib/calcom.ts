/**
 * Build a direct Cal.com event URL with prefilled booking fields.
 * Example event: https://cal.com/socraticmetric/30min
 * @see https://cal.com/help/booking/prefill-booking-form
 */
export function buildCalcomDirectBookingUrl(fields: {
  fullName: string;
  email: string;
  /** Optional extra context shown in booking notes when supported */
  notes?: string;
}): string | null {
  const raw = process.env.NEXT_PUBLIC_CALCOM_BOOKING_URL?.trim();
  if (!raw) return null;

  const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`);

  if (fields.fullName) url.searchParams.set("name", fields.fullName);
  if (fields.email) url.searchParams.set("email", fields.email);
  if (fields.notes?.trim()) url.searchParams.set("notes", fields.notes.trim());

  return url.toString();
}

/**
 * Build Cal.com headless routing URL.
 * Field names must match identifiers in your Cal.com Routing Form.
 * @see https://cal.com/help/routing/headless-routing
 */
export function buildCalcomRoutingUrl(fields: Record<string, string>): string | null {
  const routerBase = process.env.NEXT_PUBLIC_CALCOM_ROUTER_BASE_URL?.replace(/\/$/, "");
  const formId = process.env.NEXT_PUBLIC_CALCOM_ROUTING_FORM_ID?.trim();

  if (!routerBase || !formId) {
    return null;
  }

  const url = new URL(`${routerBase}/router`);
  url.searchParams.set("form", formId);

  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      url.searchParams.set(key, String(value).trim());
    }
  }

  return url.toString();
}

/** Split "Jane Doe" → firstName / lastName for Cal.com fields that expect them */
export function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const space = trimmed.indexOf(" ");
  if (space === -1) {
    return { firstName: trimmed, lastName: "" };
  }
  return {
    firstName: trimmed.slice(0, space).trim(),
    lastName: trimmed.slice(space + 1).trim(),
  };
}
