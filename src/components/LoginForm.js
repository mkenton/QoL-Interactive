import React, { useState } from "react";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();

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
    dispatch({ type: "users/add", payload: formData });
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
