import Link from 'next/link';

export function Fotos() {
  return (
    <section className="py-10 w-full bg-qjblue flex max-md:flex-col max-md:justify-center max-md:items-center md:justify-evenly overflow-x-hidden">
      <img
        src="/bannerFotos.png"
        className="md:w-2/6 max-md:h-60 object-cover"
        alt="Duas polaroides na primeira 3 jovens abraçados mandando hang loose,
        na segunda fotos duas meninas de cabeça baixa orando e outra menina no fundo orando"
      />
      <div className="w-2/5 flex items-start justify-center max-md:items-center flex-col max-md:w-fit max-md:ml-0">
        <h1 className="text-[10vw] font-bold p-0 m-0">FOTOS</h1>
        <Link href="https://drive.google.com/drive/folders/1tPo0vcCUGlcL1c7RcaJ4YGOSb9ly9XZo" legacyBehavior>
          <a
            className="bg-qjred hover:bg-qjyellow py-3 px-6 max-md:p-2 text-md max-md:text-xs transition-all duration-300 font-semibold"
            target="_blank"
          >
            ACESSE AQUI
          </a>
        </Link>
      </div>
    </section>
  );
}
