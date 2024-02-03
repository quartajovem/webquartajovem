import Image from 'next/image';
import logo from '../../../public/logoAnimado.gif';
import { FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export function Footer() {
  return (
    <footer className="flex max-md:flex-col justify-center items-center md:items-end md:px-20 py-10 gap-10">
      <div className="flex flex-col items-start max-md:items-center w-2/3">
        <Image className="h-32 w-32 object-cover" src={logo} alt="Logo marca da Quarta Jovem e da UMP" />
        <p className="max-md:text-center">
          Av. Sen. Paulo Pessoa Guerra, 250 - Boa Vista, Garanhuns - Pernambuco, Brasil, 55292-455
        </p>
      </div>
      <div className="flex flex-col max-md:justify-center md:justify-end items-start">
        <div className="flex justify-center items-center gap-2">
          <FaInstagram size={25} />
          <p>@quartajovem</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdOutlineEmail size={25} />
          <p>quartajovemump@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
