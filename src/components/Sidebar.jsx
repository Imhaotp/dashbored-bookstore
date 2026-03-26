import { navItems }  from "../data/data"

function SideBar({ activePage, onPageChange, onLogout }) {
   

    return (
        <aside className="sidebar">
            <h2 className="brand">Admin</h2>
            <nav>
                <ul className="nav-list">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={activePage === item.id ? "nav-item active" : "nav-title"}
                            onClick={() => onPageChange(item.id)}>
                            {item.label}

                        </li>


                    ))}
                    <button className="Logout-btn" onClick={onLogout}>Logout</button>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar