import Navbar from "../Ui/dashboard/navbar/Navbar"
import Sidebar from "../Ui/dashboard/sidebar/Sidebar"

const menuItems = []

const layout = ({ children }) => {
    return (
        <>
            <div>
                <div className="h-screen bg-slate-600">
                    <Sidebar />
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