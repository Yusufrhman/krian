import Image from "next/image";

import GALERI1IMG from "@/public/galeri-1.png";
import GALERI2IMG from "@/public/galeri-2.png";
import GALERI3IMG from "@/public/galeri-3.png";
import GALERI4IMG from "@/public/galeri-4.png";


export default function Galeri() {
  return (
    <section className="my-40 w-full flex flex-col items-center justify-center gap-12">
      <section className="w-3/5 px-8 py-8 bg-neutral-100 rounded-2xl flex flex-col gap-8">
        <h2 className="text-main-green font-bold text-2xl 2xl:text-3xl text-center mx-auto w-fit">
          Galeri <span className="text-black">Kami</span>
        </h2>
        <p className="text-black text-lg font-light text-center">
          Beberapa galeri/foto yang ditampilkan untuk setiap kegiatan dan
          aktivitas yang telah dilaksanakan oleh Dinas Kesehatan Kabupaten Nias
          Selatan
        </p>
        <section className="flex items-center justify-center gap-4">
          <div className="bg-main-green px-4 py-2 text-base rounded-xl">
            Galeri Foto(20)
          </div>
          <div className="bg-neutral-200 px-4 py-2 text-base rounded-xl">
            Galeri Video(20)
          </div>
        </section>
      </section>
      <section className="flex gap-8">
        <section className="rounded-2xl overflow-clip">
          <Image
            src={GALERI1IMG}
            alt=""
            className="scale-150"
            width={400}
            objectFit="cover"
          />
        </section>
        <section className="rounded-2xl overflow-clip">
          <Image
            src={GALERI2IMG}
            alt=""
            className="scale-150"
            width={400}
            objectFit="cover"
          />
        </section>
        <section className="rounded-2xl overflow-clip">
          <Image
            src={GALERI3IMG}
            alt=""
            className="scale-150"
            width={400}
            objectFit="cover"
          />
        </section>
        <section className="rounded-2xl overflow-clip">
          <Image
            src={GALERI4IMG}
            alt=""
            className="scale-150"
            width={400}
            objectFit="cover"
          />
        </section>
      </section>
    </section>
  );
}
