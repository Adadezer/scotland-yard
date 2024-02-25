import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="navbar bg-[#fcac00] opacity-75 shadow-lg shadow-amber-950 mb-4">
      <Link href={`/`} className="flex-1 font-bold">
        <Image
          src={"/logo.png"}
          width={50}
          height={50}
          alt="logo scotland yard"
        />
      </Link>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold gap-3">
          <Link
            href={`/notebookNotes`}
            className="hover:bg-amber-950 rounded-md p-2 opacity-90"
          >
            <li>Anotações</li>
          </Link>
          <Link
            href={`/cases`}
            className="hover:bg-amber-950 rounded-md p-2 opacity-90"
          >
            <li>Casos</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
