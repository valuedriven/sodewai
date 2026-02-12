"use client";

import {
    DollarSign,
    ShoppingBag,
    Users,
    Package,
    ArrowUpRight,
    TrendingUp,
} from "lucide-react";

export default function AdminDashboardPage() {
    const stats = [
        {
            label: "Vendas Totais",
            value: "R$ 12.450,00",
            change: "+12.5%",
            icon: DollarSign,
            color: "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30",
        },
        {
            label: "Pedidos",
            value: "45",
            change: "+8.2%",
            icon: ShoppingBag,
            color: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30",
        },
        {
            label: "Clientes",
            value: "128",
            change: "+4.3%",
            icon: Users,
            color: "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30",
        },
        {
            label: "Produtos Ativos",
            value: "32",
            change: "+2.1%",
            icon: Package,
            color: "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30",
        },
    ];

    const recentOrders = [
        { id: "#PED-12348", customer: "Maria Silva", total: "R$ 150,00", status: "Pendente" },
        { id: "#PED-12347", customer: "João Souza", total: "R$ 85,50", status: "Enviado" },
        { id: "#PED-12346", customer: "Ana Costa", total: "R$ 210,00", status: "Entregue" },
        { id: "#PED-12345", customer: "Pedro Henrique", total: "R$ 45,00", status: "Cancelado" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    Dashboard
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Visão geral do seu negócio
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <stat.icon className="size-6" />
                            </div>
                            <div className="flex items-center text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                <TrendingUp className="size-3 mr-1" />
                                {stat.change}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                {stat.label}
                            </p>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {stat.value}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                            Pedidos Recentes
                        </h2>
                        <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
                            Ver todos <ArrowUpRight className="size-4" />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 font-medium uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Cliente</th>
                                    <th className="px-6 py-3">Total</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                            {order.id}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            {order.customer}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                            {order.total}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === "Pendente"
                                                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                                        : order.status === "Enviado"
                                                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                                            : order.status === "Entregue"
                                                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                                    }`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions or Analytics Placeholder */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
                    <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-full mb-4">
                        <TrendingUp className="size-8 text-slate-400 dark:text-slate-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        Análises em Breve
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xs">
                        Gráficos detalhados de vendas e desempenho estarão disponíveis na próxima atualização.
                    </p>
                </div>
            </div>
        </div>
    );
}
