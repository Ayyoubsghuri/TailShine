import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import AuthRefresh from '../authPage/Auth';
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
function Setting(){
    AuthRefresh()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const token = localStorage.getItem('access');
    let config = {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }
    const onSubmit = data => {
        return axios
            .put('http://localhost:8000/api/auth/resetpassword', data, config)
            .then((response) => {
                console.log(response.data);
                  if (response.data.status==="success") {
                    notify("Your Password updated successfully! 🥂");
                  }
                return response.data;
            })
            .catch((error) => {
                if(error.response.data['old_password']){
                    notify("Your Old Password is Wrong! 🤔");
                }else if(error.response.status===400){
                    notify("Something went wrong! 😔");
                }
                console.log(error.response.data['old_password']);
            });
    };
    let passwordError, password2Error, oldpasswordError;

    if (errors.new_password && errors.new_password.type === "pattern") {
        passwordError = <p className="error rounded-b-md visibility">We suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength.</p>
    } else if (errors.new_password && errors.new_password.type === "maxLength") {
        passwordError = <p className="error rounded-b-md">Password must not Have More than 20 characters</p>
    } else if (errors.new_password && errors.new_password.type === "minLength") {
        passwordError = <p className="error rounded-b-md">Password most Have at least 8 characters</p>
    } else if (errors.new_password && errors.new_password.type === "required") {
        passwordError = <p className="error rounded-b-md">Password is required</p>
    }

    if (errors.old_password && errors.old_password.type === "pattern") {
        oldpasswordError = <p className="error rounded-b-md visibility">Your old password have written wrong.</p>
    } else if (errors.old_password && errors.old_password.type === "maxLength") {
        oldpasswordError = <p className="error rounded-b-md">Password must not Have More than 20 characters</p>
    } else if (errors.old_password && errors.old_password.type === "minLength") {
        oldpasswordError = <p className="error rounded-b-md">Password most Have at least 8 characters</p>
    } else if (errors.old_password && errors.old_password.type === "required") {
        oldpasswordError = <p className="error rounded-b-md">Password is required</p>
    }

    if (errors.Password2 && errors.Password2.type === "required") {
        password2Error = <p className="error rounded-b-md">Plz repeat your password</p>
    } else if (errors.Password2 && errors.Password2.type === "validate") {
        password2Error = <p className="error rounded-b-md">Password didnt match</p>
    }
    return (
        <div className=" min-h-screen  font-mono ">
            <Toaster />
            <div >
                <div className=" w-full max-w-2xl p-6 ">
                    <h2 className="text-2xl text-gray-900">Account Setting</h2>
                    <form className="mt-6 border-t border-gray-400 pt-4" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-wrap mx-5 mb-6'>
                            <div className='w-full md:w-full  mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Your Old Password</label>
                                <input
                                    {...register("old_password", { required: true, minLength: 8, maxLength: 20, pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i })}
                                    id="old_password"
                                    name="old_password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' >
                                </input>
                                {oldpasswordError}
                            </div>
                            <div className='w-full md:w-full  mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Your New Password</label>
                                <input
                                    {...register("new_password", { required: true, minLength: 8, maxLength: 20, pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i })}
                                    id="new_password"
                                    name="new_password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' >
                                </input>
                                {passwordError}
                            </div>
                            <div className='w-full md:w-full  mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Repeat Your New Password</label>
                                <input
                                    {...register("Password2", {
                                        required: true,
                                        validate: (val: String) => {
                                            if (watch('new_password') !== val) {
                                                return "Your passwords didn't match";
                                            }
                                        },
                                    })}
                                    id="Password2"
                                    name="Password2"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' >
                                </input>
                                {password2Error}
                            </div>
                            <div className='w-full md:w-full  mb-6 '>
                                <button type="submit" className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">change your password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Setting