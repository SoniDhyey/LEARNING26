import axios from 'axios';
import React, { useState } from 'react'


export const ApiDemo2 = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/posts");
            setUsers(response.data.posts);

        } catch (error) {
            console.log(error)
        }
    }
            return (
                <div style={{ textAlign: "center" }}>
                    <h1>API DEMO2</h1>
                    <button onClick={getUsers}>GET</button>
                    <br />
                    <br />
                    {users.length >0 && (
                    <table style ={{border:"5px solid black", padding:"10px", backgroundColor:'violet', margin:"auto"}}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>

                        <tbody>
                            {users.map((user) => (
                                
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.body}</td>



                                </tr>
                            ))}
                        </tbody>



                    </table>
        )}
                </div>
            )
        }