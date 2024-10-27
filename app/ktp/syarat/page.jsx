import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-[90dvh] flex flex-col items-center justify-center gap-10">
      <h1 className="text-main-green font-bold text-2xl 2xl:text-3xl text-center mx-auto w-fit">
        Syarat Pembuatan E-KTP
      </h1>
      <section className="w-4/5 grid grid-cols-2 gap-14">
        <section className="flex flex-col gap-6">
          <section className="flex flex-col gap-2">
            <h2 className="font-bold">
              KTP baru bagi penduduk Warga Negara Indonesia (WNI) meliputi :
            </h2>
            <ul className="leading-[2rem] list-decimal">
              <li>
                Telah berusia 17 (tujuh belas) tahun atau sudah kawin atau
                pernah kawin
              </li>
              <li>Surat Pengantar dari RT/RW dan Kepala Desa/Kelurahan</li>
              <li>Foto copy Kartu Keluarga (KK)</li>
              <li>
                Foto copy Kutipan Akta Nikah/Akta Kawin bagi penduduk yang
                berusia 17 (tujuh belas) tahun
              </li>
              <li>Foto copy Kutipan Akta Kelahiran</li>
              <li>
                SKDLN, bagi penduduk WNI yang datang dari luar negeri karena
                pindah
              </li>
              <li>
                Pas foto 3 x 4 berwarna 2 lembar (bagi tahun kelahiran ganjil
                begron merah/tahun genap begron biru)
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="font-bold">KTP baru bagi Orang Asing meliputi :</h2>
            <ul className="leading-[2rem] list-decimal">
              <li>
                Telah berusia 17 (tujuh belas) tahun atau sudah kawin atau
                pernah kawin
              </li>
              <li>Surat Pengantar dari RT/RW dan Kepala Desa/Kelurahan</li>
              <li>Foto copy Kartu Keluarga (KK)</li>
              <li>
                Foto copy Kutipan Akta Nikah/Akta Kawin bagi penduduk yang
                berusia 17 (tujuh belas) tahun
              </li>
              <li>Foto copy Kutipan Akta Kelahiran</li>
              <li>Foto copy Paspor dan KITAP</li>
              <li>Surat Keterangan Catatan Kepolisian (SKCK)</li>
            </ul>
          </section>
        </section>
        <section className="flex flex-col gap-6">
          <section className="flex flex-col gap-2">
            <h2 className="font-bold">
              KTP karena hilang atau rusak bagi WNI atau Orang Asing Tinggal
              tetap meliputi :
            </h2>
            <ul className="leading-[2rem] list-decimal">
              <li>
                Surat Keterangan Kehilangan dari kepolisian atau KTP yang rusak
              </li>
              <li>Foto copy Kartu Keluarga (KK)</li>
              <li>Foto copy Paspor dan KITAP bagi orang Asing</li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="font-bold">
              KTP karena pindah datang bagi WNI atau Orang Asing meliputi :
            </h2>
            <ul className="leading-[2rem] list-decimal">
              <li>
                SKPD (Surat Keterangan Pindah/Surat Keterangan Pindah Datang)
              </li>
              <li>SKDLN bagi WNI yang datang dari luar negeri karena pindah</li>
              <li>
                KTP karena perpanjangan bagi WNI atau Orang Asing Tinggal Tetap
              </li>
              <li>Foto copy Kartu Keluarga (KK)</li>
              <li>KTP lama</li>
              <li>Foto copy Paspor dan KITAP bagi orang Asing</li>
              <li>
                Foto copy SKCK bagi orang asing yang memiliki izin tinggal tetap
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="font-bold">
              KTP karena perubahan data bagi WNI atau Orang Asing tinggal tetap
              meliputi :
            </h2>
            <ul className="leading-[2rem] list-decimal">
              <li>KK lama</li>
              <li>KTP lama</li>
              <li>
                Surat Keterangan/Pernyataan bukti perubahan peristiwa
                kependudukan dan peristiwa penting
              </li>
            </ul>
          </section>
        </section>
      </section>
      <Link
        href={"/ktp/pengajuan"}
        className="bg-main-green text-lg rounded-full w-fit px-6 py-1"
      >
        Ajukan Pembuatan KTP
      </Link>
    </main>
  );
}
