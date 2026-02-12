import { AdminSidebar } from "@/components/admin/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SeWAI Admin",
    description: "Gestão e E-commerce para Microempreendedores",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen bg-background-light dark:bg-background-dark overflow-hidden">
            <AdminSidebar />
            <main className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
                {/* Top Header for Mobile/Tablet or just spacing */}
                <header className="h-16 md:hidden flex items-center px-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
                    {/* Sidebar toggle is in Sidebar component, we just need space here if needed or let sidebar handle it absolute */}
                    <div className="ml-12 font-bold text-lg">SeWAI Admin</div>
                </header>

                <div className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
