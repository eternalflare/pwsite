"use client";

import Link from "next/link";
import { pb } from "@/lib/pocketbase";

export default function CadastroAluno() {

    async function salvar(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const dados = new FormData(form);
        await pb.collection("tb_aluno").create({
            nome: dados.get("nome"),
            idade: dados.get("idade"),
            email: dados.get("email"),
            telefone: dados.get("telefone"),
        });
        alert("Aluno Cadastrado");
        form.reset();
    }

    const inputClass =
        "mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-black shadow-sm focus:border-indigo-500 focus:outline-none";

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Cadastrar Aluno
                    </h1>
                    <Link
                        href="/"
                        className="text-sm font-medium text-indigo-600 hover:underline"
                    >
                        ← Voltar
                    </Link>
                </div>

                <form onSubmit={salvar} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Nome</label>
                        <input type="text" name="nome" placeholder="Nome do aluno" className={inputClass} />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Idade</label>
                        <input type="text" name="idade" placeholder="Idade do aluno" className={inputClass} />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">E-mail</label>
                        <input type="text" name="email" placeholder="E-mail do aluno" className={inputClass} />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Telefone</label>
                        <input type="text" name="telefone" placeholder="Telefone do aluno" className={inputClass} />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </main>
    );
}