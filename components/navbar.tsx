"use client";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/const/config";
import Humburger from "./hamburger-button";
import { Fragment, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <Fragment>
      <header
        className="backdrop-blur-md fixed grid place-items-center mb-10 h-14 lg:h-16 top-0 w-screen z-50 px-6 bg-gradient-to-r from-[var(--foreground)]/70 to-[var(--foreground)]/50 shadow-md text-sm md:text-base
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
          <ul className="text-white hidden lg:flex gap-x-2 md:gap-x-16">
            {siteConfig.navbar.links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-300 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href={"/"} className="btn-primary py-2 bg-hero">
              Get Started
            </Link>
          </div>

          {/* hamburger menu */}
          <Humburger isOpen={isOpen} handleToggleAction={handleToggle} />
        </nav>
      </header>
      <Menu isOpen={isOpen} />
    </Fragment>
  );
};

export default Navbar;

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute w-full h-svh top-14 z-[2000] bg-black">
      <ul className="p-4 px-6 shadow-lg space-y-4 text-white/80 my-4">
        {siteConfig.navbar.links.map((link) => {
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-base hover:text-gray-300 transition"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
