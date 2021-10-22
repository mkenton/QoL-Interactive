import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUser} from "./usersSlice"

function LoginForm() {
  const dispatch = useDispatch();

  // const isLoading = useSelector(
  //   (state) => state.users.status === "loading"
  // );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    // dispatch(fetchUser());
    event.target.reset();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <p>
        <input
          type="text"
          id="username"
          onChange={handleInputChange}
          placeholder="username"
        />
      </p>
      <p>
        <input
          type="password"
          id="password"
          onChange={handleInputChange}
          placeholder="password"
        />
      </p>
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
