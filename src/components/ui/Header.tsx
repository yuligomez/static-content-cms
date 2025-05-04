"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface HeaderProps {
  navLinks: string[];
}

const Header = ({ navLinks }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50 h-12 lg:h-20">
      <div className="mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-light.png"
            alt="Logo"
            width={72}
            height={72}
            className="w-auto"
          />
        </Link>

        {/* Hamburger menu button */}
        <button onClick={() => setOpen(true)} className="focus:outline-none">
          <Bars3Icon className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Sidebar menu */}
      {open && (
        <SidebarMenu navLinks={navLinks} onClose={() => setOpen(false)} />
      )}
    </header>
  );
};

export default Header;
