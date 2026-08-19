import { cn } from "@/lib/utils";

export function Cover({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-lg bg-[#EAF1FE] px-2 py-2 text-[#3370F7] transition-colors duration-200 hover:bg-[#F58022]/10 hover:text-[#F58022]",
        className
      )}
    >
      {children}
    </span>
  );
}
