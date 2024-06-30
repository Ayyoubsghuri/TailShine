import React, { useState, useEffect ,useRef } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { Link, Navigate } from 'react-router-dom';
import AuthRefresh from '../authPage/Auth';
import axios from 'axios';
import { get } from 'react-hook-form';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { useBetween } from 'use-between';
import { animate,motion } from "framer-motion";
import Loader from '../Loader/Loader';
import Loader2 from '../Loader/Loader2';
import MyLoader2 from '../Loader/Loader2';
import Typed from "react-typed"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: 5,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const style2 = {
  width: 300,
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
  function Counter({ from, to }) {
    const nodeRef = useRef();
  
    useEffect(() => {
      const node = nodeRef.current;
  
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed();
        }
      });
  
      return () => controls.stop();
    }, [from, to]);
  
    return <p ref={nodeRef} />;
  }
  function CounterPer({ from, to }) {
    const nodeRef = useRef();
  
    useEffect(() => {
      const node = nodeRef.current;
  
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed(3);
        }
      });
  
      return () => controls.stop();
    }, [from, to]);
  
    return <p ref={nodeRef} />;
  }
function Auto() {
  const [userData, setUserData] = useState({});
  const [dailyData, setDailyData] = useState({});
  const [countD, setCount] = useState();
  const [apikey, setApiKey] = useState();
  const [plan, setPlan] = useState();
  AuthRefresh()
  useEffect(() => {
    if(dailyData !== undefined){
        notify("Hello " + localStorage.getItem('username') + " User! 👋");
    }
  }, []);
  const token = localStorage.getItem('access');
  let config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auth/ApiOwner/', config)
      .then((response) => {
        setUserData(response.data[0]);
        if (parseFloat(response.data[0].SubscriptionType) === 1) {
          setCount((response.data[0].NumberRequestLast * 100 / 30000));
          setPlan(30000);
        } else if (parseFloat(response.data[0].SubscriptionType) === 2) {
          setCount((response.data[0].NumberRequestLast * 100 / 300000).toFixed(2));
          setPlan(300000);
        } else if (parseFloat(response.data[0].SubscriptionType) === 3) {
          setCount((response.data[0].NumberRequestLast * 100 / 9999999).toFixed(2));
          setPlan(9999999);
        }
      })
      .catch((error) => {
        notify("Somthing Went Wrong 😔");
      });
  }, []);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auth/dailyCount/', config)
      .then((response) => {
        setDailyData(response.data[0]);
      })
      .catch((error) => {
        window.location.reload();
      });
  }, []);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auth/ApiKey', config)
      .then((response) => {
        console.log(response.data);
        setApiKey(response.data[0].Key);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return {
    userData,
    dailyData,
    apikey,
    countD,
    plan
  }
}


function Dash() {
  
  const { userData, dailyData, countD,apikey, plan } = useBetween(Auto);
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true); notify("Dont share your API key with anyone ⚠️!");}
  const handleClose = () => setOpen(false);
  // 
  
  const [loading, setLoading] = useState(true);
  setTimeout(()=> setLoading(false), 3000);
  return (
    <>

      <Toaster />
      <div>
      <Modal
        aria-labelledby="Your API Key"
        aria-describedby="API Key"
        open={open}
        onClose={handleClose}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

            <h1 className="font-mono font-bold text-5xl">Your Api Key:</h1>
            <br></br>
            <div className="flex">
            <TextField sx={style2} id="outlined-basic" value={apikey} variant="outlined" />
            <Button
            onClick={() => {navigator.clipboard.writeText(`${apikey}`); notify("Copied to clipboard 👌")}}
          >
            Copy
          </Button>
          </div>
          <br></br>
          <h1 className="font-mono font-bold text-4xl">Rules:</h1>
          <ul className="font-mono">
            <li><span className="font-bold">1-</span> Don't share your Api key whit Anyone.</li>
            <li><span className="font-bold">2-</span> In case you want to change your Apikey contact admin. <br></br> (LINK IN DASHBOARD SIDEBAR).</li>
          </ul>
            
          </Box>
        </Fade>
      </Modal>
    </div>
      <div className="container mx-auto">
        <div className="rounded-lg bg-[#271646] text-white p-8 my-2 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
          <div className="flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10">
            <h4 className="text-4xl text-center md:text-left font-bold text-white md:pb-2">
              Welcome back! <Typed
      strings={[
        `${localStorage.getItem("username")}`,
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
        /> 
            </h4>
            <p className="text-center md:text-left text-white opacity-70 md:pb-6">
              Click On Button to Get Your ApiKey, To know How to use it Read Documentation.
            </p>
          </div>


          <div onClick={handleOpen} className="pt-8 md:pt-0 justify-center lg:ml-auto z-10">
            <a href="#" target="_blank" download
              className="flex items-center px-8 py-4 text-center text-sm text-red-300 uppercase bg-white font-display rounded-full transition duration-200 hover:bg-red-600 hover:text-white">
              <svg className="w-5 h-5 mr-3" width="20" height="24" viewBox="0 0 20 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75081 17.2493C9.55189 17.2493 9.36116 17.1702 9.22052 17.0295L6.22027 14.0293C6.08364 13.8878 6.00803 13.6984 6.00974 13.5017C6.01145 13.305 6.09034 13.1169 6.22941 12.9778C6.36847 12.8388 6.55661 12.7599 6.75327 12.7582C6.94993 12.7565 7.1394 12.8321 7.28086 12.9687L9.75081 15.4387L12.2208 12.9687C12.3622 12.8321 12.5517 12.7565 12.7484 12.7582C12.945 12.7599 13.1332 12.8388 13.2722 12.9778C13.4113 13.1169 13.4902 13.305 13.4919 13.5017C13.4936 13.6984 13.418 13.8878 13.2814 14.0293L10.2811 17.0295C10.1405 17.1702 9.94972 17.2493 9.75081 17.2493Z"
                  fill="currentColor" />
                <path d="M9.75081 17.2493C9.55189 17.2493 9.36116 17.1702 9.22052 17.0295C9.07986 16.8889 9.00075 16.6982 9.00075 16.4992V8.99862C9.00075 8.79969 9.07977 8.60891 9.22044 8.46825C9.3611 8.32758 9.55187 8.24856 9.7508 8.24856C9.94973 8.24856 10.1405 8.32758 10.2812 8.46825C10.4219 8.60891 10.5009 8.79969 10.5009 8.99862V16.4992C10.5009 16.6982 10.4218 16.8889 10.2811 17.0295C10.1405 17.1702 9.94972 17.2493 9.75081 17.2493Z"
                  fill="currentColor" />
                <path d="M14.2512 20.2496H5.25044C5.05151 20.2496 4.86073 20.1705 4.72006 20.0299C4.5794 19.8892 4.50038 19.6984 4.50038 19.4995C4.50038 19.3006 4.5794 19.1098 4.72006 18.9691C4.86073 18.8285 5.05151 18.7494 5.25044 18.7494H14.2512C14.4501 18.7494 14.6409 18.8285 14.7816 18.9691C14.9222 19.1098 15.0012 19.3006 15.0012 19.4995C15.0012 19.6984 14.9222 19.8892 14.7816 20.0299C14.6409 20.1705 14.4501 20.2496 14.2512 20.2496Z"
                  fill="currentColor" />
                <path d="M17.5777 23.9999H1.92616C1.42235 24.0057 0.936772 23.8116 0.575754 23.4602C0.214737 23.1087 0.00770565 22.6285 0 22.1247V6.71618C0.00215083 6.05974 0.262716 5.43055 0.725307 4.96479L4.96391 0.726183C5.19337 0.495213 5.46641 0.312101 5.76718 0.187465C6.06796 0.062829 6.39048 -0.000846655 6.71606 0.000126796H17.577C18.0806 -0.00568399 18.566 0.188433 18.9268 0.539932C19.2876 0.891432 19.4943 1.37164 19.5016 1.87528V22.127C19.4939 22.6302 19.2871 23.1098 18.9265 23.4608C18.5659 23.8119 18.0809 24.0057 17.5777 23.9999ZM6.71606 1.498C6.58773 1.49756 6.46059 1.52259 6.34201 1.57165C6.22343 1.6207 6.11576 1.69281 6.02524 1.78377L1.7859 6.02313C1.60348 6.20684 1.5008 6.45504 1.50013 6.71393V22.1225C1.50764 22.2284 1.55654 22.3271 1.63626 22.3973C1.71598 22.4675 1.82012 22.5035 1.92616 22.4975H17.577C17.6829 22.5035 17.7868 22.4674 17.8663 22.3972C17.9458 22.327 17.9944 22.2283 18.0015 22.1225V1.87078C17.9944 1.76497 17.9458 1.66624 17.8663 1.59603C17.7868 1.52582 17.6829 1.48978 17.577 1.49575L6.71606 1.498Z"
                  fill="currentColor" />
                <path d="M5.62547 7.4985H3.00025C2.80132 7.4985 2.61054 7.41947 2.46988 7.27881C2.32921 7.13814 2.25019 6.94736 2.25019 6.74843C2.25019 6.54951 2.32921 6.35872 2.46988 6.21806C2.61054 6.0774 2.80132 5.99837 3.00025 5.99837H5.62547C5.72493 5.99837 5.82032 5.95886 5.89065 5.88853C5.96098 5.8182 6.0005 5.7228 6.0005 5.62334V2.99812C6.0005 2.79919 6.07952 2.60841 6.22019 2.46775C6.36085 2.32708 6.55163 2.24806 6.75056 2.24806C6.94949 2.24806 7.14027 2.32708 7.28094 2.46775C7.4216 2.60841 7.50063 2.79919 7.50063 2.99812V5.62334C7.50063 6.12066 7.30306 6.59762 6.9514 6.94928C6.59974 7.30094 6.12279 7.4985 5.62547 7.4985Z"
                  fill="currentColor" />
              </svg>
              <span >
                Get Your API Key
              </span>
            </a>
          </div>

          <p className="pt-8 text-xs block md:hidden z-10 text-white">

          </p>

          <div className="absolute bg-red-400 opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
        </div>
      </div>
      {/* api key */}
      

      {/* section */}
      <div className=" mb-6 lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
        <div className="pt-6 2xl:container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1" >
            {loading?<div className="rounded-xl border border-gray-200 bg-white p-7 h-[24rem]"><Loader/></div>:
                <div className=" py-8 px-10 space-y-6 rounded-xl border border-gray-200 bg-white">
                <svg className="w-40 m-auto opacity-75" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M73.1866 5.7129C81.999 5.7129 90.725 7.44863 98.8666 10.821C107.008 14.1933 114.406 19.1363 120.637 25.3675C126.868 31.5988 131.811 38.9964 135.184 47.138C138.556 55.2796 140.292 64.0057 140.292 72.818C140.292 81.6304 138.556 90.3565 135.184 98.4981C131.811 106.64 126.868 114.037 120.637 120.269C114.406 126.5 107.008 131.443 98.8666 134.815C90.725 138.187 81.999 139.923 73.1866 139.923C64.3742 139.923 55.6481 138.187 47.5066 134.815C39.365 131.443 31.9674 126.5 25.7361 120.269C19.5048 114.037 14.5619 106.64 11.1895 98.4981C7.81717 90.3565 6.08144 81.6304 6.08144 72.818C6.08144 64.0057 7.81717 55.2796 11.1895 47.138C14.5619 38.9964 19.5048 31.5988 25.7361 25.3675C31.9674 19.1363 39.365 14.1933 47.5066 10.821C55.6481 7.44863 64.3742 5.7129 73.1866 5.7129L73.1866 5.7129Z" stroke="#e4e4f2" stroke-width="4.89873" />
                  <path d="M73.5 23.4494C79.9414 23.4494 86.3198 24.7181 92.2709 27.1831C98.222 29.6482 103.629 33.2612 108.184 37.816C112.739 42.3707 116.352 47.778 118.817 53.7291C121.282 59.6802 122.551 66.0586 122.551 72.5C122.551 78.9414 121.282 85.3198 118.817 91.2709C116.352 97.222 112.739 102.629 108.184 107.184C103.629 111.739 98.222 115.352 92.2709 117.817C86.3198 120.282 79.9414 121.551 73.5 121.551C67.0586 121.551 60.6802 120.282 54.7291 117.817C48.778 115.352 43.3707 111.739 38.816 107.184C34.2612 102.629 30.6481 97.222 28.1831 91.2709C25.7181 85.3198 24.4494 78.9414 24.4494 72.5C24.4494 66.0586 25.7181 59.6802 28.1831 53.7291C30.6481 47.778 34.2612 42.3707 38.816 37.816C43.3707 33.2612 48.778 29.6481 54.7291 27.1831C60.6802 24.7181 67.0586 23.4494 73.5 23.4494L73.5 23.4494Z" stroke="#e4e4f2" stroke-width="4.89873" />
                  <path d="M73 24C84.3364 24 95.3221 27.9307 104.085 35.1225C112.848 42.3142 118.847 52.322 121.058 63.4406C123.27 74.5592 121.558 86.1006 116.214 96.0984C110.87 106.096 102.225 113.932 91.7515 118.27C81.278 122.608 69.6243 123.181 58.7761 119.89C47.9278 116.599 38.5562 109.649 32.258 100.223C25.9598 90.7971 23.1248 79.479 24.2359 68.1972C25.3471 56.9153 30.3357 46.3678 38.3518 38.3518" stroke="url(#paint0_linear_622:13617)" stroke-width="10" stroke-linecap="round" />
                  <path d="M73 5.00001C84.365 5.00001 95.5488 7.84852 105.529 13.2852C115.509 18.7218 123.968 26.5732 130.131 36.1217C136.295 45.6702 139.967 56.6112 140.812 67.9448C141.657 79.2783 139.648 90.6429 134.968 101C130.288 111.357 123.087 120.375 114.023 127.232C104.96 134.088 94.3218 138.563 83.0824 140.248C71.8431 141.933 60.3606 140.775 49.6845 136.878C39.0085 132.981 29.4793 126.471 21.9681 117.942" stroke="url(#paint1_linear_622:13617)" stroke-width="10" stroke-linecap="round" />
                  <path d="M9.60279 97.5926C6.37325 89.2671 4.81515 80.3871 5.01745 71.4595C5.21975 62.5319 7.1785 53.7316 10.7818 45.561C14.3852 37.3904 19.5626 30.0095 26.0184 23.8398C32.4742 17.6701 40.082 12.8323 48.4075 9.6028" stroke="url(#paint2_linear_622:13617)" stroke-width="10" stroke-linecap="round" />
                  <path d="M73 5.00001C86.6504 5.00001 99.9849 9.10831 111.269 16.7904" stroke="url(#paint3_linear_622:13617)" stroke-width="10" stroke-linecap="round" />
                  <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2" />
                  <path d="M74 82.8332C68.0167 82.8332 63.1666 77.9831 63.1666 71.9998C63.1666 66.0166 68.0167 61.1665 74 61.1665C79.9832 61.1665 84.8333 66.0166 84.8333 71.9998C84.8333 77.9831 79.9832 82.8332 74 82.8332ZM74 80.6665C76.2985 80.6665 78.5029 79.7534 80.1282 78.1281C81.7535 76.5028 82.6666 74.2984 82.6666 71.9998C82.6666 69.7013 81.7535 67.4969 80.1282 65.8716C78.5029 64.2463 76.2985 63.3332 74 63.3332C71.7014 63.3332 69.497 64.2463 67.8717 65.8716C66.2464 67.4969 65.3333 69.7013 65.3333 71.9998C65.3333 74.2984 66.2464 76.5028 67.8717 78.1281C69.497 79.7534 71.7014 80.6665 74 80.6665ZM70.75 67.6665H77.25L79.9583 71.4582L74 77.4165L68.0416 71.4582L70.75 67.6665ZM71.8658 69.8332L70.8691 71.2307L74 74.3615L77.1308 71.2307L76.1341 69.8332H71.8658Z" fill="#6A6A9F" />
                  <defs>
                    <linearGradient id="paint0_linear_622:13617" x1="45.9997" y1="19" x2="46.0897" y2="124.308" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E323FF" />
                      <stop offset="1" stop-color="#7517F8" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_622:13617" x1="1.74103e-06" y1="8.70228e-06" x2="6.34739e-08" y2="140.677" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4DFFDF" />
                      <stop offset="1" stop-color="#4DA1FF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_622:13617" x1="36.4997" y1="5.07257e-06" x2="36.6213" y2="142.36" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFD422" />
                      <stop offset="1" stop-color="#FF7D05" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_622:13617" x1="1.74103e-06" y1="8.70228e-06" x2="6.34739e-08" y2="140.677" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4DFFDF" />
                      <stop offset="1" stop-color="#4DA1FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div>
                  <h5 className="text-xl text-gray-600 text-center">Number Of requests Last:</h5>
                  <div className="mt-2 flex justify-center gap-4">
                    <h3 className="text-3xl font-bold text-gray-700"><Counter from={0} to={userData.NumberRequestLast} /></h3>

                  </div>
                  <span className="block text-center text-gray-500">Compared to Your Full <Counter from={0} to={plan} />  per Month</span>
                </div></div>}
              
            </div>
            <div>
              {loading?<div className="rounded-xl border border-gray-200 bg-white py-7 px-6 h-[24rem]"><MyLoader2/></div>:<div className="py-14 px-6 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700">Requests</h5>
                <div className="my-8">
                  <h1 className="text-5xl flex font-bold text-gray-800"><CounterPer from={0} to={countD} />%</h1>
                  <span className="text-gray-500">Percent of Your monthly requests</span>
                </div>
                <svg className="w-full" viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" stroke-width="3" stroke-linecap="round" />
                  <path d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665" stroke="url(#paint1_linear_622:13664)" stroke-width="3" stroke-linecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="0.91244" y2="15" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4DFFDF" />
                      <stop offset="1" stop-color="#4DA1FF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_622:13664" x1="218" y1="18.3748" x2="5.4362" y2="18.9795" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E323FF" />
                      <stop offset="1" stop-color="#7517F8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>}
            </div>
            <div>
              <div className="py-[4rem] px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                <svg className="w-40 m-auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M27.9985 2.84071C31.2849 2.84071 34.539 3.488 37.5752 4.74562C40.6113 6.00324 43.3701 7.84657 45.6938 10.1703C48.0176 12.4941 49.861 15.2529 51.1186 18.289C52.3762 21.3252 53.0235 24.5793 53.0235 27.8657C53.0235 31.152 52.3762 34.4061 51.1186 37.4423C49.861 40.4785 48.0176 43.2372 45.6938 45.561C43.3701 47.8848 40.6113 49.7281 37.5752 50.9857C34.539 52.2433 31.2849 52.8906 27.9985 52.8906C24.7122 52.8906 21.4581 52.2433 18.4219 50.9857C15.3857 49.7281 12.627 47.8848 10.3032 45.561C7.97943 43.2372 6.1361 40.4785 4.87848 37.4423C3.62086 34.4061 2.97357 31.152 2.97357 27.8657C2.97357 24.5793 3.62086 21.3252 4.87848 18.289C6.13611 15.2529 7.97943 12.4941 10.3032 10.1703C12.627 7.84656 15.3857 6.00324 18.4219 4.74562C21.4581 3.488 24.7122 2.84071 27.9985 2.84071L27.9985 2.84071Z" stroke="#e4e4f2" stroke-width="3" initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}/>
                  <motion.path d="M27.301 2.50958C33.0386 2.35225 38.6614 4.13522 43.26 7.57004C47.8585 11.0049 51.1637 15.8907 52.641 21.437C54.1182 26.9834 53.6811 32.8659 51.4002 38.133C49.1194 43.4001 45.1283 47.7437 40.0726 50.4611C35.0169 53.1785 29.1923 54.1108 23.541 53.1071C17.8897 52.1034 12.7423 49.2225 8.93145 44.9305C5.12062 40.6384 2.86926 35.1861 2.54159 29.4558C2.21391 23.7254 3.82909 18.0521 7.12582 13.3536" stroke="url(#paint0_linear_622:13696)" stroke-width="5" stroke-linecap="round" animate={{ pathLength: 1 }}
                  transition={transition}/>
                  <motion.path d="M36.1948 28.8842C36.1948 29.4438 36.2557 29.8634 36.3775 30.1432C36.4992 30.423 36.6967 30.5628 36.9699 30.5628C37.5097 30.5628 37.7796 30.0033 37.7796 28.8842C37.7796 27.7717 37.5097 27.2155 36.9699 27.2155C36.6967 27.2155 36.4992 27.3537 36.3775 27.6302C36.2557 27.9067 36.1948 28.3247 36.1948 28.8842ZM38.456 28.8842C38.456 29.6347 38.3293 30.2024 38.0758 30.5875C37.8257 30.9693 37.457 31.1602 36.9699 31.1602C36.5091 31.1602 36.1504 30.9644 35.8936 30.5727C35.6402 30.181 35.5135 29.6182 35.5135 28.8842C35.5135 28.1371 35.6352 27.5742 35.8788 27.1957C36.1257 26.8172 36.4894 26.6279 36.9699 26.6279C37.4472 26.6279 37.8142 26.8238 38.0709 27.2155C38.3276 27.6071 38.456 28.1634 38.456 28.8842ZM40.5395 31.7774C40.5395 32.3402 40.6003 32.7615 40.7221 33.0413C40.8439 33.3178 41.043 33.456 41.3195 33.456C41.596 33.456 41.8001 33.3194 41.9317 33.0462C42.0634 32.7697 42.1292 32.3468 42.1292 31.7774C42.1292 31.2145 42.0634 30.7982 41.9317 30.5283C41.8001 30.2551 41.596 30.1185 41.3195 30.1185C41.043 30.1185 40.8439 30.2551 40.7221 30.5283C40.6003 30.7982 40.5395 31.2145 40.5395 31.7774ZM42.8056 31.7774C42.8056 32.5245 42.6789 33.0906 42.4254 33.4757C42.1753 33.8575 41.8067 34.0484 41.3195 34.0484C40.8521 34.0484 40.4917 33.8526 40.2383 33.4609C39.9881 33.0693 39.8631 32.5081 39.8631 31.7774C39.8631 31.0302 39.9849 30.4674 40.2284 30.0889C40.4753 29.7104 40.839 29.5211 41.3195 29.5211C41.7869 29.5211 42.1506 29.7153 42.4106 30.1037C42.6739 30.4888 42.8056 31.0467 42.8056 31.7774ZM41.5318 26.7316L37.5278 33.9497H36.8021L40.8061 26.7316H41.5318Z" fill="white" animate={{ pathLength: 1 }}
                  transition={transition} />
                  <circle cx="27.5" cy="27.5" r="18" fill="#fffff" stroke="#7617f8"></circle>
                  <circle cx="27.5" cy="27.5" r="9" fill="#7617f8" stroke="#7617f8"></circle>
                  <circle cx="27.5" cy="27.5" r="4" fill="#E323FF" stroke="#7617f8"></circle>
                  <defs>
                    <linearGradient id="paint0_linear_622:13696" x1="5.54791e-07" y1="42.0001" x2="54.6039" y2="41.9535"  gradientUnits="userSpaceOnUse" animate={{ pathLength: 1 }}
                  transition={transition}>
                      <stop stop-color="#E323FF" />
                      <stop offset="2" stop-color="#7517F8" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="mt-6 ">
                  <h5 className="text-xl text-gray-700 text-center">Number request made:</h5>
                  <div className="mt-2 flex justify-center gap-4">
                    <h3 className="text-3xl font-bold text-gray-700"><Counter from={0} to={dailyData.NumberRequestMade} /></h3>
                    <span className="block text-center text-gray-500">Per Day</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Api Technology */}
      <div className="mt-6 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8">
          <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="Hfeauture"></img>
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Highlevel feature</h5>
              <p className="text-sm text-gray-600">On First Features we provide ImageToText api and Grammary api it's high level api's</p>
            </div>
            {<Link to="/documentation/apiimagetotext" className="flex justify-between items-center group-hover:text-yellow-600">
              <span className="text-sm">Read more</span>
              <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">>>></span>
            </Link>}
          </div>
        </div>
        <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8">
          <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="mdFeauture"></img>

            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">meduim feature</h5>
              <p className="text-sm text-gray-600">and meduim level feature we provide Currency Exchange api and transalteApi.</p>
            </div>
            {<Link to="/documentation/apitranslate" className="flex justify-between items-center group-hover:text-yellow-600">
              <span className="text-sm">Read more</span>
              <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">>></span>
            </Link>}
          </div>
        </div>
        <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8">
            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="bsFeautures"></img>

            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Basic feature</h5>
              <p className="text-sm text-gray-600">Simple but fast api's to help you in your jouney like QrCode decoder to Text and Whois Feauture to lookup on domain data.</p>
            </div>
            {<Link to="/documentation/apiqrtotext" className="flex justify-between items-center group-hover:text-yellow-600">
              <span className="text-sm">Read more</span>
              <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">>></span>
            </Link>}
          </div>
        </div>
        <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
          <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration"></img>

            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">More features</h5>
              <p className="text-sm text-gray-600">W will add more feautures in future.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dash;