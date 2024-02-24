"use client";

import React from "react";
import Link from "next/link";
import listCases from "@/helpers/listCases";

function Cases() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-3 bg-gradient-to-br from-[#006fca] via-[#399ef1] to-[#006fca] text-white">
      <div className="flex text-2xl text-center mb-4 font-semibold">
        Escolha um caso para ser resolvido!
      </div>
      {listCases.map((cases) => (
        <Link href={`/selectedCase/${cases.case}`} key={cases.case}>
          <div className="flex items-center card min-w-60 shadow-xl bg-[#fcac00] bg-opacity-75 border border-amber-950">
            <div className="card-body">
              <div className="card-title">{cases.case}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cases;
