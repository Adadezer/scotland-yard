import React from "react";
import LocalClue from "./LocalClue";

function ClueSet({ arraylocals }: { arraylocals: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {arraylocals.slice(0, -1).map((localClue, index) => (
        <div key={index} className="flex gap-4 text-lg">
          <LocalClue localClue={localClue} />
          <LocalClue localClue={arraylocals[index + 1]} />
        </div>
      ))}
    </div>
  );
}

export default ClueSet;
