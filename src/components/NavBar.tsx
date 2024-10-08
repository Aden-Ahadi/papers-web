import { HStack } from "@chakra-ui/react";

import SparklesText from "./ui/sparkles-text";
import ShimmerButton from "./ui/shimmer-button";
import waitlist from "@zootools/waitlist-js";

const clickPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  // Pass your waitlist ID
  waitlist.openPopup("MZ8JLE6T9uHC0V5O6LLP");
};

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <SparklesText text="PAPERS" />
        <ShimmerButton onClick={clickPopup} className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-small leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
            Join WaitList
          </span>
        </ShimmerButton>
      </HStack>

      <hr />
    </>
  );
};

export default NavBar;
