import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies: FC<CaseStudiesProps> = async ({ slice }) => {

  const client = createClient();

  const caseStudies = await Promise.all(
    slice.primary.casestudies.map( async (item) => {
      if (isFilled.contentRelationship(item.case_study)) {
        return await client.getByID<Content.CaseStudyDocument>(
          item.case_study.id,
        );
      }
    }),
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

    <PrismicRichText field={slice.primary.heading} />
    <PrismicRichText field={slice.primary.body} />

    <div className="mt-20 grid gap-16">
    {caseStudies.map(
          (caseStudy, index) =>
            caseStudy && (
              <div key={caseStudy.id}>
                <h3 className="">
                  <PrismicRichText field={caseStudy.data.company} />
                </h3>
              </div>
            ))}
    </div>


    </section>
  );
};

export default CaseStudies;
