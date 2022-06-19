import React from "react";
import Home from './Homecomponent/Home'
import Register from './Register/Register'
import Login from './Logincomponent/login'
import Allusers from './Alluserscomponent/Allusers'
import { Route, Routes } from "react-router-dom";

export default class App extends React.Component {
  constructor(){
    super() 
    this.state ={
      menu : true
    }
  }
 changemenu = (a)=>{
   this.setState({menu:a})
 }
render() {
    return <div>

   <Home menu={this.state.menu} changemenu={this.changemenu}/>
   <Routes>
    <Route path='/' element={<Login  changemenu={this.changemenu}/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Allusers' element={<Allusers  changemenu={this.changemenu}/>}/>
    </Routes>

   
    </div>
  }

}