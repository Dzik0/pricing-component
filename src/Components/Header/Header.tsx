import bgPattern from "/bg-pattern.svg";
import circle from "/pattern-circles.svg";

export default function Header() {
  return (
    <>
      {" "}
      <div className="absolute top-0 right-0 left-0 -z-2 h-[40%]">
        <img src={bgPattern} alt="" className="h-full w-full" />
      </div>
      <div className="absolute top-10 left-1/2 -z-1 -translate-x-1/2">
        <img src={circle} alt="" />
      </div>
      <div className="z-2 mb-20 flex flex-col gap-2 text-center">
        <h1 className="text-xl font-bold">Simple, traffic-based pricing</h1>
        <p className="text-my-text-grayish-blue text-sm font-semibold">
          Sign-up for our 30-day trail.
        </p>
        <p className="text-my-text-grayish-blue text-sm font-semibold">
          No credit card required.
        </p>
      </div>
    </>
  );
}
