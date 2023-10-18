import "./ThankYou.scss";
import logo from "../../images/Logo_green.png";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ThankYou = () => {
  const navigate = useNavigate();
  const { adminEmail } = useContext(MyContext);
  const { companyName } = useContext(MyContext);
  const { userCompany, setUserCompany } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    const newDataObject = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        body: JSON.stringify(newDataObject),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (response.ok) {
        const responseData = await response.json();
        setUserCompany(responseData.user.userCompany);
        navigate("/company/profile");
      } else {
        const errorData = await response.json();
        setError(errorData.error); // Set the error message from the server
      }
    } catch (error) {
      console.log("Fetch error:", error);
      setError("An error occurred during login."); // Generic error message
    }
  };
  console.log(errors);
  return (
    <div className="thankyou">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="BeyondWork Logo" />{" "}
        </div>
        <h1>Thank you for registering your company with BeyondWork!</h1>
      </div>
      <div className="right">
        <div className="thankMsg">
          <p>You have successfully registered your company.</p>
          <p>Now you can login and start registering employees in your team.</p>
          <p>
            Here is your Admin email <b>{adminEmail}</b> and your temporary
            password:
            <b> admin1234</b>.
            <br /> <i>Please make sure to change your password! </i>
          </p>
        </div>{" "}
        <h2>Login to {companyName} admin account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Your email"
            {...register("email", { required: true })}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Your password"
            {...register("password", { required: true })}
          />
          <input type="submit" value="Login" />
          {error && <div>Error: {error}</div>} {message && <div>{message}</div>}
        </form>
      </div>
    </div>
  );
};