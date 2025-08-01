"use client";

import { FC, useState } from "react";
import { asText, Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import clsx from "clsx";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento: FC<BentoProps> = ({ slice }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemKey: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemKey)) {
      newExpanded.delete(itemKey);
    } else {
      newExpanded.add(itemKey);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} 
        components={
          {
          heading2: ({ children }) => (<h2 className="text-balance text-center text-5xl 
          font-medium md:text-7xl">{children}</h2>),

          em: ({ children }) => (<em className="bg-gradient-to-b 
             from-yellow-100 to-yellow-500 bg-clip-text 
             not-italic text-transparent">{children}</em>),

        }
      }
      />

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
        {slice.primary.bento.map((item) => {
          const itemKey = asText(item.title);
          const isExpanded = expandedItems.has(itemKey);
          
          return (
            <div 
              className={clsx(
                "glass-container rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-6 transition-all duration-300",
                isExpanded ? "md:col-span-3 lg:col-span-3 w-full" : "w-full"
              )} 
              key={itemKey}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl">
                  <PrismicText field={item.title} />
                </h3>
                
                <Button
                  onClick={() => toggleExpanded(itemKey)}
                >
                  {isExpanded ? "Collapse" : "Expand"}
                </Button>
              </div>

              <div className={clsx(
                "relative text-balance text-slate-300 transition-all duration-300",
                isExpanded ? "max-w-none" : "overflow-hidden max-h-20"
              )}>
                <PrismicRichText field={item.body} />
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
};

export default Bento;
