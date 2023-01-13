import React, { useState } from "react";

import {useForm} from "react-hook-form";

import "../App.css";




export default function App() {




  const { register, handleSubmit, formState: { errors }} = useForm();




  const [field, setField] = useState();

  const [submitted, setSubmit] = useState(false);




  const onSubmit = (data)=>{

    setField(data)

    setSubmit(true)

  }




  console.log(errors.email)




  return (

    <div className="form-container">

      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>




      {submitted?<div className="success-message">Registration succesfull!</div>:null}



        <div>
        <input

          id="first-name"

          className="form-field"

          type="text"

          placeholder="First Name"

          {...register('firstName',{required:"First Name is required!"})}

          

          

        />


        <div>

        <span>{errors.firstName?.message}</span>
        </div>
        </div>

      
        <div>
        <input

          id="last-name"

          className="form-field"

          type="text"

          placeholder="Last Name"

          {...register('lastName',{required:"Last Name is required!"})}

          

        />

        <div>

        <span>{errors.lastName?.message}</span>

        </div>

        </div>






        <div>
        <input

          id="email"

          className="form-field"

          type="email"

          placeholder="Email"

          {...register('email',{required:"email is required!", pattern:{value:/^\S+@\S+$/i, message:"Invalid email"}})}

         

        />


        <div>

        <span>{errors.email?.message}</span>

        </div>

        </div>


        <div>

        <input

          id="Password"

          className="form-field"

          type="password"

          placeholder="Password"

          {...register('password',{required:"Password is required!", 

          minLength:{value:4,message:"Password must be more than 4 characters"},

          maxLength:{value:20, message:"Password cannot be more than 20 characters"}})}

          

        />

        <div>

        <span>{errors.password?.message}</span>

        </div>

        </div>




        <button className="form-field" type="submit">

          Register

        </button>

      </form>

    </div>

  );

}