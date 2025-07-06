import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full px-4 py-3 font-display border-b-white/60 border-[0.5px]">
      <ul className="flex gap-5 text-[#be9858] text-[14px]">
        <Link href={'/gallery'}>GALLERY</Link>
        <Link href={'/about'}>ABOUT</Link>
        <Link href={'/contact'}>CONTACT</Link>
      </ul>
    </div>
  )
}
