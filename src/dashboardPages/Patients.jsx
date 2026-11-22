import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Patients(){
    const [patients, setPatients]= useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/patients")
        .then((response)=> response.json())
        .then((data)=> setPatients(data))
    },[])

    return(
        <div className="overview">
            <NavBar/>
            <div className="d-flex">
            <SideBar/>
                <div className="content">
                <h1 className="text-primary">Patients</h1>
                <div className="container-fluid">
                    <h4 className="text-primary p-2">Patient management</h4>
                    <form action="search">
                        <input className="form-control form-control-sm" placeholder="Search"/>
                        <button className="btn btn-sm btn-primary">Search</button>
                    </form>
                    <table className="table-sm">
                        <thead className="shadow">
                            <tr>
                                <th>Patient_Id</th>
                                <th>Name</th>
                                <th>Date_Admited</th>
                                <th>Ailment</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                           {patients.map((patient)=>{
                            return(
                                <tr key={patient.id}>
                                    <td>{patient.Patient_Id}</td>
                                    <td>{patient.Name}</td>
                                    <td>{patient.Date_Admited}</td>
                                    <td>{patient.Ailment}</td>
                                    <td>{patient.Status}</td>
                                    <td>{patient.Details}</td>
                                </tr>
                            )
                           })} 
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}