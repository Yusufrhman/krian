import LOGO from "@/public/logo/logo.png";
import KOMINFO from "@/public/link-1.png";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-dark-blue rounded-t-3xl shadow-2xl px-10 pt-10 pb-5 flex flex-col gap-8">
      <div className=" grid grid-cols-3 items-center justify-center ">
        <section className="flex flex-col gap-4 border-r-2 border-white border-dashed px-8">
          <section className="flex gap-2 items-center">
            <Image src={LOGO} alt="" width={75} />
            <p className="text-white font-bold">
              Kecamatan Krian <span className="block">Kabupaten Sidoarjo</span>
            </p>
          </section>
          <p className="font-light text-white">
            website ini merupkan website resmi Kecamatan Krian Kabupaten
            Sidoarjo silahkan hubungi kami melalui alamat email
            <span className="block">email: krian@sidoarjokab.go.id</span>
          </p>
          <svg
            width="218"
            height="44"
            viewBox="0 0 218 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="44" rx="22" fill="white" />
            <path
              d="M27 30.5H17C14 30.5 12 29 12 25.5V18.5C12 15 14 13.5 17 13.5H27C30 13.5 32 15 32 18.5V25.5C32 29 30 30.5 27 30.5Z"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27 19L23.87 21.5C22.84 22.32 21.15 22.32 20.12 21.5L17 19"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="58" width="44" height="44" rx="22" fill="white" />
            <path
              d="M80 32C85.5228 32 90 27.5228 90 22C90 16.4772 85.5228 12 80 12C74.4772 12 70 16.4772 70 22C70 27.5228 74.4772 32 80 32Z"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M76 13H77C75.05 18.84 75.05 25.16 77 31H76"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M83 13C84.95 18.84 84.95 25.16 83 31"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M71 26V25C76.84 26.95 83.16 26.95 89 25V26"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M71 19.0001C76.84 17.0501 83.16 17.0501 89 19.0001"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="116" width="44" height="44" rx="22" fill="white" />
            <path
              d="M147.97 28.33C147.97 28.69 147.89 29.06 147.72 29.42C147.55 29.78 147.33 30.12 147.04 30.44C146.55 30.98 146.01 31.37 145.4 31.62C144.8 31.87 144.15 32 143.45 32C142.43 32 141.34 31.76 140.19 31.27C139.04 30.78 137.89 30.12 136.75 29.29C135.6 28.45 134.51 27.52 133.47 26.49C132.44 25.45 131.51 24.36 130.68 23.22C129.86 22.08 129.2 20.94 128.72 19.81C128.24 18.67 128 17.58 128 16.54C128 15.86 128.12 15.21 128.36 14.61C128.6 14 128.98 13.44 129.51 12.94C130.15 12.31 130.85 12 131.59 12C131.87 12 132.15 12.06 132.4 12.18C132.66 12.3 132.89 12.48 133.07 12.74L135.39 16.01C135.57 16.26 135.7 16.49 135.79 16.71C135.88 16.92 135.93 17.13 135.93 17.32C135.93 17.56 135.86 17.8 135.72 18.03C135.59 18.26 135.4 18.5 135.16 18.74L134.4 19.53C134.29 19.64 134.24 19.77 134.24 19.93C134.24 20.01 134.25 20.08 134.27 20.16C134.3 20.24 134.33 20.3 134.35 20.36C134.53 20.69 134.84 21.12 135.28 21.64C135.73 22.16 136.21 22.69 136.73 23.22C137.27 23.75 137.79 24.24 138.32 24.69C138.84 25.13 139.27 25.43 139.61 25.61C139.66 25.63 139.72 25.66 139.79 25.69C139.87 25.72 139.95 25.73 140.04 25.73C140.21 25.73 140.34 25.67 140.45 25.56L141.21 24.81C141.46 24.56 141.7 24.37 141.93 24.25C142.16 24.11 142.39 24.04 142.64 24.04C142.83 24.04 143.03 24.08 143.25 24.17C143.47 24.26 143.7 24.39 143.95 24.56L147.26 26.91C147.52 27.09 147.7 27.3 147.81 27.55C147.91 27.8 147.97 28.05 147.97 28.33Z"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <rect x="174" width="44" height="44" rx="22" fill="white" />
            <path
              d="M206 25V19C206 14 204 12 199 12H193C188 12 186 14 186 19V25C186 30 188 32 193 32H199C204 32 206 30 206 25Z"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M186.52 17.1101H205.48"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M192.52 12.1101V16.9701"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M199.48 12.1101V16.5201"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M193.75 24.4501V23.2501C193.75 21.7101 194.84 21.0801 196.17 21.8501L197.21 22.4501L198.25 23.0501C199.58 23.8201 199.58 25.0801 198.25 25.8501L197.21 26.4501L196.17 27.0501C194.84 27.8201 193.75 27.1901 193.75 25.6501V24.4501V24.4501Z"
              stroke="#2FE5DC"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </section>
        <section className="flex flex-col gap-4 border-r-2 border-white border-dashed px-8">
          <p className="font-bold text-white">Menu Bantuan</p>
          <ul className="text-yellow-400 font-light text-sm">
            <li>Profile</li>
            <li>Berita</li>
            <li>Layanan</li>
            <li>Struktur Organisasi</li>
            <li>Sarana Prasarana</li>
            <li>PPID</li>
            <li>Tugas Pokok dan Fungsi</li>
            <li>Download Dokumen</li>
          </ul>
        </section>
        <section className="flex flex-col gap-4 px-8">
          <p className="font-bold text-white">Company</p>
          <ul className="text-yellow-400 font-light text-sm">
            <li>Kebijakan & Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
          <section className="bg-main-green w-full h-fit px-8 py-4 flex gap-4 items-center font-bold rounded-2xl">
            {" "}
            <Image src={KOMINFO} alt="" width={100} />
            <p className="text-white">Kementerian Komunikasi & Informatika</p>
          </section>
        </section>
      </div>
      <p className="text-white opacity-50 text-center font-light">
        Copyright ©2024. All Rights Reserved. — Dikelola oleh Dinas Komunikasi
        dan Informatika Kabupaten Sidoarjo
      </p>
    </div>
  );
}
