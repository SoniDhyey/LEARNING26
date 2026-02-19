import axios from 'axios';
import React, { useState } from 'react'


export const ApiDemo3 = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/quotes");
            setUsers(response.data.quotes);

        } catch (error) {
            console.log(error)
        }
    }
            return (
                <div style={{ textAlign: "center" }}>
                    <h1>API DEMO3</h1>
                    <button onClick={getUsers}>GET</button>
                    <br />
                    <br />
                    {users && users.length >0 && (
                    <table style ={{border:"10px solid black", padding:"90px", backgroundColor:'violet', margin:"auto",height:"100px",width:"620px"}}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Quote</th>
                            
                        </tr>
                    </thead>

                        <tbody>
                            {users.map((user) => (
                                
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.author}</td>
                                    <td>{user.quote}</td>



                                </tr>
                            ))}
                        </tbody>



                    </table>
        )}
                </div>
            )
        }