"use client";

import { useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/WordMark";
import { MdMenu } from "react-icons/md";

type NavBarProps = {
  settings: Content.SettingsDocument;
};

export default function NavBar({ settings }: NavBarProps) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="px-4 py-4 md:px-6 md-:py-6" aria-label="Main">
        <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
          <div className="flex items-center justify-between">
          
            <Link href="/">
              <WordMark />
              <span className="sr-only">Fell Engineering Home Page</span>
            </Link>

            <button type="button" className="block p-2 text-3xl text-white md:hidden"
              aria-expanded={open}
              onClick={() => setOpen(!open)}>
              <MdMenu />
              <span className="sr-only">Open Menu</span>
            </button>

          </div>

          {/* Mobile Navigation */}

          {/* Desktop Navigation */}

          <ul className="flex gap-6">
            {settings.data.navigation.map((item) => {
                if(item.cta_button){
                    return (
                        <li key={item.label}>
                        <ButtonLink field={item.link}>{item.label}</ButtonLink>
                        </li>
                    );
                }
                return (
                    <li key={item.label}>
                    <PrismicNextLink
                      field={item.link}
                      className="inline-flex min-h-11 items-center"
                    >
                      {item.label}
                    </PrismicNextLink>
                  </li>
                )
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
