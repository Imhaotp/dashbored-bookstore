import { navItems } from "../data/data";
import { FaSignOutAlt } from "react-icons/fa";

function SideBar({ activePage, onPageChange, onLogout }) {


    return (
        <aside className="sidebar">
            <h2 className="brand">Admin</h2>
            <nav>
                <ul className="nav-list">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li
                                key={item.id}
                                className={activePage === item.id ? "nav-item active" : "nav-item"}
                                onClick={() => onPageChange(item.id)}
                            >
                                <Icon />
                                <span>{item.label}</span>
                            </li>
                        );
                    })}
                    <FaSignOutAlt 
  onClick={onLogout}
  className="logout-icon"
  role="button"
  tabIndex={0}
/>

                </ul>
            </nav>
        </aside>
    )
}

export default SideBar