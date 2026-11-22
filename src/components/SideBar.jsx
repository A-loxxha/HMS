import { Link } from "react-router";

export default function SideBar(){
    return(
        <div className="d-flex">
            <nav className="navbar shadow-sm">
                <aside className="d-flex flex-column">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    <Link to="/patient" className="nav-link">Patients</Link>
                </aside>
            </nav>
        </div>
    )
}