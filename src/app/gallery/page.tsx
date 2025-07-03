import Button from "../components/Button";
import Image from "next/image";

const gold = [
    { id: 1, src: '/gallery/1.png' },
    { id: 2, src: '/gallery/2.png' },
    { id: 3, src: '/gallery/3.png' },
    { id: 4, src: '/gallery/4.png' },
    { id: 5, src: '/gallery/5.png' },
    { id: 6, src: '/gallery/6.png' },
    { id: 7, src: '/gallery/7.png' },
    { id: 8, src: '/gallery/8.png' },
    { id: 9, src: '/gallery/9.png' },
    { id: 10, src: '/gallery/10.png' }
]
const watch = [
    { id: 11, src: '/gallery/11.png' },
    { id: 12, src: '/gallery/12.png' },
    { id: 13, src: '/gallery/13.png' },
    { id: 14, src: '/gallery/14.png' },
    { id: 15, src: '/gallery/15.png' },
    { id: 16, src: '/gallery/16.png' },
]

const arch = [
    { id: 17, src: '/gallery/17.png' },
    { id: 18, src: '/gallery/18.png' },
    { id: 19, src: '/gallery/19.png' },
    { id: 20, src: '/gallery/20.png' },
]

const other = [
    { id: 21, src: '/gallery/21.png' },
    { id: 22, src: '/gallery/22.png' },
    { id: 23, src: '/gallery/23.png' },
]
export default function Gallery() {
    return (
        <div className="flex flex-col w-full h-screen">
            <div className="w-full py-6 text-[#be9858] font-display text-center text-[30px] font-light bg-gray-700 ">
                <span>GOLD & JEWELRY</span>
            </div>
            <ul className="flex flex-col ">
                {gold.map((item) => (
                    <li key={item.id}>
                        <Image src={item.src} width={2888} height={1626} alt="Pic" className="w-full" />
                    </li>
                ))}
            </ul>
            <div className="w-full py-6 tracking-wider text-[#be9858] font-display text-center text-[30px] font-light bg-gray-700 ">
                <span>WATCH</span>
            </div>
            <ul className="flex flex-col ">
                {watch.map((item) => (
                    <li key={item.id}>
                        <Image src={item.src} width={2888} height={1626} alt="Pic" className="w-full" />
                    </li>
                ))}
            </ul>
            <div className="w-full py-6 tracking-wider text-[#be9858] font-display text-center text-[30px] font-light bg-gray-700 ">
                <span>ARCHITECTURE</span>
            </div>
            <ul className="flex flex-col ">
                {arch.map((item) => (
                    <li key={item.id}>
                        <Image src={item.src} width={2888} height={1626} alt="Pic" className="w-full" />
                    </li>
                ))}
            </ul>
            <div className="w-full py-6 tracking-wider text-[#be9858] font-display text-center text-[30px] font-light bg-gray-700 ">
                <span>OTHER</span>
            </div>
            <ul className="flex flex-col ">
                {other.map((item) => (
                    <li key={item.id}>
                        <Image src={item.src} width={2888} height={1626} alt="Pic" className="w-full" />
                    </li>
                ))}
            </ul>
            <Button hrf='/' cls='border-[0.5px] fixed border-black/80 text-black/90 bottom-2 right-[50%] translate-x-[50%] w-fit py-1 px-7 font-display tracking-widest rounded-[3px] text-[14px] backdrop-blur-[1.5px]' >
                BACK
            </Button>
        </div>
    )
}
