import { useContext } from "react";
import { SliderContext } from "./SliderComponent";

export default function Slider() {
  const sliderContext = useContext(SliderContext);

  if (!sliderContext) {
    throw new Error("This component needs context provider!");
  }

  const { barLength, onChange, data } = sliderContext;

  return (
    <div className="relative w-full">
      <label htmlFor="slider">
        <div className="bg-my-empty-slider-bar absolute top-2.5 z-0 h-[0.45rem] w-full rounded-2xl"></div>
        <div
          className="bg-my-slider-background absolute top-2.5 z-0 h-[0.45rem] rounded-2xl"
          style={{ width: `${barLength}%` }}
        ></div>
        <input
          type="range"
          name="slider"
          id="slider"
          min={1}
          max={data.length}
          className="relative z-10"
          onChange={onChange}
        />
      </label>
    </div>
  );
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
