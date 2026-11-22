import { Link } from "react-router";

export default function SideBar(){
    return(
        <div className="d-flex">
            <nav className="navbar shadow-sm align-items-start position-fixed top-0 start-0 vh-100 p-3">
                <aside className="d-flex flex-column p-2">
                    <Link to="/dashboard" className="btn btn-sm btn-primary mb-3">Dashboard</Link>
                    <Link to="/patients" className="btn btn-sm btn-primary">Patients</Link>
                </aside>
            </nav>
            
        </div>
    )
}