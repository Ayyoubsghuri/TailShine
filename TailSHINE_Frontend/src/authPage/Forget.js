import React from 'react'
import { LockOpenIcon} from '@heroicons/react/solid'
import { useForm } from 'react-hook-form';
import pic from "../images/img.png";
import { Link } from 'react-router-dom';

function Forget() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    let emailError;
    if(errors.email && errors.email.type === "pattern"){
        emailError = <p className="error">Email is in Wrong Format!</p>
    }else if(errors.email && errors.email.type === "required"){
        emailError = <p className="error">Email is required</p>
    }  
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
          <img className="mx-auto h-22 w-auto" src={pic} alt="login"/> 
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre your email For you we can send you link to change your passwod</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              {<Link className="font-medium text-indigo-600 hover:text-indigo-500" to="/login">
                You can Try to login!
              </Link>}
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              
              <div>
                <input
                  {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md rounded-b-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {emailError}
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
                Send Link For Change Password
              </button>

            </div>
          </form>
          
        </div>
      </div>
    );
}
export default Forget;