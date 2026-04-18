import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function Editdata() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const { id: paramId } = useParams();   // 
    const navigate = useNavigate();

    const url = `http://localhost:3000/students/${paramId}`;

    useEffect(() => {
        getDatabyIdInTextbox();
    }, []);

    const getDatabyIdInTextbox = async () => {
        let response = await fetch(url);
        response = await response.json();

        setId(response.id);
        setName(response.name);
        setEmail(response.email);
    };

    const updateData = async (e) => {
        e.preventDefault();

        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, email })
        });

        alert("Data Updated");
        navigate("/");  
    };

    return (
        <>
            <h2 className="text-center text-primary mt-4">Edit Data For Student..</h2>

            <div className="container d-flex justify-content-center mt-4">
                <form onSubmit={updateData} className="w-50 border p-4 shadow rounded">

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                            placeholder="Type Here ID"
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            placeholder="Type Here Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            placeholder="Type Here Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary">
                            Update Data
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Editdata;