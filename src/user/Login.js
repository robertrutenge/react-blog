import React, { useState } from "react";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setUser(username);
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        onChange={handleUsernameChange}
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
}
