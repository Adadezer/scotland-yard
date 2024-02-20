import React from "react";

function Annotation({ annotation }: { annotation: string }) {
  return (
    <div className="flex flex-col w-full">
      <h3>{annotation}</h3>
      <textarea className="textarea textarea-bordered h-32 w-full bg-white bg-opacity-20 text-lg"></textarea>
    </div>
  );
}

export default Annotation;
