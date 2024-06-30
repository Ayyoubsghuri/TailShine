import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import pic from '../images/qr.png';
import { Link } from 'react-router-dom';

function QrText() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div className="flex scrol">
    <div className="sm:w-[55rem] ">
      <h1 id="first" className='text-5xl font-extrabold'>Api QrToText</h1>
      <h1 className="text-2xl font-mono font-bold">What is it about?</h1>
      <p>To Start using this Api key you need send a <span className="code">GET</span> Request </p>
      <p>ApiQrToText is a powerful Api written in python with . as it can read all image types , including jpeg, png , bmp, tiff.</p>
      <h1 className="text-2xl font-mono font-bold">Why Should I Use This?</h1>
      <p>For simple reason to use ApiQrToText is it because ApiQrToText make tings easier and get data in a simple way without the need of bigger effort and in a short time.</p>
      <h1 id="how" className="text-2xl font-mono font-bold">How To Use:</h1>
      <p>First you need to send <span className="code">image file</span> directly (no URL's) , for example in python:</p>
      <p><CopyBlock
        language={'python'}
        text={`image = open(' YOUR_IMAGE ', 'rb')  # you can use any image file
files = {'img': image}`}
        showLineNumbers={true}

        theme={dracula}
        wrapLines={true}
        codeBlock
      /></p>

      <p>Here the key words are:</p>
      <p><span className="code">"img"</span> Respresent the image you want to get text from. </p>
      <p>and whitout forgetting you need to send you apikey on <span className="code">header</span> like yhis:</p>
      <p><CopyBlock
        language={'javascript'}
        text={`{
   " X-API-KEY " : " YOUR_API_KEY_GOES_HERE "
   // Secure your api key whit .env file
} `}
        showLineNumbers={true}

        theme={dracula}
        wrapLines={true}
        codeBlock
      /></p>

      <h1 id="request" className="text-2xl font-mono font-bold py-3">Example Of how to send request in Python & Javascript Using Quote image:</h1>
      <img className="h-[35rem] rounded-xl shadow-lg" src={pic} alt=""/>
      <p><Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Python" value="1" />
              <Tab label="Javascript" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1"><CopyBlock
            language={'python'}
            text={`import requests
HEADERS= {
    "X-API-KEY":"YOUR_API_KEY_GOES_HERE"
}
FILES = {
  'img': open( 'YOUR IMAGE' , 'rb')
}
r = requests.get(url = 'http://localhost:8000/api/apiQrCodeToText/', files=FILES,
                                              headers=HEADERS)
data = r.json()`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          /></TabPanel>
          <TabPanel value="2"><CopyBlock
            language={'javascript'}
            text={`import axios from 'axios';
config = {
  headers: {
      'X-API-KEY': 'YOUR_API_KEY_GOES_HERE'
  }
}
const apiImageTotext = () => {
    let formData = new FormData();
    formData.append("img", $('#YOUR_IMAGE_FILE')[0].files[0]);
  axios
    .get('http://localhost:8000/api/apiQrCodeToText/', config, formData)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        // Something went wrong 🚫"
        console.log(error.message);
    })
};`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          /></TabPanel>
        </TabContext>
      </Box>
      </p>
      <h1 id="response" className="text-2xl font-mono font-bold py-3">Response:</h1>
      <p> Status : <span className="code">200 OK</span> <br></br> Time : <span className="code">1.49s <br></br></span> Size : <span className="code">397b</span> </p>
      <p><CopyBlock
        language={'javascript'}
        text={`{
    "QrCode": [
        "TailShine is The Best"",
        "http://localhost:8000/Login/"
    ]
}`}
        showLineNumbers={true}

        theme={dracula}
        wrapLines={true}
        codeBlock
      /></p>
      <hr></hr>
      <p>To {<Link to='/documentation' className='text-[blue]'><u>Get Started: </u></Link>} in documentation.</p>

    </div>
    <div className="sm:w-[15rem] p-10 hidden sm:block sm:fixed top-1 right-0">
      <ul>
        <li><a href='#first' className='text-[blue]'><u>TOP Page</u></a></li>
        <li><a href='#how' className='text-[blue]'><u>How to use.</u></a></li>
        <li><a href='#request' className='text-[blue]'><u>Request Example.</u></a></li>
        <li><a href='#response' className='text-[blue]'><u>Response.</u></a></li>
      </ul>
    </div>
  </div>
</>
  )
}

export default QrText