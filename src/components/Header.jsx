import { FiMenu } from "react-icons/fi";

function Header({ onToggleSideBar }) {
    return (
        <div className="header">

            <FiMenu size={24}
                className="toggle-btn" 
                onClick={onToggleSideBar}
            />

            <h2>MYBOOKS</h2>
        </div>
    );
}

export default Header; 