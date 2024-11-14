import { cn } from "@/lib/utils";
export const SectionWrapper = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-[1400px] mx-auto", className)}>{children}</div>
  );
};