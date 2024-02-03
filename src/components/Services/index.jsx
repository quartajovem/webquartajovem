export function Services() {
  return (
    <section className="max-md:h-max md:h-lvh w-full flex gap-2 justify-around max-md:flex-wrap">
      <div className="w-full relative">
        <div className="absolute bg-qjblue z-10 w-11/12 m-auto mx-auto inset-x-0 top-20 flex justify-between m-0 px-2 items-center">
          <p className="font-bold text-2vw max-md:text-4xl p-0 m-0">CÉLULAS</p>
          <p className="text-wrap font-semibold leading-5 text-right">
            SEGUNDAS
            <br /> ÀS 19H30
          </p>
        </div>
        <img
          className="brightness-50 max-md:h-96 max-md:w-full max-md:object-cover"
          src="/cellService.jpeg"
          alt="Jovens reunidos sentados discutindo a bíblia"
        />
      </div>
      <div className="w-full relative">
        <div className="absolute bg-qjred z-10 w-11/12 m-auto mx-auto inset-x-0 top-20 flex justify-between m-0 px-2 items-center">
          <p className="font-bold text-2vw max-md:text-4xl p-0 m-0">CULTOS</p>
          <p className="text-wrap font-semibold leading-5 text-right">
            SÁBADOS
            <br /> ÀS 18H
          </p>
        </div>
        <img
          className="brightness-50 max-md:h-96 max-md:w-full max-md:object-cover"
          src="/receptionService.jpeg"
          alt="Três jovens sorrindo na porta da igreja com placas de recepção"
        />
      </div>
      <div className="w-full relative">
        <div className="absolute bg-qjyellow z-10 w-11/12 m-auto mx-auto inset-x-0 top-20 flex justify-between m-0 px-2 items-center">
          <p className="font-bold text-2vw max-md:text-4xl p-0 m-0">EBD</p>
          <p className="text-wrap font-semibold leading-5 text-right">
            DOMINGOS
            <br /> ÀS 9H30
          </p>
        </div>
        <img
          className="brightness-50 max-md:h-96 max-md:w-full max-md:object-cover"
          src="/bibleSchoolService.jpg"
          alt="Jovens sentados na cadeira prestando atenção ao homem com microfone atrás do púlpito"
        />
      </div>
    </section>
  );
}
