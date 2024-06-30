import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import pic from '../images/qu.jpg';
import { Link } from 'react-router-dom';

function ImageText() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div className="flex scrol">
    <div className="sm:w-[55rem] ">
      <h1 id="first" className='text-5xl font-extrabold'>Api ImageToText</h1>
      <h1 className="text-2xl font-mono font-bold">What is it about?</h1>
      <p>To Start using this Api key you need send a <span className="code">GET</span> Request </p>
      <p>ApiImageToText is a powerful Api written in python with support for multiple ImageToText providers. as it can read all image types , including jpeg, png, bmp, tiff.Also You can chose type of text you looking for.</p>
      <h1 className="text-2xl font-mono font-bold">Why Should I Use This?</h1>
      <p>The biggest reason to use ApiImageToText is to make ImageToText easier and get data in a simple way without the need of bigger effort and in a short time.</p>
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
      <p>And for example in <span className="code">Json</span> format: </p>
      <p><CopyBlock
        language={'javascript'}
        text={`{
    "lang": "eng",   // languages we have now only english and arabic (eng ,ara)
    "texttype": "All",   
}`}
        showLineNumbers={true}

        theme={dracula}
        wrapLines={true}
        codeBlock
      /></p>
      <p>Here the key words are:</p>
      <p><span className="code">"img"</span> Respresent the image you want to get text from. <br></br><span className="code">"lang"</span> The language in the image you try to send. <br></br><span className="code">"texttype"</span> The type of text you trying to get is it on one line if it's use ("singleline") , Or if it's multi paragraph's use ("multipara") , and if you dont care about type use ("All") .</p>
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
DATA = {
    "lang":"eng",
    "texttype":"All"         
}
HEADERS= {
    "X-API-KEY":"YOUR_API_KEY_GOES_HERE"
}
FILES = {
  'img': open( 'YOUR IMAGE' , 'rb')
}
r = requests.get(url = 'http://localhost:8000/api/apiTexttoimage/', files=FILES,
                                              data = DATA,headers=HEADERS)
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
  },
  data: { 
       "lang" : "eng",
       "texttype":"All" 
    } 
}
const apiImageTotext = () => {
    let formData = new FormData();
    formData.append("img", $('#YOUR_IMAGE_FILE')[0].files[0]);
  axios
    .get('http://localhost:8000/api/apitranslate/', config, formData)
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
      <p> Status : <span className="code">200 OK</span> <br></br> Time : <span className="code">2.46s <br></br></span> Size : <span className="code">459b</span> </p>
      <p><CopyBlock
        language={'javascript'}
        text={`{
    "text": "DON'T JUDGE PEOPLE\nFOR THE CHOICES THEY\nMAKE WHEN YOU DON'T\nKNOW THE OPTIONS THEY\nHAD TO CHOOSE FROM.",
   "text_lang": "en"
}`}
        showLineNumbers={true}

        theme={dracula}
        wrapLines={true}
        codeBlock
      /></p>
      <h1 id="langcode" className="text-2xl font-mono font-bold py-3">Here is the list of languages you can use:</h1>
      <ul>
        <li>Arabic : ara</li>
        <li>English : eng</li>
        <li>French : fre</li>
      </ul>
      <p>We will provide more languages in future.</p>
      <hr></hr>
      <p>To {<Link to='/documentation' className='text-[blue]'><u>Get Started: </u></Link>} in documentation.</p>

    </div>
    <div className="sm:w-[15rem] p-10 hidden sm:block sm:fixed top-1 right-0">
      <ul>
        <li><span className="code"><a href='#first' className='text-[blue]'><u>TOP Page</u></a></span></li>
        <li><a href='#how' className='text-[blue]'><u>How to use.</u></a></li>
        <li><a href='#request' className='text-[blue]'><u>Request Example.</u></a></li>
        <li><a href='#response' className='text-[blue]'><u>Response.</u></a></li>
        <li><a href='#langcode' className='text-[blue]'><u>Table of LangCode.</u></a></li>
      </ul>
    </div>
  </div>
</>
  )
}

export default ImageText