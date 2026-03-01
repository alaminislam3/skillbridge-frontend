"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getUser, UserLogOut } from "@/service/auth";

interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  className?: string;
}

const menu: MenuItem[] = [
  { title: "Home", url: "/" },
  { title: "Tutors", url: "/tutors" },
  { title: "About", url: "/about" },
];

export default function Navbar1({ className }: NavbarProps) {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await UserLogOut();
    setUser(null);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">
            SB
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Skill<span className="text-indigo-600">Bridge</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => {
            const isActive = pathname === item.url;

            return (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  isActive
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-indigo-600"
                )}
              >
                {item.title}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-indigo-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <Button
              onClick={handleLogout}
              size="sm"
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                <Link href="/login">Login</Link>
              </Button>

              <Button
                asChild
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                <Link href="/registration">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">
                      SB
                    </div>
                    <span className="font-semibold text-slate-900">
                      SkillBridge
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6">
                {menu.map((item) => {
                  const isActive = pathname === item.url;

                  return (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={cn(
                        "text-base font-medium",
                        isActive
                          ? "text-indigo-600"
                          : "text-slate-700 hover:text-indigo-600"
                      )}
                    >
                      {item.title}
                    </Link>
                  );
                })}

                <div className="mt-6 flex flex-col gap-3">
                  {user ? (
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    >
                      Logout
                    </Button>
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="outline"
                        className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                      >
                        <Link href="/login">Login</Link>
                      </Button>

                      <Button
                        asChild
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        <Link href="/registration">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

