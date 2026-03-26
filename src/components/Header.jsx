function Header({ onToggleSideBar }) {
    return (
        <div className="header">
            <button className="toggle-btn" onClick={onToggleSideBar}>menu</button>
            
        </div>
    );
}

export default Header; 