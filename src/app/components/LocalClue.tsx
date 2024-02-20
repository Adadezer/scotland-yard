import React from "react";

function LocalClue({ localClue }: { localClue: string }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <h3>{localClue}</h3>
      </div>
      <textarea
        className="textarea textarea-bordered h-32 w-full bg-white bg-opacity-20 text-lg"
        placeholder="Anote as pistas encontradas"
      ></textarea>
    </div>
  );
}

export default LocalClue;
