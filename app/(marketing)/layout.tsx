import { Footer } from "./_components/footer"
import { Navbar } from "./_components/nabar"

const marketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" bg-slate-100 h-full" >
            {/* nabar */}
            <Navbar/>
            <main className="pt-40 pb-40 bg-slate-100">
                {children}
            </main>
            <Footer/>
            {/* footer  */}
        </div>
    )
}
export default marketingLayout