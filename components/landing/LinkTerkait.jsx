import LINK1IMG from "@/public/link-1.png";
import LINK2IMG from "@/public/link-2.png";
import LINK3IMG from "@/public/link-3.png";
import LINK4IMG from "@/public/link-4.png";
import Image from "next/image";
export default function LinkTerkait() {
  return (
    <section className="my-24 w-full flex flex-col items-center justify-center gap-12">
      <h2 className="text-main-green font-bold text-2xl 2xl:text-3xl text-center mx-auto w-fit">
        Link <span className="text-black">terkait</span>
      </h2>
      <ul className="flex items-center justify-center gap-20">
        <li>
          <Image src={LINK1IMG} alt="" height={100} />
        </li>
        <li>
          <Image src={LINK2IMG} alt="" height={100} />
        </li>
        <li>
          <Image src={LINK3IMG} alt="" height={100} />
        </li>
        <li>
          <Image src={LINK4IMG} alt="" height={100} />
        </li>
      </ul>
    </section>
  );
}
