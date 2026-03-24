import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition-all duration-300 shadow-[#4C8FD6]/20 p-6 bg-white/60 backdrop-blur-lg border border-white/60 ring-1 ring-white/50 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        <div className="h-12 w-12 rounded-lg bg-[#EAF1FE]/80 flex items-center justify-center mb-4 text-[#3370F7] group-hover/bento:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="font-sans font-bold text-[#1F2A44] mb-2 mt-2 text-lg">
          {title}
        </div>
        {description && (
          <div className="font-sans font-medium text-[#85756F] text-sm leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
