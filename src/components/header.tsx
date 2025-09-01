'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#', label: 'Business' },
  { href: '#', label: 'Services' },
  { href: '#', label: 'Therapist Jobs' },
  { href: '#', label: 'About' },
  { href: '/blog', label: 'Blogs' },
  { href: '#', label: 'Contact Us' },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href === '/blog' && pathname.startsWith('/blog'));

  return (
    <Link
      href={href}
      className={cn(
        'relative text-[18px] font-semibold transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-black'
      )}
      prefetch={false}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-primary" />
      )}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white px-4 sm:px-6 lg:px-8 h-20 flex items-center shadow-sm font-poppins">
       <Link href="/" className="flex items-center" prefetch={false}>
        <span className="text-3xl font-bold text-black">vtalix<span className="text-orange-500">.</span></span>
      </Link>
      
      <nav className="ml-auto hidden lg:flex gap-7 items-center">
        {navLinks.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
        <div className="flex items-center gap-4">
           <Button variant="secondary" className="rounded-[40px] text-[18px] px-6 bg-orange-100 text-black hover:bg-orange-200">
             <Link href="#">Login</Link>
           </Button>
           <Button className="rounded-[40px] px-6 text-[18px] bg-orange-500 text-white hover:bg-orange-500/90">
             <Link href="#">Start Assessment</Link>
           </Button>
         </div>
      </nav>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-auto lg:hidden text-black hover:bg-gray-200 hover:text-black">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-white text-black w-[250px] sm:w-[300px]">
          <nav className="flex flex-col gap-6 p-6 text-lg">
            {navLinks.map((link) => (
               <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'font-medium transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-black'
                  )}
                  prefetch={false}
                >
                  {link.label}
                </Link>
            ))}
             <div className="border-t border-gray-200 pt-6 mt-2 flex flex-col gap-4">
                <Button variant="secondary" className="w-full rounded-xl bg-orange-100 text-black hover:bg-orange-200">
                  <Link href="#">Login</Link>
                </Button>
                <Button className="w-full rounded-xl bg-orange-500 text-white hover:bg-orange-500/90">
                  <Link href="#">Start Assessment</Link>
                </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
