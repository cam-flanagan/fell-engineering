import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import FellLogo from "@/app/assets/FellEngineeringTextLogo.svg";
import Bounded from "@/components/Bounded";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-32 text-center font-medium md-py-40"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter"/>
      <div className="glass-container rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-4 md-rounded-xl">
        <FellLogo className="w-40 h-40 fill-white" />
      </div>
      <div className="text-balance mt-8 max-w-xl text-5xl">
        <PrismicText field={slice.primary.heading} />
      </div>
    </Bounded>
  );
};

export default CallToAction;
