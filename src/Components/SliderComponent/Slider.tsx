export default function Slider() {
  return (
    <div className="relative w-full border">
      <label htmlFor="slider">
        <input type="range" name="slider" id="slider" className="z-3" />
      </label>
      <div className="absolute top-1/2 z-1 h-3 w-[50%] -translate-y-1/2 bg-green-900"></div>
    </div>
  );
}
