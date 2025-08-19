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
    <div id="bento">
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
          const imageUrl = item.image?.url;
          const imageAlt = item.image?.alt || '';

          return (
            <div
              className={clsx(
                "glass-container rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-6 transition-all duration-300",
                isExpanded ? "md:col-span-3 lg:col-span-3 w-full" : "w-full"
              )}
              key={itemKey}
            >
              {/* Header row: title only when expanded, title + button when collapsed */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl">
                  <PrismicText field={item.title} />
                </h3>
                {!isExpanded && (
                  <Button onClick={() => toggleExpanded(itemKey)}>
                    {"Expand"}
                  </Button>
                )}
              </div>

              {isExpanded ? (
                <>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1 relative text-balance text-slate-300 transition-all duration-300">
                      <PrismicRichText field={item.body} />
                    </div>
                    {imageUrl && (
                      <div className="flex-shrink-0 w-full md:w-64 lg:w-80 flex justify-center items-start">
                        <img
                          src={imageUrl}
                          alt={imageAlt}
                          className="rounded-lg object-cover w-full h-auto max-h-64 shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                  <div className="mt-8 flex justify-center w-full">
                    <Button onClick={() => toggleExpanded(itemKey)}>
                      Collapse
                    </Button>
                  </div>
                </>
              ) : (
                <div className={clsx(
                  "relative text-balance text-slate-300 transition-all duration-300",
                  "overflow-hidden max-h-20"
                )}>
                  <PrismicRichText field={item.body} />
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Bounded>
    </div>
  );
};

export default Bento;
