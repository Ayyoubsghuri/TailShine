import React, { useState,useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import pic from "../images/img.png";
import './sidebar.css';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 5,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
  };
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

export const Sidebar = () => {
    const [open, setOpen] = useState(true); 
    const [open2, setOpen2] = useState(false);
    const handleOpen = () => {setOpen2(true); notify("Explain you issue in detail for we help you better ✍️!");}
    const handleClose = () => setOpen2(false);
    const navigate = useNavigate();
    useEffect(() => {
        let isMobile = window.matchMedia("only screen and (max-width: 760px)"). matches;
        if(isMobile){
            setOpen(false);
        }   
    }, [])
    const logout = () => {notify("Good Bye 👋"); localStorage.clear(); navigate("/login");}
    const Documentation = () => {notify("Documentation");navigate("/documentation");}

    return (
        <>
            <div className="flex">
            <Modal
        aria-labelledby="Your API Key"
        aria-describedby="API Key"
        open={open2}
        onClose={handleClose}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <Box sx={style}>
            <ContactForm />
          </Box>
        </Fade>
      </Modal>
                <div
                    className={` ${open ? "w-[18rem] md:w-[14rem]" : "w-0 "
                        } bg-[#271646]  h-screen p-2  pt-8 duration-300 z-30 `}>
                    <a onClick={() => setOpen(!open)} className={` ${open ? "pl-10" : "pl-20"} pt-6`}>
     
                        <svg className= {` ${open ? " w-20 dark:text-white" : "w-20 dark:text-purple-200 shadow-2xl"} flex-shrink-0 h-6 text-black transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        ${!open ? <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        : <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>}


                        </svg>
                    </a>
                    <div className="flex gap-x-4 items-center">
                        <img
                            src={pic}
                            className={`cursor-pointer h-15 duration-500 img ${open && "rotate-[360deg]"
                                }`}
                            alt="" />

                    </div>
                    <ul className={` ${open ? "block" : "hidden"
                        } pt-6`}>
                            <li>
                                {<Link to="/dashboard" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-purple-700">
                                    <svg className="w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className="ml-3">Dashboard</span>
                                </Link>}
                            </li>

                            <li>
                                <div onClick={handleOpen}  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-purple-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
                                </div>
                            </li>
                            <li>
                                {<Link to="/dashboard/setting" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-purple-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
                                </Link>}
                            </li>
                            <li>
                                {<Link to="/documentation" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-purple-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                                </Link>}
                            </li>
                            <li>
                                <a href="#" onClick={logout} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-purple-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                </a>
                            </li>

                    </ul>
                </div>
                <div className="h-screen absolute md:relative md:float-left md:flex-1 p-7 overflow-y-auto ">
                     <Outlet />
                </div>
            </div>

        </>
    )
}
export default Sidebar;

