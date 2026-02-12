"use client";

import Link from "next/link";
import { Header } from "@/components/ui/header";
import { ChevronRight, Package, Clock, CheckCircle, XCircle } from "lucide-react";

export default function MyOrdersPage() {
    const orders = [
        {
            id: "PED-12345",
            date: "12 de Outubro, 2024",
            status: "Entregue",
            statusColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            icon: CheckCircle,
            total: "R$ 150,00",
            items: ["Kit Sabonetes Artesanais", "Vela Aromática"],
        },
        {
            id: "PED-12346",
            date: "05 de Outubro, 2024",
            status: "Em Trânsito",
            statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
            icon: Package,
            total: "R$ 85,50",
            items: ["Hidratante Corporal Bio"],
        },
        {
            id: "PED-12347",
            date: "28 de Setembro, 2024",
            status: "Pendente",
            statusColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
            icon: Clock,
            total: "R$ 210,00",
            items: ["Kit Spa Completo", "Óleo Essencial Lavanda"],
        },
    ];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
            <Header />
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-10 py-6 md:py-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm font-medium text-slate-500 mb-8 gap-2">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="size-4" />
                    <span className="text-slate-900 dark:text-white font-semibold">
                        Meus Pedidos
                    </span>
                </nav>

                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
                    Meus Pedidos
                </h1>

                <div className="flex flex-col gap-6">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-6 md:items-center justify-between"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {order.id}
                                    </h2>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${order.statusColor}`}
                                    >
                                        <order.icon className="size-3" />
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                                    Realizado em {order.date}
                                </p>
                                <div className="text-sm text-slate-600 dark:text-slate-300">
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        Itens:
                                    </span>{" "}
                                    {order.items.join(", ")}
                                </div>
                            </div>

                            <div className="flex flex-col md:items-end gap-4 min-w-[150px]">
                                <div className="text-lg font-bold text-slate-900 dark:text-white">
                                    {order.total}
                                </div>
                                <Link
                                    href={`/meus-pedidos/${order.id}`}
                                    className="w-full md:w-auto bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm"
                                >
                                    Ver Detalhes
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <footer className="mt-auto py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="px-4 md:px-10 max-w-[1440px] mx-auto text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>© 2024 SeWAI. Plataforma para microempreendedores.</p>
                </div>
            </footer>
        </div>
    );
}
