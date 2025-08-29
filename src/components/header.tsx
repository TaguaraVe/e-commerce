import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header>
      <nav className="flex w-full items-center justify-between border-b border-gray-200 p-2">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Boxi Sleep Logo"
              width={100}
              height={70}
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <Link href="/">
            <Home className="h-4 w-4 text-gray-600" />
          </Link>
          <Bell className="h-4 w-4 text-gray-600" />
          <ShoppingCart className="h-4 w-4 text-gray-600" />
          <Link href="/login">Sign In</Link>
        </div>
      </nav>
    </header>
  );
}
