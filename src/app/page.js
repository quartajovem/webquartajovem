import { BannerHome } from '@/components/BannerHome';
import { SobreNos } from '@/components/SobreNos';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="font-['Montserrat'] flex min-h-screen flex-col items-center justify-between">
      <BannerHome />
      <SobreNos />
    </main>
  );
}
