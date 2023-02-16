import React from 'react'
// import Header from '../components/Header';
// import Home from '../components/Home';
// import About from '../components/About';
// import Whatwedo from '../components/Whatwedo';
// import Imagegallery from '../components/Imagegallery';
import Collabs from '../components/Collabs';
import Contacts from '../components/Contacts';
import MyNavbar from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Whatwedo from '../components/Whatwedo';


function Landingpage() {
  return (
    <>
     {<><MyNavbar /><Home />
     <About />  <Whatwedo />
     </>

     /*
     <Whatwedo />
     <Imagegallery /> */}
     <Collabs />
     <Contacts />
     {/* <Footer /> */}
    </>
  )
}

export default Landingpage