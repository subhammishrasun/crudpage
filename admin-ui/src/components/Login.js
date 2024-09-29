import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]); // Adding dependency array

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    let result = await fetch("http://localhost:5300/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));

      navigate("/");
    } else {
      alert("Please enter correct details");
    }
    console.log(result);
  };

  return (
    <div className="login">
      <h1>Login Here!</h1>
      <form onSubmit={handleLogin}>
        <input
          id="email" // Added id
          name="email" // Added name
          className="inputBox"
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          id="password" // Added id
          name="password" // Added name
          className="inputBox"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="button" type="submit">
          Sign In
        </button>{" "}
        {/* Changed to "Sign In" */}
      </form>
    </div>
  );
};

export default Login;
