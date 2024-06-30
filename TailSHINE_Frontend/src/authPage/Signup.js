import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form';
import pic from "../images/img.png";
import { Link, useNavigate   } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

const notify = (text) =>
toast.custom((t) => (
    <div
      className={`bg-white px-6 py-4 shadow-md rounded-full ${
        t.visible ? 'animate-down' : 'animate-upp'
      }`}
    >
      {text} 
    </div>
  ));

function Signup() {
     let navigate = useNavigate();
    const { register, handleSubmit, watch,formState: { errors }} = useForm();
    const onSubmit = data => {
      return axios
      .post('http://localhost:8000/api/auth/register/', data)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          notify("Your Account has been created! 🎉");
          navigate("/login")
        }
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data );
        if(error.response.data['email']){
          notify("this email already exist 🙅");
        }else if(error.response.data['username']){
          notify("this username already exist 👈");
        }
        // console.log(error.response.data['detail']);
      });
    };
    // console.log(errors);
    let usernameError,emailError,passwordError,password2Error;
    if(errors.username && errors.username.type === "pattern"){
        usernameError = <p className="error">No Spaces in usernme Or Username is short</p>
    }else if(errors.username && errors.username.type === "required"){
        usernameError = <p className="error">Username is required</p>
    } 
    if(errors.email && errors.email.type === "pattern"){
        emailError = <p className="error">Email is in Wrong Format!</p>
    }else if(errors.email && errors.email.type === "required"){
        emailError = <p className="error">Email is required</p>
    }  
    if(errors.password && errors.password.type === "pattern"){
        passwordError = <p className="error visibility">We suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength.</p> 
    }else if(errors.password && errors.password.type === "maxLength"){
        passwordError = <p className="error">Password must not Have More than 20 characters</p>
    }else if(errors.password && errors.password.type === "minLength"){
        passwordError = <p className="error">Password most Have at least 8 characters</p>
    } else if(errors.password && errors.password.type === "required"){
        passwordError = <p className="error">Password is required</p>
    } 
    if(errors.Password2 && errors.Password2.type === "required"){
      password2Error= <p className="error">Plz repeat your password</p>
    }else if(errors.Password2 && errors.Password2.type === "validate"){
      password2Error = <p className="error">Password didnt match</p>
    } 

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <Toaster  />

          <div>
          <img className="mx-auto h-22 w-auto" src={pic} alt="login"/> 
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up new account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              {<Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                If you already have account, Click here to login!
              </Link>}
            </p>
          </div>
          <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  {...register("username", {required: true, min:5,maxLength: 80 ,pattern: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/i })}
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
                {usernameError}
              </div>
              <div>
                <input
                  {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {emailError}
              </div>
              <div>
                <input
                {...register("password", {required: true, minLength:8,maxLength: 20, pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i})}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {passwordError}
              </div>
              <div>
                <input
                {...register("Password2", {
                  required: true,
                  validate: (val: String) => {
                    if (watch('password') !== val) {
                      return "Your passwords didn't match";
                    }
                  },
                 })}
                  id="Password2"
                  name="Password2"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 rounded-b-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Repeat password"
                />
                {password2Error}
                {/* { document.getElementById("Password").value === document.getElementById("password2").value ?<p className="error">Password didnt Match!</p> : null} */}
              </div>
              
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#593ab9] hover:bg-[#7852eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-[#9b7aff] group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                SignUp
              </button>

            </div>
          </form>
          
        </div>
      </div>
    );
}
export default Signup;