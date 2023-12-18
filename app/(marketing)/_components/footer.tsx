import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"


export const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full bg-slate-100  border-t p-4">
            <div className="md:max-w-screen-2xl mx-auto flex w-full items-center justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="ghost">
                        Privacy and Policy
                    </Button>
                    <Button size="sm" variant="ghost">
                        Terms and Conditions
                    </Button>
                </div>
            </div>

        </div>
    )
}