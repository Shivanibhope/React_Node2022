import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import './Allusers.css';
export default function Allusers(props){

   const[tabled,settabled]= useState([])
    const nev = useNavigate()
 
var Indata = () =>{
       const localdata = JSON.parse(localStorage.getItem("tokendata"))
    console.log(localdata)
    const token = localdata.token
    console.log(token)
     fetch('/allusers', {
        method : "GET" ,
        headers :{
             "Content-Type" : "application/json", 
             'Authorization': 'Bearer ' + token
        }
     }).then(response=>response.json()).then(data => {
        //  console.log(data)
        if (data.status) {
             settabled(data.data)
        }else{
            nev("/login")
            props.changemenu(true)
        }
        
     }).catch(error=>{
         console.log(error)
     })
    }
useEffect(()=>{
    Indata()
}, [])

    return <>
         <div id="contact" class="contact">
  <div class="container-fluid padding_left2">
    <div class="white_color">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <div>           
      <table border="2" cellSpacing="4"  align="center" cellPadding="4" id="tab1" >
         <tr>
             <th>first_name</th>
             <th>last_Name</th>
               <th>Email</th>
             <th>Phone</th>
            <th>address</th>
            <th>gender</th>
            </tr> 
  {tabled.map((data,index)=>{
      
       return <tr>
           <td>{data.first_name}</td>
           <td>{data.last_name}</td>
           <td>{data.email}</td>
           <td>{data.phone}</td>
           <td>{data.address}</td>
           <td>{data.gender}</td>
           
</tr>
  })}
      </table>        
      </div>
          
            </div>
          </div>
        </div>

      </div>
    </div>

        {/* <div>           
      <table border="1" cellSpacing="4" cellPadding="4" id="tab1" >
         <tr>
             <th>first_name</th>
             <th>last_Name</th>
               <th>Email</th>
             <th>Phone</th>
            <th>address</th>
            <th>gender</th>
            </tr> 
  {tabled.map((data,index)=>{
      
       return <tr>
           <td>{data.first_name}</td>
           <td>{data.last_name}</td>
           <td>{data.email}</td>
           <td>{data.phone}</td>
           <td>{data.address}</td>
           <td>{data.gender}</td>
           
</tr>
  })}
      </table>        
      </div> */}
      </>
                  
}