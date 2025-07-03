import Image from "next/image";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col min-h-screen bg-[url('/Home1.png')] lazy bg-no-repeat bg-cover bg-center">
      <Navbar />
      <p className="text-[#be9858] font-display text-center text-[25px] font-light mt-6">JEWELRY & WATCH <br /><span className="text-[40px]">PHOTOGRAPHY</span></p>
      <span className="text-white/90 tracking-wider absolute bottom-24 font-display text-center text-[14px] left-3 font-light">GET IN TOUCH</span>
      <ul className="flex gap-2 absolute left-3 bottom-16">
        <Link href={'tel:+989120687097'}>
          <Image src={'/call.svg'} width={24} height={24} alt='pic' loading="lazy"/>
        </Link>
        <Link href={"mailto:mansournosrati69@gmail.com"}>
          <Image src={'/message.svg'} width={24} height={24} alt='pic' loading="lazy"/>
        </Link>
        <Link href={'https://www.instagram.com/behbiin?igsh=MTE5bjBuYnlrb210cw=='}>
          <Image src={'/instagram.svg'} width={24} height={24} alt='pic' loading="lazy"/>
        </Link>
      </ul>
      <Button hrf="/gallery" cls='border-[0.5px] absolute border-white/80 text-white/90 bottom-10 right-15 w-fit py-2 px-10 font-display tracking-widest rounded-[3px] text-[14px] backdrop-blur-[3px]'>
        GALLERY
      </Button>
    </div>
  );
}
