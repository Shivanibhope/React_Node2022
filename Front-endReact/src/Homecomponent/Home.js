// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import './home.css';


export default function Home(props) {


  //token delete for logout
  var deletetoken = () => {
    localStorage.removeItem("tokendata")
    props.changemenu(true)
  }
  return <>
    <header>

      <div class="header-top">
        <div class="header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo">
                      {/* <a href="index.html"><img src="images/logo192.png" alt="#" /></a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-10 col-lg-8 col-md-8 col-sm-9">

                <div class="header_information">
                  <div class="menu-area">
                    <div class="limit-box">
                      <nav class="main-menu ">

                        {props.menu ? <ul class="menu-area-main">

                          {/* <li class="active">
                      <Link to='/' >Home</Link> </li> */}
                          <li> <Link to='/'>login</Link> </li>
                          <li>  <Link to='/Register'>SingUp</Link> </li>
                        </ul> : <ul class="menu-area-main">
                          
<li class="active">
                             <Link to='/' >Home</Link> </li> 
                          <li>  <Link to='/Allusers'>Allusers</Link> </li>

                          <li>   <Link to='/' onClick={deletetoken}>Logout</Link></li>
                        </ul>}

                      </nav>
                    

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>


  </>
}