'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/busca-prestador', label: 'Buscar Serviços' },
  { href: '/como-funciona', label: 'Como Funciona' },
  { href: '/prestador', label: 'Quero ser Prestador' },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center mx-auto">
        {/* Logo */}
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-pet-me.png" alt="Pet.me Logo" width={130} height={130} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-purple-800  ${
                pathname === link.href ? 'text-purple-800 font-semibold' : 'text-foreground/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center justify-end space-x-2">
          <Button variant="outline" asChild className='h-11 text-purple-800 hover:text-purple-900 font-semibold text-lg'>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 h-11 text-purple-50 font-semibold text-lg">
            <Link href={pathname === "/" ? "/cadastro-tutor" : "cadastro-prestador"}>Criar Conta</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden flex-1 items-center justify-end">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
              <div className="flex flex-col h-full">
                {/* Logo inside Sheet */}
                <div className="mb-8">
                  <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2">
                    <Image src="/logo-pet-me.png" alt="Pet.me Logo" width={150} height={150} />
                  </Link>
                </div>

                <nav className="flex flex-col space-y-4 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`transition-colors hover:text-foreground/80 py-2 ${
                        pathname === link.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col space-y-3 pt-6">
                   <Button variant="outline" asChild className="h-11 font-semibold text-lg">
                    <Link href="/auth/login" onClick={() => setMenuOpen(false)}>Entrar</Link>
                  </Button>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 h-11 font-semibold text-lg">
                    <Link href="/auth/cadastro" onClick={() => setMenuOpen(false)}>Criar Conta</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}