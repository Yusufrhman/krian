import Image from "next/image";

import BERITA1IMG from "@/public/berita-1.png";
import BERITA2IMG from "@/public/berita-2.png";
import BERITA3IMG from "@/public/berita-3.png";

import BeritaCard from "./berita/BeritaCard";

export default function Berita() {
  return (
    <section className="my-40 w-full flex flex-col items-center justify-center gap-12">
      <h2 className="text-main-green font-bold text-2xl 2xl:text-3xl text-center mx-auto w-fit">
        Berita <span className="text-black">Terbaru</span>
      </h2>
      <section className="flex justify-around items-center w-full">
        <p className="text-black font-bold text-lg">Kategori Berita</p>
        <ul className="flex items-center gap-3">
          <li className="bg-dark-blue px-2 py-1 rounded-xl text-white">
            Politik
          </li>
          <li className="bg-neutral-100 px-2 py-1 rounded-xl text-black">
            Kesehatan
          </li>
          <li className="bg-neutral-100 px-2 py-1 rounded-xl text-black">
            Pengumuman
          </li>
          <li className="bg-neutral-100 px-2 py-1 rounded-xl text-black">
            Kegiatan
          </li>
          <li className="bg-neutral-100 px-2 py-1 rounded-xl text-black">
            Penyuluhan
          </li>
          <li className="bg-neutral-100 px-2 py-1 rounded-xl text-black">
            Sarana Prasarana
          </li>
        </ul>
      </section>
      <section className="w-4/5 mx-auto grid grid-cols-3 items-center justify-center xl:gap-8 2xlgap-20">
        <BeritaCard
          title={
            "Upcara memperingati Kemerdekaan Indonesia Ke-79 dilaksanakan..."
          }
          imgSrc={BERITA1IMG}
        />
        <BeritaCard
          title={"Pembinaan IDM Dalam optimasi Peningkatan IDM se-kecamatan..."}
          imgSrc={BERITA2IMG}
        />
        <BeritaCard
          title={"Safari Rmadhan 1445H/2024 dilaksanakan di Masjid Baitul..."}
          imgSrc={BERITA3IMG}
        />
      </section>
      <section className="flex justify-between w-4/5 items-center">
        {" "}
        <p className="text-black underline">Lihat Semua</p>
        <span className="flex items-center gap-2">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5 2C11.1848 2 8.00537 3.31696 5.66117 5.66117C3.31696 8.00537 2 11.1848 2 14.5C2 17.8152 3.31696 20.9946 5.66117 23.3388C8.00537 25.683 11.1848 27 14.5 27C17.8152 27 20.9946 25.683 23.3388 23.3388C25.683 20.9946 27 17.8152 27 14.5C27 11.1848 25.683 8.00537 23.3388 5.66117C20.9946 3.31696 17.8152 2 14.5 2ZM8.70781 15.6047L13.3953 20.2922C13.69 20.5768 14.0847 20.7343 14.4944 20.7307C14.9041 20.7272 15.296 20.5629 15.5857 20.2732C15.8754 19.9835 16.0397 19.5916 16.0432 19.1819C16.0468 18.7722 15.8893 18.3775 15.6047 18.0828L13.5844 16.0625H19.1875C19.6019 16.0625 19.9993 15.8979 20.2924 15.6049C20.5854 15.3118 20.75 14.9144 20.75 14.5C20.75 14.0856 20.5854 13.6882 20.2924 13.3951C19.9993 13.1021 19.6019 12.9375 19.1875 12.9375H13.5844L15.6047 10.9172C15.7539 10.7731 15.873 10.6006 15.9548 10.41C16.0367 10.2194 16.0798 10.0143 16.0816 9.80688C16.0834 9.59941 16.0439 9.39366 15.9653 9.20163C15.8868 9.00961 15.7708 8.83515 15.6241 8.68845C15.4773 8.54174 15.3029 8.42572 15.1109 8.34715C14.9188 8.26859 14.7131 8.22906 14.5056 8.23086C14.2982 8.23266 14.0931 8.27576 13.9025 8.35765C13.7119 8.43954 13.5394 8.55858 13.3953 8.70781L8.70781 13.3953C8.41489 13.6883 8.25033 14.0857 8.25033 14.5C8.25033 14.9143 8.41489 15.3117 8.70781 15.6047Z"
              fill="#F1F1F1"
            />
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25ZM18.2922 11.3953L13.6047 6.70781C13.31 6.42319 12.9153 6.2657 12.5056 6.26926C12.0959 6.27282 11.704 6.43715 11.4143 6.72685C11.1246 7.01655 10.9603 7.40844 10.9568 7.81812C10.9532 8.22781 11.1107 8.6225 11.3953 8.91719L13.4156 10.9375H7.8125C7.3981 10.9375 7.00067 11.1021 6.70765 11.3951C6.41462 11.6882 6.25 12.0856 6.25 12.5C6.25 12.9144 6.41462 13.3118 6.70765 13.6049C7.00067 13.8979 7.3981 14.0625 7.8125 14.0625H13.4156L11.3953 16.0828C11.2461 16.2269 11.127 16.3994 11.0452 16.59C10.9633 16.7806 10.9202 16.9857 10.9184 17.1931C10.9166 17.4006 10.9561 17.6063 11.0347 17.7984C11.1132 17.9904 11.2292 18.1648 11.3759 18.3116C11.5227 18.4583 11.6971 18.5743 11.8891 18.6528C12.0812 18.7314 12.2869 18.7709 12.4944 18.7691C12.7018 18.7673 12.9069 18.7242 13.0975 18.6423C13.2881 18.5605 13.4606 18.4414 13.6047 18.2922L18.2922 13.6047C18.5851 13.3117 18.7497 12.9143 18.7497 12.5C18.7497 12.0857 18.5851 11.6883 18.2922 11.3953Z"
              fill="#2FE5DC"
            />
          </svg>
        </span>
      </section>
    </section>
  );
}
