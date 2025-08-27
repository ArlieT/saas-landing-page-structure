import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/const/config";

const Navbar = () => {
  return (
    <header
      className="backdrop-blur-md fixed grid place-items-center mb-10 h-14 lg:h-16 top-0 w-screen md:top-8 md:inset-x-0 md:w-[95%] mx-auto md:rounded-xl z-50 px-4 bg-gradient-to-r from-[var(--foreground)]/70 to-[var(--foreground)]/50 shadow-md text-sm md:text-base
    border-b border-white/20"
    >
      <nav
        aria-label="navbar"
        title="navbar"
        className="w-full flex items-center justify-between"
      >
        {/* LOGO */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/vercel.svg"} alt="vercel" width={24} height={24} />
        </Link>

        {/* NAV */}
        <div className="text-white hidden  md:flex gap-x-2 md:gap-x-16">
          {siteConfig.navbar.links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className="hover:text-gray-300 transition"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href={"/"} className="btn-primary py-2 bg-hero">
            Get Started
          </Link>
        </div>

        {/* hamburger menu */}
        <div>
          <button type="button" className="md:hidden">
            <span className="sr-only">Open menu</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-labelledby="menuIconTitle"
            >
              <title id="menuIconTitle">Menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
