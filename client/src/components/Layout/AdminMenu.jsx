// import React from 'react'
import { NavLink } from "react-router-dom";

function AdminMenu() {
  return (
    <>
      <div className="text-center p-2 w-96">
        <div className="list-group flex flex-col gap-x-5 ">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action border border-black p-2"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action border border-black p-2"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action border border-black p-2"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default AdminMenu
