import Image from "next/image";
import Clue from "./components/Clue";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col p-2">
      <div className="flex justify-center text-3xl font-semibold mb-5">
        Caderneta Sherlock Holmes
      </div>
      <label className="form-control">
        <div className="text-xl mb-1">Anotações Gerais</div>
        <textarea
          className="textarea textarea-bordered w-full h-32 bg-white bg-opacity-25 text-lg"
          placeholder="Escreva suas anotações gerais..."
        ></textarea>
      </label>

      <div className="flex justify-center text-2xl font-semibold rounded-md bg-yellow-500 bg-opacity-35 border border-amber-950 mt-5 mb-3">
        Pistas
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-4 text-lg">
          <Clue clue="Farmácia" />
          <Clue clue="Parque" />
        </div>
        <div className="flex gap-4 text-lg">
          <Clue clue="Banco" />
          <Clue clue="Teatro" />
        </div>
      </div>
    </div>
  );
}
