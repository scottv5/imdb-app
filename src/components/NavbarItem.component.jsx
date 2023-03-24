"use client";

import Link from "next/link";

import { useSearchParams, usePathname } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-600 font-semibold ${
          (genre && genre === param) ||
          (!genre && param === "fetchTrending" && pathname === "/")
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
      >
        <div className="text-sm p-2">{title}</div>
      </Link>
    </div>
  );
};

export default NavbarItem;
