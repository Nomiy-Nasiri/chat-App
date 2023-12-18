import { LucideAlignCenterHorizontal, Medal, StarHalf } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { Button } from "@/components/ui/button"

export const textFont = Poppins({
    subsets: [
        "latin"

    ],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
    ]
})
// text-3xl md:text-6xl text-center text-neutral-800 mb-6

const marketingPage = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <LucideAlignCenterHorizontal className="h-6 w-6 mr-2" />
                    No. 1 Chat Web Aplication
                </div>
                <h1 className={cn("text-3xl md:text-6xl text-center text-neutral-800 mb-6", textFont.className)}>Gapshap connect's Global Families. </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">Skip the Distance </div>
            </div>
            <div className={cn("text-sm md:text-1xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
                Talk, Meet, share and present your Memories do gasphap andMeet, share and present your Memor Meet, share and present your Memor wast your time
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                    Get Gaspshap for free
                </Link>
            </Button>
        </div>
    )
}
export default marketingPage