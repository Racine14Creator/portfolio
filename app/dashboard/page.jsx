

import Sidebar from "../Ui/dashboard/sidebar/Sidebar"

const Dashboard = () => {
    return (
        <div className="flex max-h-screen h-screen">
            <div className="flex-1">
                <Sidebar />
            </div>
            <div className="main flex-3">
                <h3>Main</h3>
            </div>
        </div>
    )
}

export default Dashboard