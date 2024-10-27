import { Desktop } from "@phosphor-icons/react";
import LayananCard from "./layanan/LayananCard";
import Link from "next/link";

export default function Layanan() {
  return (
    <section className="my-24 w-full flex flex-col items-center justify-center gap-12">
      <h2 className="text-main-green font-bold text-2xl 2xl:text-3xl text-center mx-auto w-fit">
        Layanan
      </h2>
      <section className="w-4/5 2xl:w-4/6 mx-auto flex items-center justify-center gap-24 h-full">
        <LayananCard
          title={"Izin Mendirikan Bangunan (IMB)"}
          syarat={
            "Surat Keterangan Kepemilikan Tanah Kartu Tanda Penduduk (KTP) Kartu Keluarga (KK) Pelunasan..."
          }
        />
        <LayananCard
          title={"Kartu Pencari Kerja)"}
          syarat={
            "Surat Permohonan Kartu Kuning Kartu Tanda Penduduk (KTP) Kartu Keluarga (KK) Foto copy ijasah SD s/d Terakhir..."
          }
        />
        <Link href={"/ktp/syarat"}>
          <LayananCard
            title={"Kartu Tanda Penduduk (E-KTP)"}
            syarat={
              "KTP baru bagi penduduk Warga Negara Indonesia (WNI) meliputi : Telah berusia 17 (tujuh belas) tahun atau sudah kawin atau pernah kawin..."
            }
          />
        </Link>
      </section>
      <div className="w-fit mx-auto bg-light-blue rounded-full px-6 py-2 text-black shadow-xl cursor-pointer">
        <p>Lihat Layanan Lainnya</p>
      </div>
    </section>
  );
}
