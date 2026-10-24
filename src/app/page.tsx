import type { Metadata } from "next";
import { DashboardView } from "@/components/portal/DashboardView";

export const metadata: Metadata = {
  title: "Courses | SocraticMetric Educator Portal",
  description: "Manage oral assessment courses in the SocraticMetric Educator Portal.",
};

export default function Home() {
  return <DashboardView />;
}
