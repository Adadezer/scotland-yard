"use client";

import listCases from "@/helpers/listCases";
import React from "react";
import { usePathname } from "next/navigation";

function Cases() {
  const pathname = usePathname();

  const selectedCase = listCases.filter(
    (cases) => cases.case === pathname.substring(14)
  );

  return (
    <div>
      {selectedCase.map((cases, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#006fca] via-[#399ef1] to-[#006fca] text-white min-h-screen px-4 py-2"
        >
          <div className="flex justify-center text-xl font-bold mb-2">
            {cases.title}
          </div>
          <div className="description-container text-lg font-medium">
            {cases.description}
          </div>
          <div className="description-container text-lg font-semibold">
            {cases.goal}
          </div>
        </div>
      ))}
      <style jsx>{`
        .description-container {
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}

export default Cases;
