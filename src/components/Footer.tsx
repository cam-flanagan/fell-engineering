import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import FellLogo from "@/app/assets/file.svg";

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7">
      <Link href="/" className="flex items-center gap-3">
        <FellLogo className="w-16 h-16" />
        <span className="text-xl sm:text-xl md:text-2xl text-white">
          Fell Engineering
        </span>
        <span className="sr-only">Fell Engineering Home Page</span>
      </Link>
      {/* Info section: three columns, centered before navigation, responsive */}
      <div className="w-full mt-8 flex flex-col items-center">
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-slate-300">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-white">Location</h4>
            <address className="not-italic">
              4 Redstone Drive, Winsford<br />
              Cheshire, CW7 2TX
            </address>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-white">Hours</h4>
            <div>
              Monday—Friday<br />
              8am — 6pm
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2 text-white">Contact</h4>
            <a href="mailto:design@fellengineeringltd.com" className="underline">design@fellengineeringltd.com</a>
          </div>
        </div>
      </div>
      <nav aria-label="Footer" className="w-full mt-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink
                field={item.link}
                className="inline-flex min-h-11 items-center"
              >
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
