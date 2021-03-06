import "../styles/register.css";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register, login } from "../functions/userFunctions";

import Header from "./Header";
import NotFound from "./NotFound";

const Register = () => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      first: first,
      last: last,
      email: email,
      password: password,
    };
    register(userData)
      .then((res) =>
        login({ email, password }).then((res) => {
          if (res) {
            navigate("/dashboard");
          }
        })
      )
      .catch((err) => console.log(err));
    navigate("/dashboard");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  if (localStorage.usertoken) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <div className="reg-ct">
        <div className="reg-form-ct">
          <h1 className="reg-title">Register to Didakta</h1>
          <form className="reg-form" onSubmit={handleSubmit}>
            <fieldset className="reg-form-fieldset">
              <legend className="reg-input-legend">First Name</legend>
              <input
                className="reg-form-input"
                id="firstName"
                type="text"
                name="first"
                onChange={(e) => setFirst(e.target.value)}
                required
              />
            </fieldset>
            <fieldset className="reg-form-fieldset">
              <legend className="reg-input-legend">Last Name</legend>
              <input
                className="reg-form-input"
                id="lastName"
                type="text"
                name="last"
                onChange={(e) => setLast(e.target.value)}
                required
              />
            </fieldset>
            <fieldset className="reg-form-fieldset">
              <legend className="reg-input-legend">Email</legend>
              <input
                className="reg-form-input"
                id="userEmail"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </fieldset>
            <fieldset className="reg-form-fieldset">
              <legend className="reg-input-legend">Password</legend>
              <input
                className="reg-form-password"
                id="password"
                type="password"
                name="password"
                placeholder="choose a strong password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </fieldset>
            <input className="reg-form-submit" type="submit" value="REGISTER" />
            <div className="reg-form-links-ct">
              <Link to="/login">Already have a Didakta account?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
