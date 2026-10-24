const STORAGE_KEY = "sm-faculty-session";

export type PortalSession = {
  email: string;
};

export function getSession(): PortalSession | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PortalSession;
    if (!parsed?.email) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setSession(email: string) {
  if (typeof window === "undefined") return;
  const session: PortalSession = { email: email.trim().toLowerCase() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function isAuthenticated() {
  return Boolean(getSession()?.email);
}
