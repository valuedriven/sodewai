"use client";

import Link from "next/link";
import { Store, Search, ShoppingCart } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-background-dark/95">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white mr-4"
                >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                        <Store className="size-5" />
                    </div>
                    <span>SeWAI</span>
                </Link>
                {/* Search Bar */}
                <div className="hidden flex-1 md:flex max-w-xl mx-auto">
                    <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <Search className="size-5" />
                        </div>
                        <input
                            className="block w-full rounded-lg border-0 bg-slate-100 py-2 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:bg-white dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 sm:text-sm sm:leading-6"
                            placeholder="O que você está procurando?"
                            type="text"
                        />
                    </div>
                </div>
                {/* Mobile Search Icon (visible only on small screens) */}
                <button className="md:hidden ml-auto p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                    <Search className="size-6" />
                </button>
                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link
                        href="/carrinho"
                        className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
                    >
                        <ShoppingCart className="size-6" />
                        <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-background-dark">
                            2
                        </span>
                    </Link>
                    <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                    <Link
                        href="/login"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                    >
                        <span>Entrar</span>
                    </Link>
                    <Link
                        href="/register"
                        className="hidden sm:flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <span>Cadastrar</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
