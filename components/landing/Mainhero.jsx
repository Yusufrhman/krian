import Image from "next/image";
import MainButton from "../shared/MainButton";
import CAMATIMG from "@/public/camat.png";

export default function MainHero() {
  return (
    <section className="bg-light-blue h-[80dvh] w-full flex items-center justify-center">
      <section className="w-4/5 2xl:w-4/6 mx-auto flex items-center justify-center gap-24">
        <article className=" flex flex-col items-start gap-6">
          <h1 className="text-black text-3xl font-bold">
            Selamat Datang di Website Kecamatan Krian
          </h1>
          <p className="text-xl font-light text-black">
            Halaman ini merupakan website resmi Kecamatan Krian Kabupaten
            Sidoarjo yang akan melayani anda.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <MainButton>Hubungi Kami</MainButton>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2 flex items-center border border-main-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                >
                  <path
                    opacity="0.7"
                    d="M19 8.0359C21.6667 9.5755 21.6667 13.4245 19 14.9641L6.25 22.3253C3.58333 23.8649 0.25 21.9404 0.25 18.8612V4.13878C0.25 1.05958 3.58333 -0.864918 6.25 0.674682L19 8.0359Z"
                    fill="#2FE5DC"
                  />
                </svg>
              </div>
              <p className="text-black">Tonton Video Profile</p>
            </li>
          </ul>
        </article>
        <article className=" flex flex-col items-start gap-6 relative ">
          <span className="bg-white border-8 border-main-green w-4/5 h-4/5 rounded-full absolute bottom-0 right-1/2 translate-x-1/2"></span>

          <Image
            src={CAMATIMG}
            alt=""
            width={800}
            className="relative z-10 rounded-full overflow-hidden"
          />
          <div className="absolute z-20 w-fit rounded-2xl shadow-xl bg-white bottom-0 right-1/3 translate-x-1/3 h-fit px-2 py-1 text-center">
            <p className="font-bold text-black text-lg">
              AHMAD FAUZI, S.STP., M.HP.
            </p>
            <p className="text-black">Camat Krian</p>
          </div>
        </article>
      </section>
    </section>
  );
}
