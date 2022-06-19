
import { useNavigate } from "react-router-dom";
// import '../Logincomponent/login.css'
export default function Login(props) {
    const neg = useNavigate()
    var emailbox = undefined;
    var passwordbox = undefined;

    var logindata = (event) => {

        event.preventDefault()

        var tdata = {
            email: emailbox.value,
            password: passwordbox.value
        }
        console.log(tdata)


        fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(tdata)
        }).then(response => response.json()
        ).then(data => {
            console.log(data)
            console.log("helooooooooooooooooooo")

            if (data.status) {
                console.log("data saved")
                localStorage.setItem("tokendata", JSON.stringify(data))
                props.changemenu(false)
                neg('/Allusers')

            }else{
                alert(data.msg)
            }
        }).catch(err => {
            console.log("not saved")
        });





    }
    return <>
     
     <div id="contact" class="contact">
  <div class="container-fluid padding_left2">
    <div class="white_color">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

          <form class="contact_bg"onSubmit={logindata} >
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage">
                  <h2>Log<strong class="yellow">In</strong></h2>
                </div>
                <div class="col-md-12">
                  <input class="contactus"  name="name"
                                            type="email"
                                     

                                            placeholder="user email"
                                            required
                                            ref={c => emailbox = c}/>
                </div>
                <div class="col-md-12">
                  <input class="contactus"  name="password"
                                            type="password"
                                          
                                            placeholder="user password"
                                            required
                                            ref={c => passwordbox = c}/>
                </div>
        
                
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button class="send" type="submit" >login</button>
                </div>
              </div>
              </div>
            </form>
            </div>
          </div>
        </div>

      </div>
    </div>

      
    </>
}

