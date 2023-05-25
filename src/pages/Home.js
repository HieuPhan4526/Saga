import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersStart, loadUsersStart } from "../redux/action";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const { users, loadding } = useSelector((state) => state.UsersReducer);
  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  if (loadding) {
    return (
      <div className="mt-5 spinner-border text-danger" role="status">
        <span className="visually-hidden">Loadding...</span>
      </div>
    );
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure thay you wanted to delete that user ?")) {
      dispatch(deleteUsersStart(id));
      alert("User Deleted Successfully");
    }
  };

  return (
    <div className="container mt-5">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <NavLink to={`/editUser/${item.id}`}>
                    <button className="btn btn-primary">EDIT</button>
                  </NavLink>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="btn btn-danger mx-2"
                  >
                    REMOVE
                  </button>
                  <NavLink to={`/userInfo/${item.id}`}>
                    <button className="btn btn-info">VIEW</button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
