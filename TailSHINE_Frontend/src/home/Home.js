import React, { Fragment, useState } from 'react'
import pic from "../images/img.png";
import { Link } from 'react-router-dom';
import img from '../images/bg.png';
import './Home.css';
import Typed from "react-typed"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Signup from '../authPage/Signup';
import ocr from '../images/OCR.jpg';
import grammar from '../images/grammar.jpg';
import qr from '../images/qr.jpeg';
import currency from '../images/currency.jpeg';
import translate from '../images/translate.jpg';
import whois from '../images/who.png';


// import Login from '../authPage/Login';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 5,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
};
const style2 = {
    width: 300,
};
function Home() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Signup />
                    </Box>
                </Fade>
            </Modal>
            <section className="bg-cover blurbt " style={{ backgroundImage: `url(${img})` }}>
                <section className="relative overflow-hidden" >
                    <div className="bg-tarnsparent">
                        <nav className="flex justify-around p-6 px-4">
                            <div className="flex flex-wrap justify-around items-center w-full">
                                {/* <div className="w-1/2 xl:w-1/3"> */}
                                <a className="block w-full justify-center md:max-w-max py-4  md:py-2" href="#">
                                    <img className="img" src={pic} alt="" />
                                </a>
                                <h1 className="m-2">{<Link className="text-white hover:text-coolGray-900 font-medium" to="/documentation">Product</Link>}</h1>
                                <h1 className="m-2"><a className="text-white hover:text-coolGray-900 font-medium" href="#feauture">Features</a></h1>
                                <h1><a className="text-white hover:text-coolGray-900 font-medium" href="#plan">Pricing</a></h1>
                                <div className="py-4">
                                    {<Link className="inline-block py-2 px-4 md:px-7 mr-2 leading-5 text-white hover:text-coolGray-900 bg-transparent font-medium rounded-md " to="/login">Log In</Link>}
                                    {<Link className="inline-block py-2 px-20 md:px-10 text-md leading-5 text-black hover:bg-purple-800 hover:text-white font-medium focus:ring-opacity-50 rounded-md btn" to="/signup">Sign Up</Link>}
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
                <section className="w-full px-6 pb-2 antialiased" >
                    <div className="mx-auto max-w-7xl">
                        <div className="container  max-w-lg px-4 py-5 mx-auto text-left md:max-w-none md:text-center">
                            <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Start Crafting Your</span> <span className=" mt-2 text-transparent bg-clip-text text-purple-700 md:inline-block"> >
                                <Typed
                                    strings={[
                                        "Next Great Idea",
                                        "Next Big Project",
                                        "Next Meduim Project",
                                        "Next Small Project",
                                        "Your Project Dream.",
                                    ]}
                                    typeSpeed={60}
                                    backSpeed={40}
                                    loop
                                />
                            </span></h1>
                            <div className="mx-auto mt-5 text-white md:mt-12 md:max-w-lg md:text-center lg:text-lg">We Will Provide More Api's in future like Google image Api, Weather Api.. and so much more!</div>
                            <div className="flex flex-col items-center mt-12 text-center">
                                <span className="relative inline-flex w-full md:w-auto">
                                    <a onClick={handleOpen} className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 btn text-white bg-purple-700 border border-transparent md:w-auto hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 rounded-xl">
                                        Join Now
                                    </a>
                                </span>
                                {<Link to="/documentation" className="mt-3 text-sm text-white">Learn More</Link>}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="px-2 py-12 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">Beautiful Api to</span>
                                    <span className="block text-purple-700 xl:inline">Tell Your Story!</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Join our Api Service and tell your story, We do the business for you. Just ENJOY.</p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <button onClick={handleOpen} className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-700 sm:mb-0 hover:bg-purple-800 sm:w-auto rounded-xl">
                                        Try It Free
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </button>

                                    {<Link to="/documentation" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 rounded-xl">
                                        Learn More
                                    </Link>}

                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden shadow-xl rounded-xl">
                                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="feauture" className="py-10 bg-gray-50">
                <div className="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed with all the tools you need to succeed!</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">It's never been easier to build a business of your own. Our tools will help you with the following:</p>
                                <ul>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                        <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
                                    </li>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                        <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
                                    </li>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                        <span className="font-medium text-gray-500">100% Protection and Security for Your App</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature" /></div>
                    </div>
                </div>
            </section>



            <section className="box-border py-2 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
            <h2 className="mb-4 text-8xl w-[27rem] mx-10 font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed with all the tools you need to succeed!</h2>

                <div className="container mx-auto flex flex-wrap items-start my-10">
                    

                    {/* <div className="lg:w-1/4 w-full lg:px-3">
                        <div className="bg-gray-200 rounded-xl p-6">
                            <h2 className="text-2xl font-bold mb-2">Card title</h2>
                            <div className="text-gray-800 leading-relaxed mb-6">
                                Card Body – Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem amet, nemo iusto id est quae, voluptates rerum officia repellat commodi rem ut porro quis facilis. Magni error aliquid consectetur!
                            </div>
                            <div>
                                <a href="#" className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug">Card link</a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/4 w-full lg:px-3">
                        <div className="bg-gray-200 rounded-xl p-6">
                            <h2 className="text-2xl font-bold mb-2">Card title</h2>
                            <div className="text-gray-800 leading-relaxed mb-6">
                                Card Body – Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem amet, nemo iusto id est quae, voluptates rerum officia repellat commodi rem ut porro quis facilis. Magni error aliquid consectetur!
                            </div>
                            <div className="border-t border-gray-300 pt-6 flex items-center justify-between">
                                <span className="text-gray-700">Card footer</span>
                                <a href="#" className="text-indigo-500 hover:text-indigo-600 font-medium">Call to action</a>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="lg:w-1/4 w-full lg:pl-3">
                        <div className="bg-gray-200 rounded-xl p-6">
                            <div className="border-b border-gray-300 pb-4 mb-4 flex items-center justify-between">
                                <span className="text-gray-700">Card footer</span>
                                <a href="#" className="text-indigo-500 hover:text-indigo-600 font-medium">Call to action</a>
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Card title</h2>
                            <div className="text-gray-800 leading-relaxed mb-6">
                                Card Body – Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem amet, nemo iusto id est quae, voluptates rerum officia repellat commodi rem ut porro quis facilis. Magni error aliquid consectetur!
                            </div>
                        </div>
                    </div> */}

                   

                    <div className="lg:w-1/3 w-full lg:px-3 mt-6">
                        <div className="bg-gray-200 rounded-xl relative text-white hover:scale-[1.1] relative">
                            <div className="absolute top-0 left-0 right-0 transition transform hover:scale-[1.1] bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl"></div>
                            <img src={ocr} alt="" className="object-cover h-96 w-full rounded-xl" />
                            <div className="p-6 absolute bottom-0 left-0 z-20">
                                <h2 className="text-2xl font-bold mb-2">API Image to Text</h2>
                                <div className="leading-relaxed">
                                 ApiImageToText is a powerful Api it can read all image types , Also You can chose type of text you looking for.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full lg:px-3 mt-6">
                        <div className="bg-gray-200 rounded-xl relative text-white hover:scale-[1.1] relative">
                            <div className="absolute top-0 left-0 right-0 transition transform hover:scale-[1.1] bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl"></div>
                            <img src={translate} alt="" className="object-cover h-96 w-full rounded-xl" />
                            <div className="p-6 absolute bottom-0 left-0 z-20">
                                <h2 className="text-2xl font-bold mb-2">API translate</h2>
                                <div className="leading-relaxed">
                                    Good api to start boost your business.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full lg:px-3 mt-6">
                        <div className="bg-gray-200 rounded-xl relative text-white hover:scale-[1.1] relative">
                            <div className="absolute top-0 left-0 right-0 transition transform hover:scale-[1.1] bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl"></div>
                            <img src={grammar} alt="" className="object-cover h-96 w-full rounded-xl" />
                            <div className="p-6 absolute bottom-0 left-0 z-20">
                                <h2 className="text-2xl font-bold mb-2">API Grammary</h2>
                                <div className="leading-relaxed">
                                    Best Api for your Grammary business.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full lg:px-3 mt-6">
                        <div className="bg-gray-200 rounded-xl relative text-white hover:scale-[1.1] relative">
                            <div className="absolute top-0 left-0 right-0 transition transform hover:scale-[1.1] bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl"></div>
                            <img src={qr} alt="" className="object-cover h-96 w-full rounded-xl" />
                            <div className="p-6 absolute bottom-0 left-0 z-20">
                                <h2 className="text-2xl font-bold mb-2">API QrCode To Text</h2>
                                <div className="leading-relaxed">
                                    At no time decode your qrcode.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full lg:px-3 mt-6">
                        <div className="bg-gray-200 rounded-xl relative transition transform  hover:scale-[1.1] hover:m-3  text-white relative">
                            <div className="absolute top-0 left-0 right-0 transition transform hover:scale-[1.1]  bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl"></div>
                            <img src={currency} alt="" className=" object-cover h-96 w-full rounded-xl" />
                            <div className="p-6 absolute bottom-0 left-0 z-20">
                                <h2 className="text-2xl font-bold mb-2">API Currency Rate Exchange.</h2>
                                <div className="leading-relaxed">
                                    Boost your Business by this fast Api.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full lg:px-3 mt-6">
                        <div className="bg-gray-200 rounded-xl relative text-white hover:scale-[1.1] cursor-pointer relative">
                            <div className="absolute top-0 left-0 right-0 transition transform hover:scale-[1.1] bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl"></div>
                            <img src={whois} alt="" className="object-cover h-96 w-full rounded-xl" />
                            <div className="p-6 absolute bottom-0 left-0 z-20">
                                <h2 className="text-2xl font-bold mb-2">Api Whois</h2>
                                <div className="leading-relaxed">
                                    Get data about any domain name.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-6xl  px-10 mx-auto border-solid lg:px-12">
                    <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                        <div className="box-border flex-1 text-center border-solid sm:text-left">
                            <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                                Boost Your Productivity
                            </h2>
                            <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                                Our service will help you maximize and boost your productivity.
                            </p>
                        </div>
                        {<Link to="/login" className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-purple-700 border border-purple-700 border-solid cursor-pointer md:w-auto lg:mt-0 hover:bg-purple-800 hover:border-purple-800 hover:text-white focus-within:bg-purple-800 focus-within:border-purple-800 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl rounded-lg">
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>}
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="http://facebook.com" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="http://instagram.com" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="http://twitter.com" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                        <a href="http://github.com" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2022 TailShine, Inc. All rights reserved.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Home;