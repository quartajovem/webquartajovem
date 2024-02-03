import { BannerHome } from '@/components/BannerHome';
import { SobreNos } from '@/components/SobreNos';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <main className="font-['Montserrat'] flex min-h-screen flex-col items-center justify-between">
      <BannerHome />
      <SobreNos />
      <Services />
    </main>
  );
}
