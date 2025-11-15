export default function Billing() {
  return (
    <div className="text-my-text-grayish-blue flex items-center gap-2 text-xs">
      <p>Monthly Billing</p>
      <div className="bg-my-toggle-background flex h-6 w-11 items-center rounded-2xl p-1">
        <div className="h-4 w-4 rounded-[50%] bg-white"></div>
      </div>
      <div className="relative">
        <p>Yearly Billing</p>
        <p className="bg-my-discount-background text-my-discount-text absolute top-1/2 -right-10 -translate-y-1/2 rounded-2xl px-[5px] text-[10px] font-bold">
          -25%
        </p>
      </div>
    </div>
  );
}
