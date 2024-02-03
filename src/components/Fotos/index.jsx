import Link from 'next/link';

export function Fotos() {
  return (
    <section className="w-full bg-qjblue flex max-md:flex-wrap justify-evenly">
      <img
        src="/bannerFotos.png"
        className="w-3/5 max-md:w-full"
        alt="Duas polaroides na primeira 3 jovens abraçados mandando hang loose, na segunda fotos duas meninas de cabeça baixa orando e outra menina no fundo orando"
      />
      <div className="w-2/5 flex items-start justify-center flex-col ml-[-12rem] max-md:w-fit max-md:ml-0 pb-10">
        <p className="text-[10vw] font-semibold p-0 m-0">FOTOS</p>
        <Link href="https://drive.google.com/drive/folders/1tPo0vcCUGlcL1c7RcaJ4YGOSb9ly9XZo" legacyBehavior>
          <a
            className="bg-qjred hover:bg-qjyellow p-3 px-6 max-md:p-2 text-md max-md:text-xs transition-all duration-300 ml-3 font-semibold"
            target="_blank"
          >
            ACESSE AQUI
          </a>
        </Link>
      </div>
    </section>
  );
}
