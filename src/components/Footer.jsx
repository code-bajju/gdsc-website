import React from 'react'
import '../sassfiles/Footer.sass'
import { FaChevronRight} from 'react-icons/fa';

function Footer() {
  return (
    <div className="Container">
      <div className="parallaxcontainer " style={{backgroundImage: `url("https://th.bing.com/th/id/OIP.XSXnb0_Ht34irAJpUrANHQHaEo?pid=ImgDet&rs=1")`}}>
       <ul>
        <li>CONTACT  
          <div className="svg">
          <FaChevronRight/>
          </div>
        </li>
        <li>ABOUT MIKELA  
        <div className="svg">
          <FaChevronRight/>
          </div>
        </li>
        <li>HIRE MIKELA 
        <div className="svg">
          <FaChevronRight/>
          </div>
        </li>
       </ul>
    </div>
    <div className="map"></div>
    </div>
  )
}

export default Footer