"use client";

import Image from "next/image";
import Link from "next/link";
import { Store, Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="flex-1 flex items-center justify-center p-4 sm:p-8 min-h-screen">
            {/* Login Card */}
            <div className="w-full max-w-[480px] bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                {/* Decorative Header Gradient */}
                <div className="h-2 w-full bg-primary absolute top-0 left-0"></div>
                <div className="p-8 sm:p-10">
                    {/* Header / Logo Area */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary mb-4">
                            <Store className="size-7" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Acesse sua conta
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                            Bem-vindo de volta ao SeWAI
                        </p>
                    </div>
                    {/* Login Form */}
                    <form
                        className="space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Handle login logic
                        }}
                    >
                        {/* Email Field */}
                        <div className="space-y-1.5">
                            <label
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                                htmlFor="email"
                            >
                                E-mail
                            </label>
                            <div className="relative">
                                <input
                                    className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-11 px-3 py-2 placeholder:text-slate-400"
                                    id="email"
                                    name="email"
                                    placeholder="seu@email.com"
                                    required
                                    type="email"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                    <Mail className="size-5" />
                                </div>
                            </div>
                        </div>
                        {/* Password Field */}
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label
                                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                                    htmlFor="password"
                                >
                                    Senha
                                </label>
                                <Link
                                    className="text-sm font-medium text-primary hover:text-primary-dark hover:underline transition-colors"
                                    href="#"
                                >
                                    Esqueceu a senha?
                                </Link>
                            </div>
                            <div className="relative group">
                                <input
                                    className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-11 px-3 py-2 pr-10 placeholder:text-slate-400"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    type={showPassword ? "text" : "password"}
                                />
                                <button
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none transition-colors"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="size-5" />
                                    ) : (
                                        <Eye className="size-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <button
                            className="flex w-full justify-center items-center rounded-lg bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 ease-in-out transform active:scale-[0.98]"
                            type="submit"
                        >
                            Entrar
                        </button>
                        {/* Divider */}
                        <div className="relative my-6">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 flex items-center"
                            >
                                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-surface-light dark:bg-surface-dark px-4 text-slate-500">
                                    ou
                                </span>
                            </div>
                        </div>
                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                className="flex w-full items-center justify-center gap-3 rounded-lg bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-offset-0 transition-colors"
                                type="button"
                            >
                                {/* Facebook SVG */}
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12.0003 20.45c-4.666 0-8.45-3.784-8.45-8.45 0-4.667 3.784-8.45 8.45-8.45 4.667 0 8.45 3.783 8.45 8.45 0 4.666-3.783 8.45-8.45 8.45m0-18.3C6.5683 2.15 2.1503 6.568 2.1503 12c0 5.432 4.418 9.85 9.85 9.85 5.432 0 9.85-4.418 9.85-9.85 0-5.432-4.418-9.85-9.85-9.85"
                                        fill="currentColor"
                                        fillOpacity=".15"
                                    ></path>
                                    <path
                                        d="M12.551 16.403h-1.1v-5.286h-1.78v-1.07h1.78V8.46c0-1.464.67-2.26 2.22-2.26.623 0 1.156.046 1.312.067v1.442h-.898c-.713 0-.756.338-.756.84v1.5h1.666l-.2 1.07h-1.466v5.284h-.778z"
                                        fill="#1877F2"
                                    ></path>
                                </svg>
                                <span className="sr-only">Login com Facebook</span>
                                <span className="hidden sm:inline">Facebook</span>
                            </button>
                            <button
                                className="flex w-full items-center justify-center gap-3 rounded-lg bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-offset-0 transition-colors"
                                type="button"
                            >
                                {/* Google SVG */}
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <span className="sr-only">Login com Google</span>
                                <span className="hidden sm:inline">Google</span>
                            </button>
                        </div>
                    </form>
                </div>
                {/* Footer / Create Account */}
                <div className="px-8 py-5 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-700 text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Ainda não é cliente?
                        <Link
                            className="font-semibold text-primary hover:text-primary-dark transition-colors ml-1"
                            href="#"
                        >
                            Criar conta
                        </Link>
                    </p>
                </div>
            </div>
            {/* Background Image Illustration (Right Side Desktop / Hidden Mobile) - Using standard img for external URL for simplicity if not optimizing yet, or can use Next Image if domain added */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 -z-10">
                <div
                    className="h-full w-full bg-cover bg-center opacity-10 dark:opacity-5"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBd9iRTf0h5c5uga8M3A8xxKhjQ24GCsFsxxxvs2u_ExeVStkc7fsCym3q6ex01Yo7EbI2B9irlVUJ5PKajcoErnGwPUaCnJoHz_Ni3hk9R25PbGNrN8eGODF29fj5SuE4o8F7XT75D_yP78oPb4z6OTQYzLXJNro5u3AXtAXUWiC-SYXnvrxUj_Sn4tcd1F-73i3QB73yUOqpyTeUVgKyu9CNpZLuocT8UKKk9S78aPM7wIhduxUWrpjl4fm9VlJlcSWa4FJRDjw')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background-light dark:to-background-dark"></div>
            </div>
        </main>
    );
}
