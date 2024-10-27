import TabelKtp from "@/components/ktp/TabelKtp";

export default function Home() {
  return (
    <main className="w-full h-fit min-h-[70svh] flex flex-col items-center justify-center gap-10">
      <h1 className="text-main-green font-bold text-2xl 2xl:text-3xl text-center mx-auto w-fit">
        Daftar Permintaan Pembuatan E-KTP
      </h1>
      <TabelKtp />
    </main>
  );
}
