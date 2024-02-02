import Image from 'next/image';

export function BannerHome() {
  return (
    <section className="max-md:h-100 md:h-lvh w-full relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-20">
        <h2 className="text-white text-center font-['Montserrat'] font-semibold px-10 text-2xl md:text-3xl uppercase transition-all duration-500">
          Bem-vindo à
        </h2>
        <h1 className="text-white text-center font-['Montserrat'] font-extrabold px-10 text-6xl md:text-8xl uppercase transition-all duration-500">
          Quarta Jovem
          <br />
          __UMP
        </h1>
      </div>
      <div className="bg-qjblack opacity-65 max-md:h-100 md:h-lvh w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10" />
      <Image
        className="max-md:h-100 md:h-lvh w-full object-cover overflow-hidden transition-all duration-500 z-0"
        width={10000}
        height={10000}
        src="/bannerHome.jpg"
        alt="Jovens reunidos com a bandeira da UMP"
      />
      {/* <video
          src="/BackVideo.mp4"
          controls={false}
          type="video/mp4"
          playsInline
          autoPlay
          loop
          muted
          className="max-md:h-100 md:h-lvh w-full object-cover overflow-hidden"
        ></video> */}
    </section>
  );
}
