import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";
import clsx from "clsx";
import { PiArrowsClockwise, PiGear, PiPlug } from "react-icons/pi";

const icons = {
  gear: <PiGear />,
  cycle: <PiArrowsClockwise />,
  electric: <PiPlug />,
};
/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase: FC<ShowcaseProps> = ({ slice }) => {
  return (
    <div id="showcase">
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full
       bg-blue-400/20 blur-3xl filter"/>
      <PrismicRichText field={slice.primary.heading} 
      components={{
        heading2: ({ children }) => <h2 className="text-balance text-center -text-5x font-medium
        md:text-7xl">{children}</h2>
      }}/>
      <div className="grid mt-16 items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">
        <div>
          <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
           {slice.primary.icon && icons[slice.primary.icon]}
          </div>
          <div className="mt-6 text-2xl font-normal">
            <PrismicRichText field={slice.primary.subheading} />
          </div>
          <div className="mt-4 max-w-xl prose prose-invert">
          <PrismicRichText field={slice.primary.body} />
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center items-center bg-black text-white rounded-lg shadow-2xl lg:col-span-2 lg:pt-0 p-8 aspect-square w-full max-w-xl mx-auto",
            slice.variation === "reverse" ? "lg:order-1 lg:translate-x-[25%]" :
            "lg:-order-1 lg:translate-x-[-25%]"
          )}
        >
          <form className="w-full max-w-sm space-y-4">
            <div>
              <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="request" className="block text-lg font-semibold mb-2">Request Description</label>
              <textarea
                id="request"
                rows={6}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </div>
            <ButtonLink field={slice.primary.buttonlink} className="mt-6">
              {slice.primary.buttontext || "Submit"}
            </ButtonLink>
          </form>
        </div>
      </div>

    </Bounded>
    </div>
  );
};

export default Showcase;
