import { useState } from "react";

function AddNewdata() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

        const AddStudent = async (event) => {
            console.log(id,name,email);
            const url="http://localhost:3000/students";
            let response=await fetch(url, {
                method: "Post",
                body: JSON.stringify({ id, name, email }),
            });
            response=response.json();
            if(response){
                alert("New Student Added SucessFully..")
            }
        };
    return (
        <>
           <h2 className="text-center text-primary mt-4">Add New Data</h2>

            <div className="container d-flex justify-content-center mt-4">
                <form onSubmit={AddStudent} className="w-50 border p-4 shadow rounded">

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                            placeholder="Type Here ID"
                            onChange={(event) => setId(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            placeholder="Type Here Name"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            placeholder="Type Here Email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="text-center">
                        <button onClick={AddStudent} className="btn btn-primary">
                            Add New Data
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
}
export default AddNewdata;