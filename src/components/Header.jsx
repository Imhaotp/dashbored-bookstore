function Header({ onToggleSideBar }) {
    return (
        <div className="header">
            <button className="toggle-btn" onClick={onToggleSideBar}>menu</button>
            <h2>MYBOOKS</h2>
        </div>
    );
}

export default Header; 