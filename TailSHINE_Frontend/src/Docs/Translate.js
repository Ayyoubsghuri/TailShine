import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './ApiCSS.css'
import { Link } from 'react-router-dom';

function Translate() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="flex scrol">
        <div className="sm:w-[55rem] ">
          <h1 id="first" className='text-5xl font-extrabold'>Api Translate</h1>
          <h1 className="text-2xl font-mono font-bold">What is it about?</h1>
          <p>To Start using this Api key you need send a <span className="code">GET</span> Request </p>
          <p>ApiTranslate is a simple but powerful translation tool written in python with with support for multiple translation providers. By now we offer integration with Google Translation API and language detection free and pro APIs</p>
          <h1 className="text-2xl font-mono font-bold">Why Should I Use This?</h1>
          <p>The biggest reason to use Apitranslate is to make translations in a simple way without the need of bigger effort and can be used as a way to get into in short time.</p>
          <h1 id="how" className="text-2xl font-mono font-bold">How To Use:</h1>
          <p>First you need to send data using <span className="code">JSON</span> format and send <span className="code">data</span> like this:</p>
          <p><CopyBlock
            language={'javascript'}
            text={`{
   "sentence " : "welcome to tailshine , best api service" ,
   // "source" : "en" , (default is auto , it detect sentence lang auto.)
    "trasnlateTo" : "fr"
} `}
            showLineNumbers={true}

            theme={dracula}
            wrapLines={true}
            codeBlock
          /></p>
          <p>Here the key words are:</p>
          <p><span className="code">"sentence"</span> Respresent the phrase you want transalte. <br></br><span className="code">"trasnlateTo"</span> The language you want to transalte to. <br></br><span className="code">"source"</span> The language you want to transalte from (in case you dont know the language source no need to send it on data because it's on default it's <span className="code">auto</span> ).</p>
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
    "sentence" : "welcome to tailshine , best api service",
    # "source":"en",
    "trasnlateTo":"fr"         
}
HEADERS= {
  " X-API-KEY " : " YOUR_API_KEY_GOES_HERE "
}
r = requests.get(url = 'http://localhost:8000/api/apitranslate/', data = DATA,headers=HEADERS)
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
      "sentence" : "welcome to tailshine , best api service",
      // "source":"en",
      "trasnlateTo":"fr" 
   } 
}
const apitransalte = () => {
  axios
  .get('http://localhost:8000/api/apitranslate/', config)
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
          <p> Status : <span className="code">200 OK</span> <br></br> Time : <span className="code">2.06s <br></br></span> Size : <span className="code">518b</span> </p>
          <p><CopyBlock
            language={'javascript'}
            text={`{
    "sentence": "welcome to tailshine , best api service",
    "sentence_lang": "en",
    "trasnlateTo": "fr",
    "transalted": "bienvenue à tailshine, meilleur service api",
    "languages_detection": "[en:0.9999956016699136]"
} `}
            showLineNumbers={true}

            theme={dracula}
            wrapLines={true}
            codeBlock
          /></p>

          <h1 id="langcode" className='text-5xl font-extrabold'>Languages Provide plus langCodeTo use!</h1>
          <br></br>
          <table className="table-auto text-xl bg-gray-200 w-[10%] md:w-[90%] rounded">
            <tbody ><tr className=" text-gray-700 uppercase bg-gray-400 ">
              <th className="-ml-20">Language</th>
              <th>ISO Code</th>
            </tr>
              <tr>
                <td>Abkhazian</td>
                <td>ab</td>
              </tr>
              <tr>
                <td>Afar</td>
                <td>aa</td>
              </tr>
              <tr>
                <td>Afrikaans</td>
                <td>af</td>
              </tr>
              <tr>
                <td>Akan</td>
                <td>ak</td>
              </tr>
              <tr>
                <td>Albanian</td>
                <td>sq</td>
              </tr>
              <tr>
                <td>Amharic</td>
                <td>am</td>
              </tr>
              <tr>
                <td>Arabic</td>
                <td>ar</td>
              </tr>
              <tr>
                <td>Aragonese</td>
                <td>an</td>
              </tr>
              <tr>
                <td>Armenian</td>
                <td>hy</td>
              </tr>
              <tr>
                <td>Assamese</td>
                <td>as</td>
              </tr>
              <tr>
                <td>Avaric</td>
                <td>av</td>
              </tr>
              <tr>
                <td>Avestan</td>
                <td>ae</td>
              </tr>
              <tr>
                <td>Aymara</td>
                <td>ay</td>
              </tr>
              <tr>
                <td>Azerbaijani</td>
                <td>az</td>
              </tr>
              <tr>
                <td>Bambara</td>
                <td>bm</td>
              </tr>
              <tr>
                <td>Bashkir</td>
                <td>ba</td>
              </tr>
              <tr>
                <td>Basque</td>
                <td>eu</td>
              </tr>
              <tr>
                <td>Belarusian</td>
                <td>be</td>
              </tr>
              <tr>
                <td>Bengali (Bangla)</td>
                <td>bn</td>
              </tr>
              <tr>
                <td>Bihari</td>
                <td>bh</td>
              </tr>
              <tr>
                <td>Bislama</td>
                <td>bi</td>
              </tr>
              <tr>
                <td>Bosnian</td>
                <td>bs</td>
              </tr>
              <tr>
                <td>Breton</td>
                <td>br</td>
              </tr>
              <tr>
                <td>Bulgarian</td>
                <td>bg</td>
              </tr>
              <tr>
                <td>Burmese</td>
                <td>my</td>
              </tr>
              <tr>
                <td>Catalan</td>
                <td>ca</td>
              </tr>
              <tr>
                <td>Chamorro</td>
                <td>ch</td>
              </tr>
              <tr>
                <td>Chechen</td>
                <td>ce</td>
              </tr>
              <tr>
                <td>Chichewa, Chewa, Nyanja</td>
                <td>ny</td>
              </tr>
              <tr>
                <td>Chinese</td>
                <td>zh</td>
              </tr>
              <tr>
                <td>Chinese (Simplified)</td>
                <td>zh-Hans</td>
              </tr>
              <tr>
                <td>Chinese (Traditional)</td>
                <td>zh-Hant</td>
              </tr>
              <tr>
                <td>Chuvash</td>
                <td>cv</td>
              </tr>
              <tr>
                <td>Cornish</td>
                <td>kw</td>
              </tr>
              <tr>
                <td>Corsican</td>
                <td>co</td>
              </tr>
              <tr>
                <td>Cree</td>
                <td>cr</td>
              </tr>
              <tr>
                <td>Croatian</td>
                <td>hr</td>
              </tr>
              <tr>
                <td>Czech</td>
                <td>cs</td>
              </tr>
              <tr>
                <td>Danish</td>
                <td>da</td>
              </tr>
              <tr>
                <td>Divehi, Dhivehi, Maldivian</td>
                <td>dv</td>
              </tr>
              <tr>
                <td>Dutch</td>
                <td>nl</td>
              </tr>
              <tr>
                <td>Dzongkha</td>
                <td>dz</td>
              </tr>
              <tr>
                <td>English</td>
                <td>en</td>
              </tr>
              <tr>
                <td>Esperanto</td>
                <td>eo</td>
              </tr>
              <tr>
                <td>Estonian</td>
                <td>et</td>
              </tr>
              <tr>
                <td>Ewe</td>
                <td>ee</td>
              </tr>
              <tr>
                <td>Faroese</td>
                <td>fo</td>
              </tr>
              <tr>
                <td>Fijian</td>
                <td>fj</td>
              </tr>
              <tr>
                <td>Finnish</td>
                <td>fi</td>
              </tr>
              <tr>
                <td>French</td>
                <td>fr</td>
              </tr>
              <tr>
                <td>Fula, Fulah, Pulaar, Pular</td>
                <td>ff</td>
              </tr>
              <tr>
                <td>Galician</td>
                <td>gl</td>
              </tr>
              <tr>
                <td>Gaelic (Scottish)</td>
                <td>gd</td>
              </tr>
              <tr>
                <td>Gaelic (Manx)</td>
                <td>gv</td>
              </tr>
              <tr>
                <td>Georgian</td>
                <td>ka</td>
              </tr>
              <tr>
                <td className="h-20">German</td>
                <td className="h-20">de</td>
              </tr>
              <tr>
                <td>Greek</td>
                <td>el</td>
              </tr>
              <tr>
                <td>Greenlandic</td>
                <td>kl</td>
              </tr>
              <tr>
                <td>Guarani</td>
                <td>gn</td>
              </tr>
              <tr>
                <td>Gujarati</td>
                <td>gu</td>
              </tr>
              <tr>
                <td>Haitian Creole</td>
                <td>ht</td>
              </tr>
              <tr>
                <td>Hausa</td>
                <td>ha</td>
              </tr>
              <tr>
                <td>Hebrew</td>
                <td>he</td>
              </tr>
              <tr>
                <td>Herero</td>
                <td>hz</td>
              </tr>
              <tr>
                <td>Hindi</td>
                <td>hi</td>
              </tr>
              <tr>
                <td>Hiri Motu</td>
                <td>ho</td>
              </tr>
              <tr>
                <td>Hungarian</td>
                <td>hu</td>
              </tr>
              <tr>
                <td>Icelandic</td>
                <td>is</td>
              </tr>
              <tr>
                <td>Ido</td>
                <td>io</td>
              </tr>
              <tr>
                <td>Igbo</td>
                <td>ig</td>
              </tr>
              <tr>
                <td>Indonesian</td>
                <td>id, in</td>
              </tr>
              <tr>
                <td>Interlingua</td>
                <td>ia</td>
              </tr>
              <tr>
                <td>Interlingue</td>
                <td>ie</td>
              </tr>
              <tr>
                <td>Inuktitut</td>
                <td>iu</td>
              </tr>
              <tr>
                <td>Inupiak</td>
                <td>ik</td>
              </tr>
              <tr>
                <td>Irish</td>
                <td>ga</td>
              </tr>
              <tr>
                <td>Italian</td>
                <td>it</td>
              </tr>
              <tr>
                <td>Japanese</td>
                <td>ja</td>
              </tr>
              <tr>
                <td>Javanese</td>
                <td>jv</td>
              </tr>
              <tr>
                <td>Kalaallisut, Greenlandic</td>
                <td>kl</td>
              </tr>
              <tr>
                <td>Kannada</td>
                <td>kn</td>
              </tr>
              <tr>
                <td>Kanuri</td>
                <td>kr</td>
              </tr>
              <tr>
                <td>Kashmiri</td>
                <td>ks</td>
              </tr>
              <tr>
                <td>Kazakh</td>
                <td>kk</td>
              </tr>
              <tr>
                <td>Khmer</td>
                <td>km</td>
              </tr>
              <tr>
                <td>Kikuyu</td>
                <td>ki</td>
              </tr>
              <tr>
                <td>Kinyarwanda (Rwanda)</td>
                <td>rw</td>
              </tr>
              <tr>
                <td>Kirundi</td>
                <td>rn</td>
              </tr>
              <tr>
                <td>Kyrgyz</td>
                <td>ky</td>
              </tr>
              <tr>
                <td>Komi</td>
                <td>kv</td>
              </tr>
              <tr>
                <td>Kongo</td>
                <td>kg</td>
              </tr>
              <tr>
                <td>Korean</td>
                <td>ko</td>
              </tr>
              <tr>
                <td>Kurdish</td>
                <td>ku</td>
              </tr>
              <tr>
                <td>Kwanyama</td>
                <td>kj</td>
              </tr>
              <tr>
                <td>Lao</td>
                <td>lo</td>
              </tr>
              <tr>
                <td>Latin</td>
                <td>la</td>
              </tr>
              <tr>
                <td>Latvian (Lettish)</td>
                <td>lv</td>
              </tr>
              <tr>
                <td>Limburgish ( Limburger)</td>
                <td>li</td>
              </tr>
              <tr>
                <td>Lingala</td>
                <td>ln</td>
              </tr>
              <tr>
                <td>Lithuanian</td>
                <td>lt</td>
              </tr>
              <tr>
                <td>Luga-Katanga</td>
                <td>lu</td>
              </tr>
              <tr>
                <td>Luganda, Ganda</td>
                <td>lg</td>
              </tr>
              <tr>
                <td>Luxembourgish</td>
                <td>lb</td>
              </tr>
              <tr>
                <td>Manx</td>
                <td>gv</td>
              </tr>
              <tr>
                <td>Macedonian</td>
                <td>mk</td>
              </tr>
              <tr>
                <td>Malagasy</td>
                <td>mg</td>
              </tr>
              <tr>
                <td>Malay</td>
                <td>ms</td>
              </tr>
              <tr>
                <td>Malayalam</td>
                <td>ml</td>
              </tr>
              <tr>
                <td>Maltese</td>
                <td>mt</td>
              </tr>
              <tr>
                <td>Maori</td>
                <td>mi</td>
              </tr>
              <tr>
                <td>Marathi</td>
                <td>mr</td>
              </tr>
              <tr>
                <td>Marshallese</td>
                <td>mh</td>
              </tr>
              <tr>
                <td>Moldavian</td>
                <td>mo</td>
              </tr>
              <tr>
                <td>Mongolian</td>
                <td>mn</td>
              </tr>
              <tr>
                <td>Nauru</td>
                <td>na</td>
              </tr>
              <tr>
                <td>Navajo</td>
                <td>nv</td>
              </tr>
              <tr>
                <td>Ndonga</td>
                <td>ng</td>
              </tr>
              <tr>
                <td>Northern Ndebele</td>
                <td>nd</td>
              </tr>
              <tr>
                <td>Nepali</td>
                <td>ne</td>
              </tr>
              <tr>
                <td>Norwegian</td>
                <td>no</td>
              </tr>
              <tr>
                <td>Norwegian bokmål</td>
                <td>nb</td>
              </tr>
              <tr>
                <td>Norwegian nynorsk</td>
                <td>nn</td>
              </tr>
              <tr>
                <td>Nuosu</td>
                <td>ii</td>
              </tr>
              <tr>
                <td>Occitan</td>
                <td>oc</td>
              </tr>
              <tr>
                <td>Ojibwe</td>
                <td>oj</td>
              </tr>
              <tr>
                <td>Old Church Slavonic, Old Bulgarian</td>
                <td>cu</td>
              </tr>
              <tr>
                <td>Oriya</td>
                <td>or</td>
              </tr>
              <tr>
                <td>Oromo (Afaan Oromo)</td>
                <td>om</td>
              </tr>
              <tr>
                <td>Ossetian</td>
                <td>os</td>
              </tr>
              <tr>
                <td>Pāli</td>
                <td>pi</td>
              </tr>
              <tr>
                <td>Pashto, Pushto</td>
                <td>ps</td>
              </tr>
              <tr>
                <td>Persian (Farsi)</td>
                <td>fa</td>
              </tr>
              <tr>
                <td>Polish</td>
                <td>pl</td>
              </tr>
              <tr>
                <td>Portuguese</td>
                <td>pt</td>
              </tr>
              <tr>
                <td>Punjabi (Eastern)</td>
                <td>pa</td>
              </tr>
              <tr>
                <td>Quechua</td>
                <td>qu</td>
              </tr>
              <tr>
                <td>Romansh</td>
                <td>rm</td>
              </tr>
              <tr>
                <td>Romanian</td>
                <td>ro</td>
              </tr>
              <tr>
                <td>Russian</td>
                <td>ru</td>
              </tr>
              <tr>
                <td>Sami</td>
                <td>se</td>
              </tr>
              <tr>
                <td>Samoan</td>
                <td>sm</td>
              </tr>
              <tr>
                <td>Sango</td>
                <td>sg</td>
              </tr>
              <tr>
                <td>Sanskrit</td>
                <td>sa</td>
              </tr>
              <tr>
                <td>Serbian</td>
                <td>sr</td>
              </tr>
              <tr>
                <td>Serbo-Croatian</td>
                <td>sh</td>
              </tr>
              <tr>
                <td>Sesotho</td>
                <td>st</td>
              </tr>
              <tr>
                <td>Setswana</td>
                <td>tn</td>
              </tr>
              <tr>
                <td>Shona</td>
                <td>sn</td>
              </tr>
              <tr>
                <td>Sichuan Yi</td>
                <td>ii</td>
              </tr>
              <tr>
                <td>Sindhi</td>
                <td>sd</td>
              </tr>
              <tr>
                <td>Sinhalese</td>
                <td>si</td>
              </tr>
              <tr>
                <td>Siswati</td>
                <td>ss</td>
              </tr>
              <tr>
                <td>Slovak</td>
                <td>sk</td>
              </tr>
              <tr>
                <td>Slovenian</td>
                <td>sl</td>
              </tr>
              <tr>
                <td>Somali</td>
                <td>so</td>
              </tr>
              <tr>
                <td>Southern Ndebele</td>
                <td>nr</td>
              </tr>
              <tr>
                <td>Spanish</td>
                <td>es</td>
              </tr>
              <tr>
                <td>Sundanese</td>
                <td>su</td>
              </tr>
              <tr>
                <td>Swahili (Kiswahili)</td>
                <td>sw</td>
              </tr>
              <tr>
                <td>Swati</td>
                <td>ss</td>
              </tr>
              <tr>
                <td>Swedish</td>
                <td>sv</td>
              </tr>
              <tr>
                <td>Tagalog</td>
                <td>tl</td>
              </tr>
              <tr>
                <td>Tahitian</td>
                <td>ty</td>
              </tr>
              <tr>
                <td>Tajik</td>
                <td>tg</td>
              </tr>
              <tr>
                <td>Tamil</td>
                <td>ta</td>
              </tr>
              <tr>
                <td>Tatar</td>
                <td>tt</td>
              </tr>
              <tr>
                <td>Telugu</td>
                <td>te</td>
              </tr>
              <tr>
                <td>Thai</td>
                <td>th</td>
              </tr>
              <tr>
                <td>Tibetan</td>
                <td>bo</td>
              </tr>
              <tr>
                <td>Tigrinya</td>
                <td>ti</td>
              </tr>
              <tr>
                <td>Tonga</td>
                <td>to</td>
              </tr>
              <tr>
                <td>Tsonga</td>
                <td>ts</td>
              </tr>
              <tr>
                <td>Turkish</td>
                <td>tr</td>
              </tr>
              <tr>
                <td>Turkmen</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>Twi</td>
                <td>tw</td>
              </tr>
              <tr>
                <td>Uyghur</td>
                <td>ug</td>
              </tr>
              <tr>
                <td>Ukrainian</td>
                <td>uk</td>
              </tr>
              <tr>
                <td>Urdu</td>
                <td>ur</td>
              </tr>
              <tr>
                <td>Uzbek</td>
                <td>uz</td>
              </tr>
              <tr>
                <td>Venda</td>
                <td>ve</td>
              </tr>
              <tr>
                <td>Vietnamese</td>
                <td>vi</td>
              </tr>
              <tr>
                <td>Volapük</td>
                <td>vo</td>
              </tr>
              <tr>
                <td>Wallon</td>
                <td>wa</td>
              </tr>
              <tr>
                <td>Welsh</td>
                <td>cy</td>
              </tr>
              <tr>
                <td>Wolof</td>
                <td>wo</td>
              </tr>
              <tr>
                <td>Western Frisian</td>
                <td>fy</td>
              </tr>
              <tr>
                <td>Xhosa</td>
                <td>xh</td>
              </tr>
              <tr>
                <td>Yiddish</td>
                <td>yi, ji</td>
              </tr>
              <tr>
                <td>Yoruba</td>
                <td>yo</td>
              </tr>
              <tr>
                <td>Zhuang, Chuang</td>
                <td>za</td>
              </tr>
              <tr>
                <td>Zulu</td>
                <td>zu</td>
              </tr>
            </tbody></table>
          <br></br>
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

export default Translate