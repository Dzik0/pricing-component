import type { ReactNode } from "react";

type SliderContainerProps = {
  children: ReactNode;
};

export default function SliderContainer({ children }: SliderContainerProps) {
  return (
    <div className="shadow-myShadow flex flex-col items-center gap-8 rounded-md bg-white px-5 py-8">
      {children}
    </div>
  );
}
