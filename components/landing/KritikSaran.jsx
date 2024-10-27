import Link from "next/link";

export default function KritikSaran() {
  return (
    <section className="my-40 w-full flex flex-col items-center justify-center gap-12">
      <h2 className="text-main-green font-bold text-2xl 2xl:text-3xl text-center mx-auto w-fit">
        Kritik <span className="text-black">& Saran</span>
      </h2>
      <section className="w-3/5 grid grid-cols-3 gap-8 items-center">
        <form action="" className="flex flex-col gap-4 col-span-2">
          <div className="flex flex-col">
            <label htmlFor="nama">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="bg-neutral-200 rounded-lg text-lg px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Alamat Email</label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="bg-neutral-200 rounded-lg text-lg px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pesan">Pesan</label>
            <textarea
              name="pesan"
              id="pesan"
              rows={4}
              className="resize-none bg-neutral-200 rounded-lg text-lg px-2 py-1"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-main-green text-lg rounded-full w-fit px-6 py-1"
          >
            KIRIM
          </button>
        </form>

        <div className="bg-main-green p-6 rounded-2xl h-fit relative">
          <div
            className=" 
            font-poppins font-medium text-[14px] leading-[21px] 
            text-black"
          >
            Kecamatan Krian Jl. Gubernur Soenandar Priyo Sudarmo No.1 Sidowaras,
            Desa Kraton, kecamatan Krian, Kabupaten Sidoarjo, Jawa Timur 61262
            <span className="block font-extralight">
              Telpon : (031) 8971010
            </span>{" "}
            <span className="block font-extralight">Fax : 0318971010</span>{" "}
            <span className="inline font-extralight">Email :</span>
            <a
              href="mailto:krian@sidoarjokab.go.id"
              className="text-blue-600 inline font-extralight"
            >
              krian@sidoarjokab.go.id
            </a>
            <span className="font-extralight block">
              E-SKM : Survey Kepuasan Kec. Krian
            </span>
          </div>
          <div className="absolute w-full h-fit px-4 py-2 text-center bg-neutral-100 rounded-lg -bottom-10 left-0">
            <Link
              href={"https://maps.app.goo.gl/AeAgp2sQGe8G4Yjw9"}
              className="underline font-light"
            >
              Lihat di google maps
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
