"use client";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Container from "@/components/Container";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#admissions", label: "Admissions" },
  { href: "#campus", label: "Campus" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-tr from-purple-500 to-indigo-500" />
            <span className="text-lg font-bold tracking-tight">JBIT College</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#admissions"
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
            >
              Apply Now
            </a>
          </nav>

          <button
            className="inline-flex items-center rounded-md p-2 hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <nav className="grid gap-2 border-t border-black/5 py-3 dark:border-white/10">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
              >
                Apply Now
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
