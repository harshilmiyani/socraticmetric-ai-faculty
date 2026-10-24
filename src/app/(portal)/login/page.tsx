import type { Metadata } from "next";
import { LoginForm } from "@/components/portal/LoginForm";

export const metadata: Metadata = {
  title: "Educator Portal Login | SocraticMetric",
  description: "Sign in to the SocraticMetric Educator Portal.",
};

export default function LoginPage() {
  return <LoginForm />;
}
