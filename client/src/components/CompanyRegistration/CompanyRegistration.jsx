import React, { useState } from "react";
import { useForm } from "react-hook-form"; 
import Login from "../Login/Login";

export const CompanyRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    const newData = {
      companyName: data.companyName,
      companyType: data.companyType,
      numberOfEmployees: data.numberOfEmployees,
      companyAddress: {
        address: data.address,
        city: data.city,
        zipCode: data.zipCode,
        country: data.country,
      },
      companyContact: {
        email: data.email,
        phoneNumber: data.phoneNumber,
      },
      defaultAdminEmail: data.defaultAdminEmail,
    };
    //console.log(newData);
    fetch(
      "http://localhost:5000/company/create",
      {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
      },
      reset()
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setError(data.error[0].msg);
        } else {
          setMessage(`You successfully register your company. here is your Admin email ${data.defaultAdminEmail} and your temporary password: admin1234
        please change your logging password and update your details.`);
        }
      })
      .catch((err) => {
        setError(err.msg);
      });
  };
  console.log(errors);

  return (
    <div>
      <h1>Register your company </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Company Name"
          {...register("companyName", { required: true })}
        />
        <input
          type="text"
          placeholder="Company Type "
          {...register("companyType", { required: true })}
        />
        <select {...register("numberOfEmployees")}>
          <option value="<50">0-50</option>
          <option value="51-100">51-100</option>
          <option value="101-500">101-500</option>
          <option value=">500">more than 500</option>
        </select>
        <input
          type="text"
          placeholder="Street, Building, Office(if applicable) No"
          {...register("address", { required: true })}
        />
        <input
          type="text"
          placeholder="ZipCode"
          {...register("zipCode", { required: true })}
        />
        <input type="text" placeholder="City" {...register("city")} />
        <input type="text" placeholder="Country" {...register("country")} />
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phoneNumber")}
        />
        <input
          type="email"
          placeholder="Company E-mail Address"
          {...register("email")}
        />
        <input
          type="email"
          placeholder="Admin E-mail Address"
          {...register("defaultAdminEmail")}
        />
        <input type="submit" />
        {error && <div>Error: {error}</div>} {message && <div>{message}</div>}
      </form>

        <Login/>
    </div>
  );
};
