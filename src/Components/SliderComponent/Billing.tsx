import { useContext } from "react";
import { SliderContext } from "./SliderComponent";
import { motion } from "motion/react";
import clsx from "clsx";

export default function Billing() {
  const sliderContext = useContext(SliderContext);

  if (!sliderContext) {
    throw new Error("This component needs context provider!");
  }

  const { changeBillingType, billingType } = sliderContext;

  return (
    <div className="flex items-center gap-2 text-xs">
      <p
        className={clsx(
          ` ${billingType === 1 ? "text-my-slider-background" : "text-my-text-grayish-blue"}`,
        )}
      >
        Monthly Billing
      </p>
      <div
        className="bg-my-toggle-background flex h-6 w-11 cursor-pointer items-center rounded-2xl p-1"
        onClick={changeBillingType}
      >
        <motion.div
          animate={{ x: billingType === 1 ? 0 : 20 }}
          className="h-4 w-4 rounded-[50%] bg-white"
        ></motion.div>
      </div>
      <div className="relative">
        <p
          className={clsx(
            ` ${billingType === 2 ? "text-my-slider-background" : "text-my-text-grayish-blue"}`,
          )}
        >
          Yearly Billing
        </p>
        <p className="bg-my-discount-background text-my-discount-text absolute top-1/2 -right-10 -translate-y-1/2 rounded-2xl px-[5px] text-[10px] font-bold">
          -25%
        </p>
      </div>
    </div>
  );
}
