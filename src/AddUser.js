import React, { useEffect, useState } from "react";
import facade from './apiFacade.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouteMatch, Switch, Route } from "react-router-dom";

export default function AddEditUser() {

  const userBody = {
    userName: "",
    userPass: "",
    fName: "",
    lName: "",
    phone: "",
    street: "",
    zip: "",
    city: "",
    hobbies: [
      { name: "" }
    ]
  }

  const [user, setUser] = useState(userBody)


  const onChange = (evt) => {
    evt.preventDefault()
    setUser({ ...user, [evt.target.id]: evt.target.value })

  }


  const saveUser = (evt) => {
    evt.preventDefault()
    facade.createUser(user)
  }

  return (
    <div>
      <form className="form-horizontal">
        <h2>Create user</h2>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="userName">
            Username:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="userName"
              placeholder="Enter User Name"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="userPass">
            userPass:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="password"
              id="userPass"
              placeholder="Enter User Pass"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="fName">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="fName"
              placeholder="Enter Name"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="lName">
            Lastname:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="lName"
              placeholder="Enter lastname"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="phone">
            Phone:
          </label>
          <div className="col-sm-9">
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="Enter phone"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="hobby">
            Hobby:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="hobbies"
              placeholder="Enter Hobby"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="street">
            Street:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="street"
              placeholder="Enter street"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="zip">
            Zip:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="zip"
              placeholder="Enter Zip"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="city">
            City:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="city"
              placeholder="Enter City"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button onClick={saveUser} type="submit" className="btn btn-primary">
              Create User
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}