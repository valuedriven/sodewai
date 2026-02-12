"use client";

import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Sidebar } from "@/components/ui/sidebar";
import { useCart } from "@/contexts/cart-context";
import {
  Heart,
  ShoppingCart,
  Ban,
  Truck,
  ShieldCheck,
  Headphones,
  RefreshCcw,
} from "lucide-react";

const products = [
  {
    id: "prod-001",
    name: "Smartwatch Series 5 Pro - Monitor Cardíaco",
    category: "Eletrônicos",
    price: 299.90,
    originalPrice: 450.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXu4DcHLszPwjJiMfO5McKc3w8yWagsFD8pJ2gENqvwmyrQsOcqqc6AgrQHwRNR3PUaB3IN_yzof5A_eUvZlSw2Tb3S-Lzk80CDGQvMwU1bqgqvPMMUjQ3YbD7F7QleusZ7nPB-VaBr6gKs16fEc7_DpN17HNk34mDBUALnjCLzi-ArfXd5n5GlsrRW_z3zREYujz82VyvlPnRFJgPq-CDZ-NngnFxdaMNXa9trMC3pS-hIlxjSZJ-EYPinprWPvCcPFsdf_bFiw",
    badge: "Novo",
    badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  {
    id: "prod-002",
    name: "Tênis Esportivo Runner X - Vermelho",
    category: "Calçados",
    price: 189.90,
    originalPrice: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMEjIGA_KJJtu3A5-crGEXT5mxHQ-oNq_IzimQUaISuhg54OfBcfkZMwfs1sRmEFZSUvLdU95nv_AcNyeo1Afi94SDW_xV2gwgi_O5tmDm6KeautEwm70ijQevdjaFfowPzol_zLdWsDZGOqEI0o0uRdogkApat3zZt1ne6L0bCyXMeiZETlc1479w1sLugVdcdjV82j1yCHNoChzaWDOsai47vIlf2_ceVwzkksMPNFalBCJ2B7LvlxIYtEBVfalPxVz_cDm5ng",
    badge: null,
  },
  {
    id: "prod-003",
    name: "Headphone Wireless Bass Boost - Preto",
    category: "Áudio",
    price: 349.90,
    originalPrice: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7fwZC8zDjYwvDqId3dS-1CNCSHYGUA6reUIJK7EgyyKq5ZzrKa7xRuHjTS6_RIKtnKux4ft_hJrMw8wfVQQIBe6cvW8yA3lEgEpJfv1YiuwLoYT1Pv6oU_3OTaj-1yjCWMcp8-DHAu0hgka2wh9JFnugGJLuA0pa3oBWSWCVDGNQNle6ZIhMh1OaVzrI3oWZKjtE7S2ULvzs2zqpikryEZMiGfVH4WKfhuacTDS7ekXcuE3046xafStL7topRG7nqkDI8kftJ8Q",
    badge: "Esgotado",
    badgeColor: "bg-slate-900/90 text-white",
    outOfStock: true,
  },
  {
    id: "prod-004",
    name: "Jaqueta de Lã Premium - Cinza Escuro",
    category: "Roupas",
    price: 272.00,
    originalPrice: 320.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrZ2Y7Hx7gvwo_9v_Kqjy63h46AKJ9p2ZkcmbYMSzViWTCf_SMAvROi-JivzTBPR8fB5ki1ludrKOHagvPdtFZsLsHxWElM52x1yfKg3cQX8PZyth6j0JX3gdtNjiJ9PCzvFJUp0VS2AmFh44dqn7KTTW1acFO-z2mxqldAacrG31yL0oDl12XvBwiQikTOiuWn6Rm4wAe-lTUaqbHQlgmXQzCbjPUObyXgszrwr8noSh0zja0nsHFU8BVeRg_xy9h9Bn13s6ayA",
    badge: "-15% OFF",
    badgeColor: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    id: "prod-005",
    name: "Luminária de Mesa Articulada LED",
    category: "Casa & Decoração",
    price: 89.90,
    originalPrice: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiZGOifb5OCipY9tHEy6pbhP9tOEvcVVj2aMLM2L7j9vyE9kvZlErPN590dWo6-PSLJdARc3MdmRGXid2F8L-4jtfN9zkHLFZsLjOxe04Z37xLYm-nMPC-8HvgdgxpFRQUiVPLrUURCV4Od-s4VMtd8uycUsYTEJdWlhT97xR1VMCUO-dsYewSpDu5nBFWIuhaEhnIUwblbI7auUWRUE1Owh_zZvIflV74x5gNAt3luIbE2Dzbrs6RZUIjRl_OqgcivdUSP7kLfg",
    badge: null,
  },
  {
    id: "prod-006",
    name: "Kit Mini Suculentas Naturais (3 Unid.)",
    category: "Jardinagem",
    price: 45.00,
    originalPrice: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3U5xgGoIGOkKhQS9JrjfCS52EN-P3ZoqjkK4BPmdE6lbKlZNcGAo5SS5MB-4Bp6EA3o7O98Tf9AypJbxSjTaxxYFfVoAPHKkiPW5SRDdgIAwVrwSWOI2pCbPVAS7pE893EBpmweFkpweqlvTCAmPYfk-A7vCeyuv2JpX6vMLXWugZcsVsiMGbAoMOkzEfxMu9NMJ0GvYNJujzqN7V5HKVWQ6rK5DKdqALvYrqKewt_Hn8W4DQGFG0VyywpUxdLzTMC2V98DaQgw",
    badge: null,
  },
];

export default function Home() {
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl grow items-start gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <Sidebar />
        <main className="flex-1">
          {/* Mobile Category Filter (Horizontal Scroll) */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2 lg:hidden no-scrollbar">
            {["Todos", "Lançamentos", "Promoções", "Eletrônicos", "Roupas"].map((cat) => (
              <button key={cat} className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium ${cat === "Todos" ? "bg-primary text-white" : "bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Destaques da Vitrine
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Ordenar por:
              </span>
              <select className="rounded-lg border-0 bg-transparent py-1 pl-2 pr-8 text-sm font-medium text-slate-900 focus:ring-0 dark:text-white cursor-pointer">
                <option>Relevância</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Mais Recentes</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className={`group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ${product.outOfStock ? "opacity-75" : ""}`}>
                <div className="aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700 relative">
                  <div
                    className={`h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105 ${product.outOfStock ? "grayscale" : ""}`}
                    style={{ backgroundImage: `url("${product.image}")` }}
                  />
                  {product.outOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                      <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        Esgotado
                      </span>
                    </div>
                  )}
                  <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-400 backdrop-blur transition-colors hover:text-red-500 dark:bg-slate-900/80">
                    <Heart className="size-5" />
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 min-h-[24px]">
                    {product.badge && !product.outOfStock && (
                      <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${product.badgeColor}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 line-clamp-2 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {product.category}
                  </p>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      {product.originalPrice && (
                        <p className="text-xs text-slate-400 line-through">
                          R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                        </p>
                      )}
                      <p className={`text-lg font-bold ${product.outOfStock ? "text-slate-500 dark:text-slate-400" : "text-slate-900 dark:text-white"}`}>
                        R$ {product.price.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => !product.outOfStock && handleAddToCart(product)}
                    disabled={product.outOfStock}
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors ${product.outOfStock
                        ? "cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-500"
                        : "bg-primary text-white hover:bg-primary-dark"
                      }`}
                  >
                    {product.outOfStock ? <Ban className="size-[18px]" /> : <ShoppingCart className="size-[18px]" />}
                    {product.outOfStock ? "Indisponível" : "Adicionar"}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700">
              &lt;
            </button>
            <button className="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              1
            </button>
            <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
              2
            </button>
            <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
              3
            </button>
            <span className="flex size-10 items-center justify-center text-slate-400">
              ...
            </span>
            <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700">
              &gt;
            </button>
          </div>
          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-xl bg-white p-8 shadow-sm dark:bg-slate-800 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/30">
                <Truck className="size-6" />
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                Frete Grátis
              </h5>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Em compras acima de R$199
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/30">
                <ShieldCheck className="size-6" />
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                Pagamento Seguro
              </h5>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                100% protegido
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/30">
                <Headphones className="size-6" />
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                Suporte 24/7
              </h5>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Sempre online para você
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/30">
                <RefreshCcw className="size-6" />
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                Devolução Grátis
              </h5>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Até 30 dias após a compra
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
