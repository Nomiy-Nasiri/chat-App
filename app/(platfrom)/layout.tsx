import { ClerkProvider } from "@clerk/nextjs"

const PlatfromLayout = ({ children }: { children: React.ReactNode }) => {
return(
    <ClerkProvider>
        {children}
    </ClerkProvider>
)
}
export default PlatfromLayout