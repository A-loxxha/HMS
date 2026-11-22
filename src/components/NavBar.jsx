import { Link } from "react-router";

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg shadow-sm">
            <div className="container-fluid">

                <Link className="navbar-brand fw-bold" to="/">
                    <span className="text-primary">HMS</span>
                </Link>

                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mNavbar"
                    aria-controls="mNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="mNavbar">
                    <ul className="navbar-nav d-flex flex-row justify-content-between flex-wrap p-2">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link text-light">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light">Appointment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light">Patients</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light">Departments</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-3">
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                            <i className="bi bi-person-circle"></i>
                            <span>User</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                            <Link className="dropdown-item" to="/profile">
                                Profile
                            </Link>
                            </li>

                            <li>
                            <Link className="dropdown-item" to="/settings">
                                Settings
                            </Link>
                            </li>

                            <li>
                            <hr className="dropdown-divider" />
                            </li>

                            <li>
                            <button className="dropdown-item text-danger">
                                Logout
                            </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}