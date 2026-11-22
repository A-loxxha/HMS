import { Link } from "react-router";
import NavBar from "../components/NavBar";

export default function Home(){
    return(
        <div className="landing">
            <NavBar/>
            <div className="landing-container d-flex flex-column flex-wrap p-5">
                <h1 className="pt-5">Your Trasted Partner in Health Care</h1>
                <h4 className="pt-5">Smarter Hospital Operations and Better Patient Care</h4>
                <p className="pt-3">Replace scattered paperwork and long wait times with one unified platform. Manage patient records, doctor schedules, pharmacy inventory, and billing seamlessly so your staff can focus on saving lives, not chasing files</p>
            </div>
            <Link to="/dashboard" className="ml-5 btn btn-light">Explore<i class="bi bi-chevron-double-right"></i></Link>
        </div>
    )
}