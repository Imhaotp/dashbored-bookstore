import { useState } from "react";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { useNavigate } from "react-router-dom";




function DashBoredLayouts() {
    const [showSideBar, setShowSideBar] = useState(true);
    const [activePage, setActivePage] = useState("dashboard");

    const navigate = useNavigate();

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    };

    const handleLogout = () => {
        navigate("/Login")
    }
    return (
        <div className="layout">
            {showSideBar && (
                <SideBar activePage={activePage} onPageChange={(setActivePage)} onLogout={handleLogout} />
            )}

            <div className="main-area">
                <Header onToggleSideBar={toggleSideBar} />
                <MainContent activePage={activePage} />
            </div>

        </div>

    )
}

export default DashBoredLayouts; 