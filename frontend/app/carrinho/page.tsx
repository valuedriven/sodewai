"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { useCart } from "@/contexts/cart-context";
import {
    Trash2,
    Minus,
    Plus,
    ArrowLeft,
    Info,
    ArrowRight,
    Lock,
    ChevronRight,
    ShoppingBag,
} from "lucide-react";

export default function CartPage() {
    const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center p-8 text-center text-slate-500">
                    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag className="w-12 h-12 text-slate-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Seu carrinho está vazio</h2>
                    <p className="mb-8 max-w-md mx-auto">Parece que você ainda não adicionou nenhum produto ao carrinho. Explore nossa vitrine e encontre as melhores ofertas para você!</p>
                    <Link
                        href="/"
                        className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
                    >
                        <ArrowLeft className="size-5" />
                        Voltar para a Loja
                    </Link>
                </main>
            </div>
        );
    }

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
                        Carrinho
                    </span>
                </nav>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
                    Seu Carrinho de Compras
                </h1>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Column: Cart Items */}
                    <div className="w-full lg:flex-1 flex flex-col gap-6">
                        {/* Table Header (Hidden on Mobile) */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-4 pb-2 border-b border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            <div className="col-span-6">Produto</div>
                            <div className="col-span-2 text-center">Preço</div>
                            <div className="col-span-2 text-center">Quantidade</div>
                            <div className="col-span-2 text-right">Subtotal</div>
                        </div>

                        {items.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 md:border-none md:shadow-none md:bg-transparent md:dark:bg-transparent md:p-0">
                                <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center py-4 border-b border-slate-200 dark:border-slate-700 last:border-0">
                                    {/* Product Info */}
                                    <div className="col-span-6 flex gap-4 items-start md:items-center mb-4 md:mb-0">
                                        <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 dark:border-slate-600">
                                            <img
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                src={item.image}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="font-bold text-slate-900 dark:text-white text-base md:text-lg line-clamp-2">
                                                {item.name}
                                            </h3>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500 hover:text-red-700 text-xs font-medium flex items-center gap-1 mt-1 transition-colors w-fit"
                                            >
                                                <Trash2 className="size-[14px]" />
                                                Remover
                                            </button>
                                        </div>
                                    </div>
                                    {/* Price */}
                                    <div className="col-span-2 text-center hidden md:block text-slate-600 dark:text-slate-300 font-medium">
                                        R$ {item.price.toFixed(2).replace(".", ",")}
                                    </div>
                                    {/* Quantity Control */}
                                    <div className="col-span-2 flex items-center justify-between md:justify-center">
                                        <span className="md:hidden text-sm font-medium text-slate-500">
                                            Quantidade:
                                        </span>
                                        <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden h-9 bg-white dark:bg-slate-900">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-3 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors h-full flex items-center"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus className="size-4" />
                                            </button>
                                            <input
                                                className="w-10 text-center text-sm font-semibold text-slate-900 dark:text-white border-none focus:ring-0 p-0 bg-transparent h-full"
                                                readOnly
                                                type="text"
                                                value={item.quantity}
                                            />
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-3 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors h-full flex items-center"
                                            >
                                                <Plus className="size-4" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Subtotal */}
                                    <div className="col-span-2 flex items-center justify-between md:justify-end mt-4 md:mt-0 pt-4 md:pt-0 border-t border-slate-100 dark:border-slate-700 md:border-t-0">
                                        <span className="md:hidden text-sm font-medium text-slate-500">
                                            Total:
                                        </span>
                                        <span className="font-bold text-slate-900 dark:text-white text-lg">
                                            R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-start pt-4">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
                            >
                                <ArrowLeft className="size-5" />
                                Continuar Comprando
                            </Link>
                        </div>
                    </div>
                    {/* Right Column: Summary Sticky Card */}
                    <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sticky top-28">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                Resumo do Pedido
                            </h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                                    <span>Subtotal ({totalItems} itens)</span>
                                    <span className="font-medium">R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                                </div>
                                <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                                    <span>Frete Estimado</span>
                                    <span className="font-medium text-slate-400 italic">
                                        A combinar
                                    </span>
                                </div>
                                <div className="h-px bg-slate-200 dark:bg-slate-700 my-4"></div>
                                <div className="flex justify-between items-center text-slate-900 dark:text-white text-lg font-bold">
                                    <span>Total</span>
                                    <span className="text-2xl">R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                                </div>
                            </div>
                            {/* Important Disclaimer */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-6 flex gap-3 items-start">
                                <Info className="size-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-blue-800 dark:text-blue-200">
                                    <p className="font-bold mb-1">Pagamento não é online</p>
                                    <p className="leading-relaxed">
                                        O pagamento não é processado agora. O vendedor entrará em
                                        contato para combinar o pagamento e a entrega.
                                    </p>
                                </div>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 group">
                                Confirmar Pedido
                                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="mt-4 text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                                <Lock className="size-[14px]" />
                                Comunicação segura com o vendedor
                            </p>
                        </div>
                    </div>
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
