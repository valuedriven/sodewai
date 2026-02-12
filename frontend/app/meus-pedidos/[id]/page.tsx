"use client";

import Link from "next/link";
import { Header } from "@/components/ui/header";
import {
    ChevronRight,
    Package,
    MapPin,
    CreditCard,
    CheckCircle,
    Truck,
    ArrowLeft,
} from "lucide-react";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
    // Mock data - in a real app, fetch using params.id
    const order = {
        id: params.id || "PED-12345",
        date: "12 de Outubro, 2024",
        status: "Entregue",
        statusSteps: [
            { label: "Confirmado", date: "12/10", completed: true },
            { label: "Enviado", date: "13/10", completed: true },
            { label: "Saiu para Entrega", date: "15/10", completed: true },
            { label: "Entregue", date: "15/10", completed: true },
        ],
        items: [
            {
                name: "Kit Sabonetes Artesanais",
                price: "R$ 45,00",
                quantity: 1,
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAARZn79l3KpJwxtFjAykybrh7gV3a85vG8RI1OR5ivijfRLGpQcxjtoUCusyZc_IFQaz1rrQhNBY5FpXx8A-b2FIS1FJa1YoyrBVSYPKQaLvJmIe3ttWoVAGO3vcw6NhIWo1phByb5CyTjYVDucJsRbrCM9TEmtgldvHpRJi5gktWWbX-loU-Wcv_zlmHUm_k341VvnzuToYvcLPWJ4RCcmRoCnfKoF-SJhDxjK5TMeU3itggZNqDAmriZX5ABiayyQC0qTf_YJQ",
            },
            {
                name: "Vela Aromática",
                price: "R$ 60,00",
                quantity: 2,
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAo889ytHFa4OHtFHTa6Q1FCwTZ5zg1czC5_KEcJYM4XHAE608jBBk9RVKiCuvUkfHtNNwwskU1DkdKt4LuowWnWthjGETA-Vn9A-QNc7wvNGjsXS1HRb31hwu9HUosbtjHUTl8Q2V6XP3vUiQsNEwKP0ell2bJWuFCik26CPktiky57gEvUysIWJ0sIrWs48YTdEbVEpddDx77jccCkoGnItsHS6GoGcWlzxS2U7TgI-iz75AdY0Jd7fd61g7plJcIYFF8gBqCg",
            },
        ],
        shippingPrice: "R$ 0,00",
        total: "R$ 105,00",
        address: "Rua das Flores, 123 - Centro, São Paulo - SP",
        paymentMethod: "Pagamento na Entrega (PIX)",
    };

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
                    <Link
                        href="/meus-pedidos"
                        className="hover:text-primary transition-colors"
                    >
                        Meus Pedidos
                    </Link>
                    <ChevronRight className="size-4" />
                    <span className="text-slate-900 dark:text-white font-semibold">
                        Detalhe do Pedido
                    </span>
                </nav>

                <div className="flex flex-col lg:flex-row items-start justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                            Pedido #{order.id}
                        </h1>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Realizado em {order.date}
                        </p>
                    </div>
                    <Link
                        href="/meus-pedidos"
                        className="flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
                    >
                        <ArrowLeft className="size-5" />
                        Voltar para Pedidos
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Column: Details */}
                    <div className="w-full lg:flex-1 flex flex-col gap-6">
                        {/* Status Timeline */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                                Status do Pedido
                            </h2>
                            <div className="flex items-center justify-between relative">
                                {/* Progress Bar Background */}
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-0 rounded-full"></div>
                                {/* Steps */}
                                {order.statusSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center gap-2 z-10 bg-white dark:bg-slate-800 px-2"
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step.completed
                                                    ? "bg-primary border-primary text-white"
                                                    : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-300"
                                                }`}
                                        >
                                            {step.completed && <CheckCircle className="size-5" />}
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">
                                                {step.label}
                                            </p>
                                            <p className="text-[10px] text-slate-500">{step.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Items */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                                Itens do Pedido
                            </h2>
                            <div className="space-y-6">
                                {order.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 pb-6 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0"
                                    >
                                        <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 dark:border-slate-600">
                                            <img
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                src={item.image}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                                Qtd: {item.quantity}
                                            </p>
                                        </div>
                                        <div className="font-bold text-slate-900 dark:text-white">
                                            {item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Address & Payment */}
                    <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 space-y-6">
                        {/* Address */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <MapPin className="size-5 text-primary" />
                                Endereço de Entrega
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {order.address}
                            </p>
                        </div>

                        {/* Payment */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <CreditCard className="size-5 text-primary" />
                                Pagamento
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {order.paymentMethod}
                            </p>
                        </div>

                        {/* Summary */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                                Resumo
                            </h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-slate-600 dark:text-slate-300 text-sm">
                                    <span>Subtotal</span>
                                    <span className="font-medium">R$ 105,00</span>
                                </div>
                                <div className="flex justify-between items-center text-slate-600 dark:text-slate-300 text-sm">
                                    <span>Frete</span>
                                    <span className="font-medium text-green-600">Grátis</span>
                                </div>
                                <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
                                <div className="flex justify-between items-center text-slate-900 dark:text-white text-lg font-bold">
                                    <span>Total</span>
                                    <span>{order.total}</span>
                                </div>
                            </div>
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
