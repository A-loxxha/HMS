import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Dashboard(){
    return(
        <div className="overview">
            <NavBar/>
            <div className="d-flex">
                <SideBar/>
                <div>
                    
                </div>
            </div>
        </div>
    )
}