import Link from "next/link";

interface Prps {
    children: React.ReactNode;
    cls: string;
    hrf : string;
    type? : "button" | "submit" | "reset" | undefined;
}
export default function Button({ children, cls , hrf,type }: Prps) {
    return (
        <Link href={hrf}>
            <button className={`${cls}`} type={type}>
                {children}
            </button>
        </Link>
    )
}
