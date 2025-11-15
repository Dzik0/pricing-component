import type { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <h2 className="text-my-text-grayish-blue text-sm font-semibold uppercase">
      {children}
    </h2>
  );
}
