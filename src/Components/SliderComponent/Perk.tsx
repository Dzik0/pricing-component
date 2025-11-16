import type { ReactNode } from "react";
import check from "/icon-check.svg";

type PerkProps = {
  children: ReactNode;
};

export default function Perk({ children }: PerkProps) {
  return (
    <div className="flex items-center justify-center gap-4 md:justify-start">
      <div>
        <img src={check} alt="" />
      </div>
      <p className="text-my-text-grayish-blue text-sm">{children}</p>
    </div>
  );
}
