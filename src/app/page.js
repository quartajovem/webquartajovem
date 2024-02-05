import { BannerHome } from '@/components/BannerHome';
import { SobreNos } from '@/components/SobreNos';
import { Services } from '@/components/Services';
import { Socios } from '@/components/Socios';
import { Fotos } from '@/components/Fotos';

export default function Home() {
  return (
    <main className="font-['Montserrat'] text-white flex min-h-screen flex-col items-center justify-between">
      <BannerHome />
      <SobreNos />
      <Services />
      <Socios />
      <Fotos />
    </main>
  );
}
