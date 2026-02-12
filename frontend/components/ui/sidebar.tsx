"use client";

import Link from "next/link";
import {
    LayoutGrid,
    Sparkles,
    TrendingUp,
    Percent,
    Shirt,
    Smartphone,
    Armchair,
    Flower,
    Gamepad2,
} from "lucide-react";

export function Sidebar() {
    return (
        <aside className="hidden w-64 shrink-0 lg:block sticky top-24">
            <nav className="flex flex-col gap-8">
                <div>
                    <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                        Descobrir
                    </h3>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary dark:bg-primary/20 dark:text-primary-300"
                            >
                                <LayoutGrid className="size-5 text-primary dark:text-primary-300" />
                                Todos os Produtos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                            >
                                <Sparkles className="size-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                                Lançamentos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                            >
                                <TrendingUp className="size-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                                Mais Vendidos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                            >
                                <Percent className="size-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                                Promoções
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                        Categorias
                    </h3>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                            >
                                <Shirt className="size-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                                Roupas & Acessórios
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                            >
                                <Smartphone className="size-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                                Eletrônicos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                            >
                                <Armchair className="size-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                                Casa & Decoração
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                            >
                                <Flower className="size-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                                Beleza & Saúde
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                            >
                                <Gamepad2 className="size-5 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                                Brinquedos
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Promo Banner in Sidebar */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 p-6 text-white shadow-lg">
                    <div className="relative z-10">
                        <p className="mb-2 text-xs font-bold uppercase text-blue-100">
                            Oferta Especial
                        </p>
                        <h4 className="mb-4 text-lg font-bold leading-tight">
                            Kit Iniciante com 20% OFF
                        </h4>
                        <button className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-primary shadow-sm hover:bg-blue-50">
                            Ver Oferta
                        </button>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute -right-4 -top-4 size-24 rounded-full bg-white/10 blur-xl"></div>
                    <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-white/10 blur-xl"></div>
                </div>
            </nav>
        </aside>
    );
}
