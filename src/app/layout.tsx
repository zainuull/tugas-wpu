import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Menu from '@/components/menu/menu';

const poppins = Poppins({ subsets: ['latin'], weight:['100','200','300','400','500','600','700','800'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-full grid grid-cols-12 bg-black text-white">
          <Menu />
          <div className="bg-white text-black col-span-10 m-10 rounded-xl p-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
