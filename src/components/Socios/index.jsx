import Image from 'next/image';
import Link from 'next/link';
import bannerSocios from '../../../public/bannerSocios.jpg';

export function Socios() {
  return (
    <section className="relative h-125 max-md:h-96 w-full flex flex-col justify-center items-center bg-gradient-to-r from-qjblue to-qjred">
      <div className="z-20 w-3/4">
        <h1 className="mb-10 max-md:mb-3 xl:w-10/12 xl:text-9xl md:text-7xl max-md:text-3xl uppercase font-bold transition-all duration-300">
          Se torne um sócio da Quarta Jovem
        </h1>
        <Link href="https://forms.gle/F4d6h6DVCb4ZAjFMA" legacyBehavior>
          <a
            className="bg-qjblack hover:bg-qjyellow p-3 max-md:p-2 uppercase text-md max-md:text-xs transition-all duration-300"
            target="_blank"
          >
            Clique e saiba mais
          </a>
        </Link>
      </div>
      <Image
        width={1000}
        height={1000}
        alt="Pessoas fazendo a inscrição na sociedade da UMP Quarta Igreja"
        src={bannerSocios}
        className="z-10 absolute w-full h-full object-cover opacity-20"
      />
    </section>
  );
}
