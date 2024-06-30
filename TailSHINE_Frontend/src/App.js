import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import './App.css';
import Login from './authPage/Login'
import Signup from './authPage/Signup'
import Forget from './authPage/Forget'
import PrivateRoute  from './authPage/PrivateRoute'
import Home from './home/Home'
import SideBar from './home/sidebar'
// import ContactForm from './contactForm'
import Dash from './home/Dash'
import Setting from './home/Setting'
import P404 from './home/P404'

import DocSide from './Docs/DocSide'
import ApiPDF from './Docs/ApiPDF'
import Translate from './Docs/Translate'
import ImageText from './Docs/ImageText'
import QrText from './Docs/QrText'
import Currency from './Docs/Currency'
import Grammary from './Docs/Grammary'
import Whois from './Docs/Whois'



function authCheck(){
  return localStorage.getItem('access') ? true : false;
}


function App() {
  return (  
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="*" element={<P404 />} />
        <Route path="/dashboard" element={authCheck() ? <SideBar/> : <PrivateRoute/>}>
          <Route index element={<Dash />} />
          <Route path="setting" element={<Setting />} />     
          {/* <Route path="contact" element={<ContactForm />} />     */}
        </Route>
        <Route path="/documentation" element={<DocSide/> }>
          <Route index element={<ApiPDF />} />
          <Route path="apitranslate" element={<Translate />} />
          <Route path="apiimagetotext" element={<ImageText />} />
          <Route path="apigrammary" element={<Grammary />} />
          <Route path="apicurrency" element={<Currency />} />
          <Route path="apiwhois" element={<Whois />} />
          <Route path="apiqrtotext" element={<QrText />} />
        </Route>
      </Routes>
    </Router>
 );
}
export default App;
