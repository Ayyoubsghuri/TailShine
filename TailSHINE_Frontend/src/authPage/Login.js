import React from 'react'
import { LockOpenIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import pic from "../images/img.png";
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


const notify = (text) =>
toast.custom((t) => (
    <div
    id="body"
      className={`bg-white px-6 py-4 shadow-md rounded-full ${
        t.visible ? 'animate-down' : 'animate-upp '
      }`}
    >
      {text} 
    </div>
  ));

// const API_URL = ""
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    return axios
      .post('http://localhost:8000/api/auth/login/', data)
      .then((response) => {
        if (response.data.access) {
          localStorage.setItem('username',response.data.user['username'] );
          localStorage.setItem('access', response.data.access);
          localStorage.setItem('refresh', response.data.refresh);
          window.location.href = "/dashboard";
        }
        return response.data;
      })
      .catch((error) => {
        try {
          notify("No account found whit this email & password 🚫");
        } catch (error) {
          console.log(error);
        }
      });
  };
  // console.log(errors);
  let emailError, passwordError;
  if (errors.email && errors.email.type === "pattern") {
    emailError = <p className="error">Email is in Wrong Format!</p>
  } else if (errors.email && errors.email.type === "required") {
    emailError = <p className="error">Email is required</p>
  }

  if (errors.password && errors.password.type === "pattern") {
    passwordError = <p className="error visibility">We suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength.</p>
  } else if (errors.password && errors.password.type === "maxLength") {
    passwordError = <p className="error">Password must not Have More than 20 characters</p>
  } else if (errors.password && errors.password.type === "minLength") {
    passwordError = <p className="error">Password most Have at least 8 characters</p>
  } else if (errors.password && errors.password.type === "required") {
    passwordError = <p className="error">Password is required</p>
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div id="toast">
        <Toaster  />
       </div>
        <div>
          <img className="mx-auto h-22 w-auto" src={pic} alt="login" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            {<Link className="font-medium text-indigo-600 hover:text-indigo-500" to="/signup">
              If you don't have a account , Click Here to SignUp!
            </Link>}
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">

            <div>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="email"
              />
              {emailError}
            </div>
            <div>
              <input
                {...register("password", { required: true, minLength: 8, maxLength: 20, pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none  relative block w-full px-3 py-2 border rounded-b-md border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {passwordError}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label> */}
            </div>

            <div className="text-sm">
              {<Link className="font-medium text-indigo-600 hover:text-indigo-500" to="/forget">
                Forget Your password?
              </Link>}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockOpenIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Login
            </button>

          </div>
        </form>

      </div>
    </div>
  );
}
export default Login;