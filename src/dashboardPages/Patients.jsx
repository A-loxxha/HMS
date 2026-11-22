import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Patients(){

    return(
        <div className="overview">
            <NavBar/>
            <div className="d-flex">
            <SideBar/>
                <div className="pl-3">
                <h1 className="text-primary">Patients</h1>
                <div className="container-fluid">
                    <h4 className="text-primary p-2">Patient management</h4>
                    <form action="search">
                        <input className="form-control form-control-sm" placeholder="Search"/>
                        <button className="btn btn-sm btn-primary">Search</button>
                    </form>
                    <table className="table-sm">
                        <thead>
                            <th>Patient_Id</th>
                            <th>Name</th>
                            <th>Date_Admited</th>
                            <th>Ailment</th>
                            <th>Status</th>
                            <th>Details</th>
                        </thead>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}