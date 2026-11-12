"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pb } from "@/lib/pocketbase";

type Aluno = {
    id: string;
    nome: string;
    idade: string;
    email: string;
    telefone: string;
}

export default function ConsultarAluno() {
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        pb.collection("tb_aluno")
            .getFullList<Aluno>({ sort: "nome", requestKey: null })
            .then(setAlunos);
    }, []);

    const filtrados = alunos.filter((a) =>
        a.nome?.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Consulta de Alunos
                    </h1>
                    <Link
                        href="/"
                        className="text-sm font-medium text-indigo-600 hover:underline"
                    >
                        ← Voltar
                    </Link>
                </div>

                <input
                    type="text"
                    placeholder="Buscar aluno por nome"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="mb-6 w-full rounded-lg border border-gray-300 p-3 text-sm text-black shadow-sm focus:border-indigo-500 focus:outline-none"
                />

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium text-gray-900">Nome</th>
                                <th className="px-4 py-3 text-left font-medium text-gray-900">Idade</th>
                                <th className="px-4 py-3 text-left font-medium text-gray-900">E-mail</th>
                                <th className="px-4 py-3 text-left font-medium text-gray-900">Telefone</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filtrados.map((a) => (
                                <tr key={a.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">{a.nome}</td>
                                    <td className="px-4 py-3 text-gray-700">{a.idade}</td>
                                    <td className="px-4 py-3 text-gray-700">{a.email}</td>
                                    <td className="px-4 py-3 text-gray-700">{a.telefone}</td>
                                </tr>
                            ))}
                            {filtrados.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                                        Nenhum aluno encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}