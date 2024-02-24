import React from "react";
import NotesSet from "../components/NotesSet";

function NotebookNotesPage() {
  const arrayOflocalsClues = [
    ["Farmácia", "Parque"],
    ["Banco", "Teatro"],
    ["Docas", "Bar"],
    ["Hotel", "Livraria"],
    ["Chaveiro", "Penhores"],
    ["Museu", "Carruagens"],
    ["Charutaria", "Scotland Yard"],
  ];

  const arrayOfsolucions = [
    ["A", "B", "C"],
    ["D", "E", "F"],
  ];

  return (
    <div className="bg-gradient-to-br from-[#006fca] via-[#4da8f3] to-[#006fca] text-white min-h-screen px-4 py-2">
      <div className="flex flex-col p-2">
        <div className="flex justify-center text-3xl font-bold mb-5">
          Caderneta Sherlock Holmes
        </div>
        <label className="form-control font-medium">
          <div className="text-xl mb-1">Anotações Gerais</div>
          <textarea className="textarea textarea-bordered w-full h-32 bg-white bg-opacity-20 text-lg mb-10"></textarea>
        </label>

        <div className="flex justify-center text-2xl font-semibold rounded-md bg-[#fcac00] bg-opacity-75 border border-amber-950 mb-3">
          Pistas
        </div>

        {arrayOflocalsClues.map((arraylocals, index) => (
          <NotesSet key={index} arrayNotes={arraylocals} />
        ))}

        <div className="flex justify-center text-2xl font-bold rounded-md bg-[#fcac00] bg-opacity-75 border border-amber-950 mt-10 mb-3">
          Soluções
        </div>

        {arrayOfsolucions.map((arraysolucions, index) => (
          <NotesSet key={index} arrayNotes={arraysolucions} />
        ))}
      </div>
    </div>
  );
}

export default NotebookNotesPage;
