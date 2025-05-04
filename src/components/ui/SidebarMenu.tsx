"use client";

import Link from "next/link";
import { FolderIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface SidebarMenuProps {
  navLinks: string[];
  onClose: () => void;
}

const SidebarMenu = ({ navLinks, onClose }: SidebarMenuProps) => {
  return (
    <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose}>
      <div
        className="fixed top-0 right-0 w-72 lg:w-80 h-full bg-white shadow-lg p-6 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {navLinks.map((href, i) => {
          const parts = href.split("/").filter(Boolean);

          return (
            <div key={i} className="flex items-center gap-2 pl-4 mb-1 w-full">
              <FolderIcon className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <Link
                href={href}
                onClick={onClose}
                title={href}
                className="text-gray-800 hover:text-indigo-600 text-sm lg:text-md truncate w-full"
              >
                {parts.join(" / ")}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarMenu;
