"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Rising Sun Distributors</span>
              <Sun className="h-10 w-auto text-primary" />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="#services" className="text-base font-medium text-primary hover:text-primary-foreground">
                Services
              </Link>
              <Link href="#about" className="text-base font-medium text-primary hover:text-primary-foreground">
                About
              </Link>
              <Link href="#testimonials" className="text-base font-medium text-primary hover:text-primary-foreground">
                Testimonials
              </Link>
              <Link href="#contact" className="text-base font-medium text-primary hover:text-primary-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <Button className="hidden lg:inline-block">
              Get Started
            </Button>
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="py-4 space-y-1">
            <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary-foreground hover:bg-primary">
              Services
            </Link>
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary-foreground hover:bg-primary">
              About
            </Link>
            <Link href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary-foreground hover:bg-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary-foreground hover:bg-primary">
              Contact
            </Link>
            <Button className="w-full mt-4">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}