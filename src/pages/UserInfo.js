import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, NavLink } from "react-router-dom";

export default function UserInfo() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.UsersReducer);
  const userDetail = users.find((item) => item.id === Number(id));
  return (
    <div className="mt-5 container">
      <div className="row">
        <p>User Detail</p>
        <hr />
        <br />
        <p className="col-6 fw-bold">ID:</p>
        <p className="col-6">{userDetail.id}</p>
        <p className="col-6 fw-bold">Name:</p>
        <p className="col-6">{userDetail.name}</p>
        <p className="col-6 fw-bold">Email:</p>
        <p className="col-6">{userDetail.email}</p>
        <p className="col-6 fw-bold">Phone:</p>
        <p className="col-6">{userDetail.phone}</p>
        <p className="col-6 fw-bold">Address:</p>
        <p className="col-6">{userDetail.address}</p>
        <NavLink to={"/"}>
          <button className="btn btn-danger mt-5">GO BACK</button>
        </NavLink>
      </div>
    </div>
  );
}
