"use client";

import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/products?search=${encodeURIComponent(search)}`);
      setSearch("");
      setMobileOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="hover:text-blue-600"  >
          <Image
            src="/NEW.png"
            alt="Logo"
            width={70}
            height={70}
            priority
            className="object-contain"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            New Arrivals
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
          <form onSubmit={handleSearch} className="ml-4 flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="border rounded-l px-2 py-1 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-1 rounded-r hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};
