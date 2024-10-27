import Image from "next/image";

export default function BeritaCard(
    {title, imgSrc}
) {
    return (
      <div className="w-full h-full rounded-3xl bg-white border-b border-x border-main-green border-dashed overflow-hidden">
        <div className="overflow-hidden">
          <Image src={imgSrc} alt="" className="scale-105" />
          <article className="px-6 py-6 flex flex-col gap-4">
            <section className="flex justify-between text-black font-light text-sm 2xl:text-lg">
              <p>Admin, 17 Agustus 2024</p>
              <p>2 hari yang lalu</p>
            </section>
            <section>
              <h4 className="text-dark-blue font-bold text-base 2xl:text-xl">{title}</h4>
            </section>
            <section className="flex justify-between items-center">
              <span className="flex gap-1 items-center">
                <svg
                  width="116"
                  height="24"
                  viewBox="0 0 116 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.5L14.5819 8.4463H22.9371L16.1776 13.3574L18.7595 21.3037L12 16.3926L5.24047 21.3037L7.82238 13.3574L1.06285 8.4463H9.41809L12 0.5Z"
                    fill="#DCD300"
                  />
                  <path
                    d="M35 0.5L37.5819 8.4463H45.9371L39.1776 13.3574L41.7595 21.3037L35 16.3926L28.2405 21.3037L30.8224 13.3574L24.0628 8.4463H32.4181L35 0.5Z"
                    fill="#DCD300"
                  />
                  <path
                    d="M58 0.5L60.5819 8.4463H68.9371L62.1776 13.3574L64.7595 21.3037L58 16.3926L51.2405 21.3037L53.8224 13.3574L47.0628 8.4463H55.4181L58 0.5Z"
                    fill="#DCD300"
                  />
                  <path
                    d="M81 0.5L83.5819 8.4463H91.9371L85.1776 13.3574L87.7595 21.3037L81 16.3926L74.2405 21.3037L76.8224 13.3574L70.0628 8.4463H78.4181L81 0.5Z"
                    fill="#DCD300"
                  />
                  <path
                    d="M104 0.5L106.582 8.4463H114.937L108.178 13.3574L110.76 21.3037L104 16.3926L97.2405 21.3037L99.8224 13.3574L93.0628 8.4463H101.418L104 0.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <p className="text-black font-light">4.8</p>
              </span>
              <section className="flex justify-between gap-6">
                <span className="flex gap-1 items-center">
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.41602 9.5H6.42602M10.416 9.5H10.426M14.416 9.5H14.426M19.416 9.5C19.416 13.918 15.386 17.5 10.416 17.5C8.94465 17.505 7.49081 17.1808 6.16102 16.551L1.41602 17.5L2.81102 13.78C1.92802 12.542 1.41602 11.074 1.41602 9.5C1.41602 5.082 5.44602 1.5 10.416 1.5C15.386 1.5 19.416 5.082 19.416 9.5Z"
                      stroke="#2E3E5C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-black font-light">20</p>
                </span>
                <span className="flex gap-1 items-center">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0187 8.56066C10.7374 8.84196 10.3558 9 9.95801 9C9.56018 9 9.17865 8.84196 8.89735 8.56066C8.61604 8.27936 8.45801 7.89782 8.45801 7.5C8.45801 7.10218 8.61604 6.72064 8.89735 6.43934C9.17865 6.15804 9.56018 6 9.95801 6C10.3558 6 10.7374 6.15804 11.0187 6.43934C11.3 6.72064 11.458 7.10218 11.458 7.5C11.458 7.89782 11.3 8.27936 11.0187 8.56066Z"
                      fill="#2E3E5C"
                      stroke="#2E3E5C"
                    />
                    <path
                      d="M9.95802 14C5.75996 14 2.19723 11.277 0.941467 7.5C2.19723 3.72301 5.75996 1 9.95802 1C14.1561 1 17.7188 3.72301 18.9746 7.5C17.7188 11.277 14.1561 14 9.95802 14ZM13.14 10.682C13.9839 9.83807 14.458 8.69347 14.458 7.5C14.458 6.30653 13.9839 5.16193 13.14 4.31802C12.2961 3.47411 11.1515 3 9.95802 3C8.76454 3 7.61995 3.47411 6.77603 4.31802C5.93212 5.16193 5.45802 6.30653 5.45802 7.5C5.45802 8.69347 5.93212 9.83807 6.77603 10.682C7.61995 11.5259 8.76454 12 9.95802 12C11.1515 12 12.2961 11.5259 13.14 10.682Z"
                      fill="#2E3E5C"
                      stroke="#2E3E5C"
                    />
                  </svg>

                  <p className="text-black font-light">324</p>
                </span>
              </section>
            </section>
          </article>
        </div>
      </div>
    );
}