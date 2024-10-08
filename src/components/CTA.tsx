import ShimmerButton from "@/components/ui/shimmer-button";
import waitlist from "@zootools/waitlist-js";
const clickPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  // Pass your waitlist ID
  waitlist.openPopup("MZ8JLE6T9uHC0V5O6LLP");
};
export function CTA() {
  return (
    <div className="z-10 flex min-h-64  items-center justify-center">
      <ShimmerButton onClick={clickPopup} className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Join WaitList
        </span>
      </ShimmerButton>
    </div>
  );
}
