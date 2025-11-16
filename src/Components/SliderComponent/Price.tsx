import { useContext } from "react";
import { SliderContext } from "./SliderComponent";

export default function Price() {
  function priceFixer(price: number): string {
    return (price / 100).toFixed(2);
  }

  function handleDiscount(price: number): string {
    return ((price * 0.85) / 100).toFixed(2);
  }

  const sliderContext = useContext(SliderContext);

  if (!sliderContext) {
    throw new Error("This component needs context provider");
  }

  const { correctInfo, billingType } = sliderContext;

  const price =
    billingType === 1
      ? priceFixer(correctInfo.price)
      : handleDiscount(correctInfo.price);

  return (
    <div className="flex items-center gap-3">
      <h3 className="text-3xl font-bold">${price}</h3>
      <p className="text-my-text-grayish-blue text-sm">/ month</p>
    </div>
  );
}
