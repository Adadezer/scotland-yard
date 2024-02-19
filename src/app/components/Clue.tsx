import React from "react";

interface LocalClueProps {
  clue: string;
}

function Clue({ clue }: LocalClueProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <h3>{clue}</h3>
      </div>
      <textarea
        className="textarea textarea-bordered h-32 w-full bg-white bg-opacity-20 text-lg"
        placeholder="Anote as pistas encontradas"
      ></textarea>
    </div>
  );
}

export default Clue;
