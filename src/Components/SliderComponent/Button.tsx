import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-my-text-cta-background text-my-cta-text rounded-3xl px-12 py-3 text-sm font-semibold">
      {children}
    </button>
  );
}
