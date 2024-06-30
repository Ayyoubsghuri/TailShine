import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import { Link } from 'react-router-dom';


const ApiPDF = () => {
  return (
    <>
      <div className="flex" >
        <div className="sm:w-[55rem]">
          <h1 id="first" className='text-5xl font-extrabold '>Getting Started</h1>
          <br></br>
          <p> To get started using TailSHINE, you should <a href='/signup' className='text-[blue]'><u> Create account</u></a> first on our system. To get a apikey of your own.</p>
          <br></br>
          <hr></hr>
          <br></br>
          <h1 className='text-2xl font-mono font-bold'>Ensure You Have a Working APIKEY & Account</h1>
          <p>As a first step, you should check that you have a working ApiKEY with an activated account. This can be done by just checking you dashboard to check you apikey and for making sure that your account is active.</p>
          <br></br>
          <hr></hr>
          <h1 className='text-2xl font-mono font-bold '>How To Use</h1>
          <p>All your requests should have a X-Api-Key in authorization (Header), Like this:</p>
          <br></br>
          <CopyBlock
                  language={'javascript'}
                  text={` X-API-KEY  : { YOU_API_KEY } ;  `}
                  showLineNumbers={false}

                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
          <br></br>
          <p>Remember to keep you api key secure like using .env for example to not expose it.</p>
          <p>in case your api key exposed or have any trouble to work whit it contact admin to explain your situation.</p>
          <br></br>
          <hr></hr>
          <br></br>
          <h1 id='second' className='text-5xl font-extrabold'>Api's We Provide</h1>
          <p>To learn how to use this Api's , check On sidebar your needed api.</p>         
           <br></br>
           <CopyBlock
                  language={'python'}
                  text={`#Api Translate
#Api Grammary
#Api Image to Text
#Api CurrencyExchanger
#Api Qr Code Decoder
#Api Whois `}
                  showLineNumbers={false}

                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
                <br></br>
          <p className='font-mono'> We will add more Api's in future.</p>
          <hr></hr>
          {/* <p>Check Next. {<Link to="documentation/signup" className='text-[blue]'><u> Api Transalte</u></Link>} documentation.</p> */}
        </div>
        <div className="sm:w-[15rem] p-10 hidden sm:block sm:fixed top-1 right-0 ">
          <ul >
            <li><a href='#first' className='text-[blue]'><u>Getting Started</u></a></li>
            <li><a href='#second' className='text-[blue]'><u>Api We Provide</u></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ApiPDF