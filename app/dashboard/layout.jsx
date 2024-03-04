import Navbar from "../Ui/dashboard/navbar/Navbar"
import Sidebar from "../Ui/dashboard/sidebar/Sidebar"


const layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="h-screen">
                <div className="w-[220px] h-screen bg-slate-600">
                    <Sidebar />
                    <h3>Sidebar</h3>
                </div>
                <div>
                    <Navbar />
                    {children}
                </div>
            </div>
        </>
    )
}

export default layout