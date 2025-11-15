import type { ReactNode } from "react";

type PriceProps = {
  children: ReactNode;
};

export default function Price({ children }: PriceProps) {
  return (
    <div className="flex items-center gap-3">
      <h3 className="text-3xl font-bold">${children}</h3>
      <p className="text-my-text-grayish-blue text-sm">/ month</p>
    </div>
  );
}
