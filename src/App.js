// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import LoginForm from './features/users/LoginForm';
// import Lessons from './features/lessons/Lessons'

function App() {

const [loggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState()

useEffect(() => {
  const token = localStorage.getItem("jwt");
  console.log("token: " + token)
  fetch(`http://localhost:3000/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        setLoggedIn(true)
        setUser(data.user)
      });
    } else {
      console.log("please log in")
    }
  });
}, []);


function signup(username, password) {

  fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: {
        username: `${username}`,
        password: `${password}`,
        // set display name to username as defaault. TODO: allow for change later
        display_name: `${username}`,
      },
    }),
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data.user)
          setLoggedIn(true)
          localStorage.setItem("jwt", data.jwt);
        });
      } else {
        console.log("form incorrectly filled out")
      }
    })
}

function login(username, password) {
  fetch(`http://localhost:3000/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: {
        username: `${username}`,
        password: `${password}`
      }
    })
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log("hi" + data.jwt)
        setUser(data.user)
        setLoggedIn(true)
        localStorage.setItem("jwt", data.jwt);
      });
    } else {
      console.log("wrong username/password")
    }
  })
}

// console.log("hi" + user.user.username)

function logout() {
  localStorage.clear()
  setUser(null)
  setLoggedIn(false)
}

return (
  <div className="App">
    {loggedIn ?
      <div className="App">
        <header className="App-header">
          HotKeys to Success
        </header>
        <button className="logout" onClick={logout}>Logout</button>
        {/* <Lessons/> */}
      </div>
      :
      <div className="App">
        <header className="App-header">
          HotKeys to Success
        </header>
        <LoginForm />
      </div>

    }
  </div>
)
  }

export default App;
