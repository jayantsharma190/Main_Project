import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ContactsIcon from '@material-ui/icons/Contacts';
import './Register.css'

function Register() {

    let [seller,setSeller] = useState(1);
    // let [student,setStudent] = useState(0);


    const deciderFun = (decider) => {
        if(decider == 'seller')
        {
            console.log("seller");
            setSeller(1);
        }
        if(decider == 'student')
        {
            console.log("user");
            setSeller(0);
        }
    }

    const sellerFun = ()=>{
         return (<Link onClick={()=>{
             deciderFun('seller');
         }}>Register as Seller ...?</Link>)
        }

    const studentFun = ()=>{
        return(<Link onClick={()=>{
            deciderFun('student');
        }}>Register as Buyer ...?</Link>)
    }

    return (

        <div className="register_container">
            {
            console.log(seller)
            }
            <div className="register_side_view">
                <h2>Some content here</h2>
                <p>Here as well ...</p>
            </div>
            <div className="register">
                <div className="seller_register common_register">
                   {
                       seller ? <>
                                <h2>Seller Register Form</h2>
                                <form className="common_register">
                                    <label>
                                        <PersonIcon/>
                                        <input type="text" placeholder="Enter your name"/>
                                    </label>
                                    <label>
                                        <EmailIcon/>
                                        <input type="email" placeholder="Enter your email"/>
                                    </label>
                                    <label>
                                        <LockIcon/>
                                        <input type="password" placeholder="Enter your password" />
                                    </label>
                                    <label>
                                        <ContactsIcon/>
                                        <input type="number" placeholder="Enter your mobile number" />
                                    </label>
                                    <label>
                                        <button>Register</button>
                                    </label>
                                </form>
                       </> :  <>
                       <div className="student_register common_register">
                                <h2>Buyer Register Form </h2>
                                <form className="common_register">
                                    <label>
                                        <PersonIcon/>
                                        <input type="text" placeholder="Enter your name"/>
                                    </label>
                                    <label>
                                        <EmailIcon/>
                                        <input type="email" placeholder="Enter your email"/>
                                    </label>
                                    <label>
                                        <LockIcon/>
                                        <input type="password" placeholder="Enter your password" />
                                    </label>
                                    <label>
                                        <ContactsIcon/>
                                        <input type="number" placeholder="Enter your mobile number" />
                                    </label>
                                    <label>
                                        <button>Register</button>
                                    </label>
                                </form>
                        </div>
                        </>
                   }

                </div>

                <div className="register_header">
                  {
                     seller ? studentFun() : sellerFun()
                  }
                </div>
                <Link to="/login">Already Have an account ?</Link>
            </div>


        </div>
    )
}

export default Register
