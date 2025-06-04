import Image from 'next/image';
import Logo from '@/public/Logo.svg';
import Hero from './components/Hero';
import Posts from './components/Posts';

export default function Home() {
  return (
    <div className=" min-h-screen overflow-x-hidden ">
      {/* Logo */}
      <div className="flex  absolute top-[35px] left-[45px]">
        <Image src={Logo} alt="Techflob" />
        <p className="text-[24px] font-black">TECHFLOB</p>
      </div>
      <Hero />
      <Posts />
      <div className="h-screen"></div>

    </div>
  );
}
