"use client";
import LOGO from "@/public/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";
import MainButton from "./MainButton";

export default function Header() {
  return (
    <header className="sticky top-0 w-full flex items-center justify-around bg-dark-blue py-2 z-50 shadow-xl">
      <section className="flex items-center justify-center gap-2">
        <Image src={LOGO} alt="" width={75} />
        <section>
          <p className="text-xl text-main-green tracking-widest">
            Kecamatan Krian
          </p>
          <p className="text-base text-white">Kabupaten Sidoarjo</p>
        </section>
      </section>
      <ul className="flex gap-6">
        <li>
          <Link href={"/"}>
            <p className="text-main-green">Beranda</p>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <p className="text-white">Profil</p>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <p className="text-white">Layanan</p>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <p className="text-white">ppid</p>
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-between gap-4">
        <li className="bg-white aspect-square rounded-lg w-fit h-fit p-1">
          <MagnifyingGlass size={24} color="#0e0c0c" weight="bold" />
        </li>
        <li>
          <MainButton>Berita</MainButton>
        </li>
      </ul>
    </header>
  );
}
