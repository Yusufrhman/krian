import Berita from "@/components/landing/Berita";
import Galeri from "@/components/landing/Galeri";
import KritikSaran from "@/components/landing/KritikSaran";
import Layanan from "@/components/landing/Layanan";
import LinkTerkait from "@/components/landing/LinkTerkait";
import MainHero from "@/components/landing/Mainhero";



export default function Home() {
  return (
    <main className="w-full h-fit">
      <MainHero />
      <Layanan />
      <Berita />
      <Galeri />
      <KritikSaran />
      <LinkTerkait />
    </main>
  );
}
