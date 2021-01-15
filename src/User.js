import React, { useState } from "react";
import facade from './apiFacade.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouteMatch ,Switch, Route} from "react-router-dom";
import AddUser from './AddUser'
function User(props) {

  let{path, url} = useRouteMatch()

  const userList = [
    {
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
    }]

  const [users, setUser] = useState(userList);
  const [zips, setZips] = useState([]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState({ count: "" });
  
  const onChange = (evt) => {
    setInput(evt.target.value)
  }

  const getUserByPhone = (evt) => {
    evt.preventDefault()
    facade.fetchUsersByPhone(input).then(data => {
      setUser([data]);
    })
  }

  const getUserByHobby = (evt) => {
    evt.preventDefault()
    facade.fetchUsersByHobby(input).then(data => {
      setUser(data);
    }
    )
    facade.fetchCountByHobby(input).then(data => {
      setCount(data);
    })
  }

  const getUserByCity = (evt) => {
    evt.preventDefault()
    facade.fetchUsersByCity(input).then(data => {
      setUser(data);
    })
  }

  const getAllZips = (evt) => {
    evt.preventDefault()
    facade.fetchAllZips().then(data => {
      setZips(data);
    })
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>First name</th><th>Last name</th><th>Phone</th><th>Street</th><th>Zip</th><th>City</th><th>Hobbies</th></tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userName}>
              <td>{user.fName}</td>
              <td>{user.lName}</td>
              <td>{user.phone}</td>
              <td>{user.street}</td>
              <td>{user.zip}</td>
              <td>{user.city}</td>
              <td>{user.hobbies.map((hobby) => hobby.name).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row">
        <div className="col-3">
          <h2>Get user by phone</h2>
          <form onChange={onChange}>
            <input placeholder="Enter phone" id="phone" />
            <button onClick={getUserByPhone}>Click</button>
          </form>
        </div>

        <div className="col-3">
          <h2>Get user by hobby</h2>

          <form onChange={onChange}>
            <input placeholder="Enter hobby" id="hobby" />
            <button onClick={getUserByHobby}>Click</button>
            <p>Number of users participating in this Hobby:  {count.count}</p>
          </form>
        </div>

        <div className="col-3">
          <h2>Get user by City</h2>
          <form onChange={onChange}>
            <input placeholder="Enter City" id="city" />
            <button onClick={getUserByCity}>Click</button>
          </form>
        </div>
      </div>
      <br /><br />
      <div className="row">
        <div className="col-3">
          <h2>See all Zip-codes</h2>
          <table className="table">
            <thead><tr><th>Zip</th></tr></thead>
            <tbody>
              {zips.map((zip) => (
                <tr key={zip}>
                  <td>{zip}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={getAllZips}>Click</button>
        </div>

                <AddUser/>

      </div>

    </div >
  );
}

export default User;
