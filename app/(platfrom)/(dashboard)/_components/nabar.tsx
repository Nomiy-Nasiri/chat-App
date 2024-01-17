import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"         
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"          

export const DashboardNavbar = () => {          
    return (
        <nav className="fixed px-4 z-50 top-0 w-full h-14 bg-white border-b shadow-sm flex items-center">
            {/* for mobile  */}
            <div className=" flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>                  
                <Button variant="primary" size="sm" className="rounded hidden md:block h-auto py-1.5 px-2">
                    create
                </Button>
                <Button variant="primary" size="sm" className="rounded block md:hidden">
                    <Plus className="h-4 w-4"/>
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
            <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl='/organizationUrl/:id'
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"              
            appearance={{
                elements:{
                    rootBox:{
                        display: "flex",          
                        justifyContent:"center",
                        alignContent: "center"
                    },
                }
            }}
            />
            <UserButton
            afterSignOutUrl="/"
            appearance={{
                elements : {
                    avatarBox: {
                        height: "30",
                        width : "30"
                    }
                }
            }}/>
            </div>
        </nav>
    )
}