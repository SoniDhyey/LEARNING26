import React, { useState } from "react";
import axios from "axios";

export const ApiDemo4 = () => {

  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    isActive: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const addUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        user
      );

      console.log(res.data);
      alert("User Added Successfully ✅");

      // reset form
      setUser({
        name: "",
        age: "",
        email: "",
        password: "",
        isActive: false
      });

    } catch (err) {
      console.log(err);
      alert("Error while adding user ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add User Form</h2>

      <form onSubmit={addUser} className="card p-4 shadow">

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={user.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="isActive"
            checked={user.isActive}
            onChange={handleChange}
          />
          <label className="form-check-label">Is Active</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>

      </form>
    </div>
  );
};
