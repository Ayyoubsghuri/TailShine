import React from 'react'
import pic from "../images/img.png";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import AuthRefresh from '../authPage/Auth';
import toast from "react-hot-toast";



const notify = (text) =>
  toast.custom((t) => (
    <div
      id="body"
      className={`bg-white px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-down' : 'animate-upp '
        }`}
    >
      {text}
    </div>
  ));

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  AuthRefresh();
  const onSubmit = data => {
    const token = localStorage.getItem('access');
    let config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }
    return axios
      .post('http://localhost:8000/api/Contact/', data,config)
      .then((response) => {
        if(response.data==="Done"){
          notify("Your message has been sent successfully 🥂!");
        }
      })
      .catch((error) => {

      });
  }
  return (
    <>
      <img className="mx-auto h-12 w-auto" src={pic} alt="login" />
      <div className="flex justify-center items-center h-1/2 mx-auto ">

        <form method="POST" className="w-full " onSubmit={handleSubmit(onSubmit)}>


          <div className="p-3">
            <input
              {...register("issue", { required: true })}
              className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Name your issue" required />
          </div>
          <div className="p-3">
            <textarea
              {...register("message", { required: true })}
              className="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required ></textarea>
          </div>
          <div className="p-3 pt-4">
            <button type="submit" className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2  rounded text-xl">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm