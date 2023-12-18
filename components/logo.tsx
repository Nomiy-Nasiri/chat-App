import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { textFont } from "@/app/(marketing)/page"
const Logo = () => {
    return (
        <Link href="/">
            <div className={cn("hover:opacity-70 transition items-center gap-x-2 hidden md:flex", textFont.className)}>
                <Image
                    alt="logo"
                    src="/logo.svg"
                    height={40}
                    width={40} />
                <p className="text-lg text-neutral-700 pb-1">Gapshap</p>
            </div>
        </Link>
    )
}
export default Logo
