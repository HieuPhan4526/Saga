import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { createUsersStart, updateUsersStart } from "../redux/action";
const initState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export default function AddEditUsers() {
  const [formValue, setFormValue] = useState(initState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.UsersReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const userDetail = users.find((item) => item.id === Number(id));
      setFormValue({ ...userDetail });
    }
  }, [id]);

  const { name, email, phone, address } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createUsersStart(formValue));
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        dispatch(updateUsersStart({ id, formValue }));
        setEditMode(false);
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    }
  };
  const handleChange = (e) => {
    let { value, name } = e.target;
    let newValue = { ...formValue, [name]: value };
    setFormValue(newValue);
  };

  return (
    <div className="container">
      <h1 className="mt-4">
        {!editMode ? "Add User Detail" : "Update User Detail"}
      </h1>
      <form className="mt-2 p-5" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            value={name || ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group mb-3">
          <input
            value={email || ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group mb-3">
          <input
            value={phone || ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter Phone"
          />
        </div>
        <div className="form-group mb-3">
          <input
            value={address || ""}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Enter address"
          />
        </div>
        <button type="submit" className="btn btn-primary mx-3">
          {!editMode ? "ADD" : "UPDATE"}
        </button>
        <NavLink to={"/"}>
          <button className="btn btn-danger">GO BACK</button>
        </NavLink>
      </form>
    </div>
  );
}
