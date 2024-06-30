import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';

function Grammary() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div className="flex scrol">
    <div className="sm:w-[55rem] ">
      <h1 id="first" className='text-5xl font-extrabold'>Api Grammary</h1>
      <h1 className="text-2xl font-mono font-bold">What is it about?</h1>
      <p>To Start using this Api key you need send a <span className="code">GET</span> Request </p>
      <p>ApiGrammary is a powerful Tool to check your text grammary and give you the right answear.</p>
      <h1 className="text-2xl font-mono font-bold">Why Should I Use This?</h1>
      <p>For simple reason to use ApiGrammary is it because ApiGrammary make tings easier and get data in a simple way without the need of bigger effort (sometimes this api take a long time depend of phrase you send).</p>
      <h1 id="how" className="text-2xl font-mono font-bold">How To Use:</h1>
      <p>First you need to send in <span className="code">json</span> format to your data , for example:</p>
      <p><CopyBlock
        language={'python'}
        text={`{
    "phrase":"Just paste your text here and click send yourr request. this only a a test to check and shows some potential errors. ",
    "advanced": true
}`}
        showLineNumbers={true}

        theme={dracula}
        wrapLines={true}
        codeBlock
      /></p>

      <p>Here the key words are:</p>
      <p><span className="code">"phrase"</span> Respresent the phrase you trying to check grammar on. <br></br> <span className="code">"advanced"</span> it's optional if you want full data of grammary correction and position (is per default false) , conside it can take a while to get data is advanced selected to <span className="code">True</span> . </p>
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
    "phrase":"Just paste your text here and click send yourr request. this only a a test to check and shows some potential errors. ",
    "advanced": True        
}
HEADERS= {
    "X-API-KEY":"YOUR_API_KEY_GOES_HERE"
}
r = requests.get(url = 'http://localhost:8000/api/apigrammar/',data=DATA
                                        ,headers=HEADERS)
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
  data={
    "phrase":"Just paste your text here and click send yourr request. this only a a test to check and shows some potential errors. ",
    "advanced":True    
  }
}
const apiGrammary = () => {
  axios
    .get('http://localhost:8000/api/apigrammar/', config, formData)
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
      <p> Status : <span className="code">200 OK</span> <br></br> Time : <span className="code">26.49s <br></br></span> Size : <span className="code">386b</span> </p>
      <p><CopyBlock
        language={'javascript'}
        text={`{
"mistakes-corrections": [
    [
        "yourr",
        "your"
    ],
    [
        "this",
        "This"
    ],
    [
        "a a",
        "a"
    ]
],
"mistakes-advanced": [
    [
        "MORFOLOGIK_RULE_EN_US",
        "Possible spelling mistake found.",
        [
            "your",
            "yours"
        ],
        43,
        "...ust paste your text here and click send yourr request. this only a a test to check an...",
        41,
        5,
        "TYPOS",
        "misspelling",
        "Just paste your text here and click send yourr request."
    ],
    [
        "UPPERCASE_SENTENCE_START",
        "This sentence does not start with an uppercase letter.",
        [
            "This"
        ],
        43,
        "...text here and click send yourr request. this only a a test to check and shows some p...",
        56,
        4,
        "CASING",
        "typographical",
        "this only a a test to check and shows some potential errors."
    ],
    [
        "ENGLISH_WORD_REPEAT_RULE",
        "Possible typo: you repeated a word",
        [
            "a"
        ],
        43,
        "...and click send yourr request. this only a a test to check and shows some potential ...",
        66,
        3,
        "MISC",
        "duplication",
        "this only a a test to check and shows some potential errors."
    ]
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

export default Grammary