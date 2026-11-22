import { Link } from "react-router";
import Summary from "../dashboardPages/Summary";

export default function SideBar(){
    return(
        <div className="d-flex">
            <nav className="navbar shadow-sm">
                <aside className="d-flex flex-column p-2">
                    <Link to="/dashboard" className="btn btn-sm btn-primary mb-3">Dashboard</Link>
                    <Link to="/patients" className="btn btn-sm btn-primary">Patients</Link>
                </aside>
            </nav>
            
        </div>
    )
}