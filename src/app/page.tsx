import Image from "next/image";
import ClueSet from "./components/ClueSet";

export default function Home() {
  const arrayOflocalsClues = [
    ["Farmácia", "Parque"],
    ["Banco", "Teatro"],
    ["Docas", "Bar"],
    ["Hotel", "Livraria"],
    ["Chaveiro", "Penhores"],
    ["Museu", "Carruagens"],
    ["Charutaria", "Scotland Yard"],
  ];

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-center text-3xl font-semibold mb-5">
        Caderneta Sherlock Holmes
      </div>
      <label className="form-control">
        <div className="text-xl mb-1">Anotações Gerais</div>
        <textarea
          className="textarea textarea-bordered w-full h-32 bg-white bg-opacity-20 text-lg"
          placeholder="Escreva suas anotações gerais..."
        ></textarea>
      </label>

      <div className="flex justify-center text-2xl font-semibold rounded-md bg-yellow-500 bg-opacity-35 border border-amber-950 mt-5 mb-3">
        Pistas
      </div>

      {arrayOflocalsClues.map((arraylocals, index) => (
        <ClueSet key={index} arraylocals={arraylocals} />
      ))}
    </div>
  );
}
