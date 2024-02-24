import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-3">
      <Link href="/notebookNotes">
        <div className="flex items-center card min-w-60 shadow-xl bg-[#fcac00] bg-opacity-75 border border-amber-950">
          <div className="card-body">
            <div className="card-title">Caderneta de Anotações</div>
          </div>
        </div>
      </Link>
      <Link href="/cases">
        <div className="flex items-center card min-w-60 shadow-xl bg-[#fcac00] bg-opacity-75 border border-amber-950">
          <div className="card-body">
            <div className="card-title">Casos</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
