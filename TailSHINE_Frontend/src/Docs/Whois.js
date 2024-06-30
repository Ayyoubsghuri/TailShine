import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import './ApiCSS.css'

function Whois() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="flex scrol">
        <div className="sm:w-[55rem] ">
          <h1 id="first" className='text-5xl font-extrabold'>ApiWhois</h1>
          <h1 className="text-2xl font-mono font-bold">What is it about?</h1>
          <p>To Start using this Api key you need send a <span className="code">GET</span> Request </p>
          <p>ApiWhois is a simple but powerful Whois tool to get data for domain date expiration and location.</p>
          <h1 className="text-2xl font-mono font-bold">Why Should I Use This?</h1>
          <p>The biggest reason to use ApiWhois is to make lookup fro data in a simple way without the need of bigger effort and can be used as a way to get into in short time.</p>
          <h1 id="how" className="text-2xl font-mono font-bold">How To Use:</h1>
          <p>First you need to send data using <span className="code">JSON</span> format and send <span className="code">data</span> like this:</p>
          <p><CopyBlock
            language={'javascript'}
            text={`{
   "domain " : "google.com" 
} `}
            showLineNumbers={true}

            theme={dracula}
            wrapLines={true}
            codeBlock
          /></p>
          <p>Here the key words are:</p>
          <p><span className="code">"domain"</span> Respresent the domain you want to lookup for.</p>
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

          <h1 id="request" className="text-2xl font-mono font-bold py-3">Example Of how to send request in Python & Javascript:</h1>
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
    "domain" : "google.com"
}
HEADERS= {
  " X-API-KEY " : " YOUR_API_KEY_GOES_HERE "
}
r = requests.get(url = 'http://localhost:8000/api/apiwhois/', data = DATA,headers=HEADERS)
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
      "domain" : "google.com"
   } 
}
const apiwhois = () => {
  axios
  .get('http://localhost:8000/api/apiwhois/', config)
  .then((response) => {
      return response.data;
  })
  .catch((error) => {
      // Something went wrong 🚫
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
          <p> Status : <span className="code">200 OK</span> <br></br> Time : <span className="code">2.26s <br></br></span> Size : <span className="code">1.83kb</span> </p>
          <p><CopyBlock
            language={'javascript'}
            text={`{
"domain": {
    "domain_name": [
        "GOOGLE.COM",
        "google.com"
    ],
    "registrar": "MarkMonitor, Inc.",
    "whois_server": "whois.markmonitor.com",
    "referral_url": null,
    "updated_date": "2019-09-09T15:39:04",
    "creation_date": [
        "1997-09-15T04:00:00",
        "1997-09-15T07:00:00"
    ],
    "expiration_date": [
        "2028-09-14T04:00:00",
        "2028-09-13T07:00:00"
    ],
    "name_servers": [
        "NS1.GOOGLE.COM",
        "NS2.GOOGLE.COM",
        "NS3.GOOGLE.COM",
        "NS4.GOOGLE.COM",
        "ns1.google.com",
        "ns3.google.com",
        "ns4.google.com",
        "ns2.google.com"
    ],
    "status": [
        "clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited",
        "clientTransferProhibited https://icann.org/epp#clientTransferProhibited",
        "clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited",
        "serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited",
        "serverTransferProhibited https://icann.org/epp#serverTransferProhibited",
        "serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited",
        "clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)",
        "clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)",
        "clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)",
        "serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited)",
        "serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited)",
        "serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)"
    ],
    "emails": [
        "abusecomplaints@markmonitor.com",
        "whoisrequest@markmonitor.com"
    ],
    "dnssec": "unsigned",
    "name": null,
    "org": "Google LLC",
    "address": null,
    "city": null,
    "state": "CA",
    "zipcode": null,
    "country": "US"
}
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
            <li><a href='#first' className='text-[blue]'><u>Getting Started</u></a></li>
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

export default Whois