import React from "react";
import LocalClue from "./Annotation";
import Annotation from "./Annotation";

function NotesSet({ arrayNotes }: { arrayNotes: string[] }) {
  return (
    <div className="flex gap-4 text-lg">
      {arrayNotes.map((annotation, index) => (
        <Annotation key={index} annotation={annotation} />
      ))}
    </div>
  );
}

export default NotesSet;
