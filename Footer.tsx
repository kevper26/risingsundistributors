import Link from 'next/link';
import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <Sun className="h-10 w-auto text-primary" />
              <span className="ml-3 text-xl font-bold text-primary">Rising Sun Distributors</span>
            </Link>
            <p className="text-base text-muted-foreground">
              Leading e-commerce solutions provider, helping businesses grow across platforms.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Amazon
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Shopify
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      eBay
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-muted pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            &copy; 2023 Rising Sun Distributors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}