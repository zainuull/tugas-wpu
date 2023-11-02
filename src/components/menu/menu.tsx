'use client';
import avatar from '../../../public/avatar.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathanme = usePathname();
  return (
    <div className="col-span-2 bg-black p-10 h-screen">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <Image src={avatar} alt="avatar" width={100} className="rounded-full" />
          <div>
            <h1 className="font-bold text-sm">Perpustakaan EXYZ</h1>
            <p className="font-thin text-xs">thobazainul@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-12 mt-20">
          <Link
            href={'/'}
            className={`${pathanme == '/' ? 'font-bold text-xl transition-all' : 'text-base'}`}>
            Dashboard
          </Link>
          <Link
            href={'/daftar-buku'}
            className={`${
              pathanme == '/daftar-buku' ? 'font-bold text-xl transition-all' : 'text-base'
            }`}>
            Daftar Buku
          </Link>
          <Link
            href={'/account'}
            className={`${
              pathanme == '/account' ? 'font-bold text-xl transition-all' : 'text-base'
            }`}>
            Account
          </Link>
          <Link
            href={'/setting'}
            className={`${
              pathanme == '/setting' ? 'font-bold text-xl transition-all' : 'text-base'
            }`}>
            Setting
          </Link>
          <Link
            href={'/login'}
            className={`${
              pathanme == '/login' ? 'font-bold text-xl transition-all' : 'text-base'
            }`}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
