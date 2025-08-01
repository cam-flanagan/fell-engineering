// src/components/ButtonLink.tsx
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors hover:border-yellow-200/40 hover:bg-yellow-200/10 hover:text-yellow-300 focus:ring-2",
        className,
      )}
      {...restProps}
    />
  );
}