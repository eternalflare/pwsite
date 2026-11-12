import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Página Inicial do Sistema
        </h1>
        <p className="mt-2 text-gray-600">
          Bem-vindo ao Sistema de Gerenciamento de Alunos
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/alunos/cadastro"
            className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
          >
            Cadastrar Aluno
          </Link>

          <Link
            href="/alunos/consulta"
            className="rounded-lg border border-indigo-600 px-5 py-3 font-medium text-indigo-600 transition hover:bg-indigo-50"
          >
            Consultar Aluno
          </Link>
        </div>
      </div>
    </main>
  );
}