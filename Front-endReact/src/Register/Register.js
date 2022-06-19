import { useNavigate } from "react-router-dom";


export default function Register() {

    const neg = useNavigate()



    let first_nameBox = undefined
    let last_nameBox = undefined
    let emailBox = undefined
    let phoneBox = undefined
    let addressBox = undefined
    let genderBox = undefined
    let passwordBox = undefined
    let confirm_passwordBox = undefined
 const Reg = (event) => {
        event.preventDefault()
        // console.log('hello buddy')
        const obj = {
            first_name: first_nameBox.value,
            last_name: last_nameBox.value,
            email: emailBox.value,
            phone: phoneBox.value,
            address: addressBox.value,
            gender: genderBox.value,
            password: passwordBox.value,
            confirm_password: confirm_passwordBox.value
        }
        console.log(obj)
        fetch("/signUp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
              
                if(data.status){
                      neg('/')
                }else{
                    alert(data.msg)
                }
            })
            .catch((err) => {console.log(err) })
    }
    return <>
        <div id="contact" class="contact">
            <div class="container-fluid padding_left2">
                <div class="white_color">
                    <div class="row">

                
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-5">

                            <form class="contact_bg"  onSubmit={Reg}>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="titlepage">
                                            <h2> Sign <strong class="yellow">Up</strong></h2>
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" name="name"
                                                type="text"

                                                placeholder=" user first_name"
                                                required
                                                ref={c => first_nameBox = c} />
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" name="name"
                                                type="text"


                                                placeholder="user last_name"
                                                required
                                                ref={c => last_nameBox = c} />
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" name="name"
                                                type="email"

                                                placeholder="user email"
                                                required
                                                ref={c => emailBox = c} />
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" name="name"
                                                type="text"

                                                placeholder="user contact"
                                                required
                                                ref={c => phoneBox = c} />
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" name="name"
                                                name="name"
                                                type="text"

                                                placeholder=" user address"
                                                required
                                                ref={c => addressBox = c} />
                                        </div>
                                        <div class="col-md-12">
                                            <select class="contactus" name="name"
                                                type=""

                                                placeholder="user gender"
                                                required
                                                ref={c => genderBox = c} >
                                                    <option>user gender</option>

                                                    <option >Female</option>
                                                    <option>male</option>
                                                    <option>other</option>
                                                     </select>
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" name="password"
                                                type="password"

                                                placeholder="user password"
                                                required
                                                ref={c => passwordBox = c} />
                                        </div>
                                        <div class="col-md-12">
                                            <input class="contactus" name="name"
                                                type="password"

                                                placeholder="confirm_password"
                                                required
                                                ref={c => confirm_passwordBox = c} />
                                        </div>

                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <button class="send" type="submit">Sign Up</button>
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