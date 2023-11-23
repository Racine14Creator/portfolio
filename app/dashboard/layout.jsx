import Navbar from "../Ui/dashboard/navbar/Navbar"
import Sidebar from "../Ui/dashboard/sidebar/Sidebar"

const layout = ({ children }) => {
    return (
        <>
            <div>
                <div>
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