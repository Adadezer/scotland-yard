import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col p-2">
      <div className="flex justify-center text-2xl font-semibold mb-3">
        Caderneta Sherlock Holmes
      </div>
      <label className="form-control">
        <div className="text-lg mb-1">Anotações Gerais</div>
        <textarea
          className="textarea textarea-bordered h-24 bg-neutral-50 bg-opacity-30"
          placeholder="Escreva suas anotações gerais..."
        ></textarea>
      </label>
    </div>
  );
}
