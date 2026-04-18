import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Displaydata() {
    const navigate=useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        renderData();
    }, []);

    async function renderData() {
        const url = "http://localhost:3000/students";
        let response = await fetch(url);
        response = await response.json();
        setStudents(response);
    }
    const deleteData=async(id)=>{
        const url="http://localhost:3000/students";
        let response = await fetch(url+"/"+id,{
            method: "delete",
        });
        response=await response.json();
        if(response){
            alert("Data is Deleted.")
             renderData();
        }
    };
    const EditStudentdata=(id)=>{
        navigate("/edit/"+id);

    }

    return (
        <>
            <h2 className="text-center text-primary"> Displaydata From Fetch API</h2>

            <div className="container mt-4">
                <table className="table table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((students) => (
                            <tr key={students.id}>
                                <td>{students.id}</td>
                                <td>{students.name}</td>
                                <td>{students.email}</td>
                                <td>
                                    <button onClick={()=>deleteData(students.id)} className="btn btn-danger">Delete</button>
                                </td>
                                <td>
                                    <button onClick={()=>EditStudentdata(students.id)}className="btn btn-warning">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    );
}

export default Displaydata;