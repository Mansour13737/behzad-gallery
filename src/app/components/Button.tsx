import Link from "next/link";

interface Prps {
    children: React.ReactNode;
    cls: string;
    hrf : string;
}
export default function Button({ children, cls , hrf }: Prps) {
    return (
        <Link href={hrf}>
            <button className={`${cls}`}>
                {children}
            </button>
        </Link>
    )
}
