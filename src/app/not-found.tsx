import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | SocraticMetric Educator Portal",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f8fafc] px-6 py-16 text-[#0f172a]">
      <div className="max-w-md w-full bg-white border border-[#e2e8f0] rounded-2xl p-8 text-center shadow-lg shadow-slate-200/50">
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 text-blue-600 font-bold text-sm">
          404
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-[#0f172a] mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-[#64748b] leading-relaxed mb-6">
          The page or resource you are looking for does not exist in the Educator Portal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
          >
            ← Back to Courses
          </Link>
          <Link
            href="/assignments"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
          >
            View Assignments
          </Link>
        </div>
      </div>
    </div>
  );
}