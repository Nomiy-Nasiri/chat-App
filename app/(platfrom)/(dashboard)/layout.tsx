import { DashboardNavbar } from "./_components/nabar"

const dashboardLayout = ({children}:{
  children : React.ReactNode
}) => {
     return(            
                
        <div className="h-full">        
            <DashboardNavbar/>         
            {children}                            
        </div>
     )
}
export default dashboardLayout