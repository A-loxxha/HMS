import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Patients(){
    const [patients, setPatients]= useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const[submittedSearch, setSubmittedSearch] = useState("")
    useEffect(()=>{
        fetch("http://localhost:3000/patients")
        .then((response)=> response.json())
        .then((data)=> setPatients(data))
    },[])

    function deletePatient(id){
        fetch(`http://localhost:3000/patients${id}`,{
            method:"DELETE"
        }).then(()=>setPatients(patients.filter((patient)=> patient.id !== id)))
    }

    function UpdatePatient(id){
        fetch(`http://localhost:300/patients${id}`,{
            method:"PATCH"
        })
    }

    const filterPatients = patients.filter((patient)=>{
        const term = submittedSearch.toLowerCase()
        return (
            patient.Name?.toLowerCase().includes(term) ||
            patient.Patient_Id?.toLowerCase().includes(term)
        )
    })
    function handleSearch(event){
        event.preventDefault()
        setSubmittedSearch(searchTerm)
    }

    return(
        <div className="overview">
            <NavBar/>
            <div className="d-flex">
            <SideBar/>
                <div className="content">
                <h1 className="text-primary">Patients</h1>
                <div className="container-fluid">
                    <h4 className="text-primary p-2">Patient management</h4>
                    <form onSubmit={handleSearch}>
                        <input className="form-control form-control-sm" value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)} placeholder="Search"/>
                        <button type="submit" className="btn btn-sm btn-primary">Search</button>
                    </form>

                    <table className="table table pt-3">
                        <thead className="shadow">
                            <tr>
                                <th>Patient_Id</th>
                                <th>Name</th>
                                <th>Date_Admited</th>
                                <th>Ailment</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {filterPatients.map((patient)=>{
                            return(
                                <tr className="shadow" key={patient.id}>
                                    <td><label className="text-primary">Patient_Id:</label>{patient.Patient_Id}</td>
                                    <td><label className="text-primary">Name:</label>{patient.Name}</td>
                                    <td><label className="text-primary">Date_Admited:</label>{patient.Date_Admited}</td>
                                    <td><label className="text-primary">Ailment:</label>{patient.Ailment}</td>
                                    <td><label className="text-primary">Status:</label>{patient.Status}</td>
                                    <td><label className="text-primary">Details:</label>{patient.Details}</td>
                                    <td>
                                        <button className="btn btn-primary">Update</button>
                                        <button onClick={()=>{deletePatient(patient.id)}} className="btn btn-danger">Delete</button>
                                    </td>
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