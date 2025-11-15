import type { ReactNode } from "react";

type PerksContainerProps = {
  children: ReactNode;
};

export default function PerksContainer({ children }: PerksContainerProps) {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
}
