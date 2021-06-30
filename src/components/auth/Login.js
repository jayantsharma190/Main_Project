import React , {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './Login.css';
import {auth,db,storage} from './firebase.js';
import Loader from "../Loader/Loader";
import firebase from 'firebase';
import { useStateValue } from './ReactContextApi/stateProvider';
import {useParams,useHistory} from 'react-router-dom';
// import { NULL } from 'node-sass';

function Login() {



    let [isLoader,setisLoader] = useState(true);

    let error_show = false;

    let url = useHistory();




    // let [userPhone,setUserPhone] = useState('');
    // let [userName,setUserName] = useState('');

   let userName = "";
   let userPhone = "";
   let userRole = "";
   let userId = "";


    // let [allValues,setallValues] = useState({
    //     isLoader:true,
    //     error_show:false,
    //     userPhone:'',
    //     userName:'',
    // });

    let [state,dispatch] = useStateValue();

    if(state?.isLoggenIn === true)
    {
        this.url.push('/home');
        console.log("inside login after logged in");
    }
    // let{isLoader,error_show,userPhone,userName} = allValues;

    // let recaptcha = ()=>{
    //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('invisible_recaptcha', {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //           // reCAPTCHA solved, allow signInWithPhoneNumber.
    //           onLoginCLicked();
    //         }
    //       });
    // }

    // if(state.isLoggenIn === true)
    // {
    //     window.location.
    // }

    let onLoginCLicked =  async (event)=>{


            if(userName === "" || userPhone === "")
            {
                alert("Please Enter both the fields");
                window.location.reload();
            }
            else
            {
            setisLoader(true);
             await db.collection('users').onSnapshot((snapshot)=>{

                    let flag = 0;
                   let temp = snapshot.docs.map(doc=>{return {userId:doc.id,data:doc.data()}})
                    console.log(temp);
                    // userId = snapshot.docs.id;
                    // console.log(temp);
                    //checking user exist or not
                    for(let i=0;i<temp.length;i++)
                    {
                        if(temp[i].data.userPhone === userPhone && temp[i].data.userName === userName)
                        {
                            if(temp[i].data.isActive === false )
                            {
                                alert("Oops your account is blocked by admin...");
                                window.location.reload();
                            }
                            else
                            {
                                flag = 1;
                                userName = temp[i].data.userName;
                                userPhone = temp[i].data.userPhone;
                                userRole = temp[i].data.userRole;
                                userId = temp[i].userId;
                                break;
                            }

                        }
                    }

                    if(flag)
                    {

                        console.log("yes cred are right");
                        dispatch({
                            types:"SET_USER",
                            isLoggedIn:true,
                            userName:userName,
                            userPhone:userPhone,
                            userRole:userRole,
                            userId:userId
                        });

                    //     const phoneNumber = "+91"+userPhone;
                    //       recaptcha();
                    //         const appVerifier = window.recaptchaVerifier;
                    //         // setallValues({isLoader:true});
                    //      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                    //             .then((confirmationResult) => {
                    //                 const code = window.prompt("enter your otp here");
                    //                  confirmationResult.confirm(code).then((result) => {
                    //                   // User signed in successfully.
                    //                   const user = result.user;
                    //                   console.log(user);
                    //                   // ...
                    //                 }).catch((error) => {
                    //                     alert("Wrong OTP oops try again....");
                    //                     window.location.reload();
                    //                 });
                    //                 window.confirmationResult = confirmationResult;
                    //             // ...
                    //             }).catch((error) => {
                    //             // Error; SMS not sent
                    //             // ...
                    //                 alert("OTP is not sent please try again ...");
                    //                 window.location.reload();
                    //             });
                    }
                    else
                    {
                        alert("please register yourself fist as Seller or user");
                        window.location.reload();
                    }
                });


            }

            // setallValues({...allValues,isLoader:false});




    //     const phoneNumber = "+91"+userPhone;
    //     recaptcha();
    //     const appVerifier = window.recaptchaVerifier;
    //     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    //         .then((confirmationResult) => {
    //             const code = window.prompt("enter your otp here");
    //             confirmationResult.confirm(code).then((result) => {
    //               // User signed in successfully.
    //               const user = result.user;
    //               console.log(user);
    //               // ...
    //             }).catch((error) => {
    //               // User couldn't sign in (bad verification code?)
    //               // ...
    //             });
    //         window.confirmationResult = confirmationResult;
    //         // ...
    //         }).catch((error) => {
    //         // Error; SMS not sent
    //         // ...
    // });

    }

    useEffect(()=>{
        if(state?.isLoggedIn)
        {
            if(state?.userRole)
            url.push(`/in/seller/${state?.userId}`);
            else
            {
                window.location.reload();
            }
        }
    },[state]);


      useEffect(()=>{
          function updateLoader(){
           setTimeout(()=>{
               setisLoader(false);
            },3000);
          }

        // setallValues({...allValues,isLoader:false});

          updateLoader();
      },[isLoader,state]);





      useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return (
        <>
        {
            console.log('body')
        }

        {isLoader||error_show?"":<div className="login_box_container">
            <div className="login_box_side_view">
            <h2>Some Content here</h2>
            <p>Here as well..</p>
            </div>
            <div className="login_box">
                <div className="login_header">
                    <h5>Login ... </h5>
                </div>
                <div className="login_border">

                </div>
                <div className="login_form">
                    <label>
                        <EmailIcon/>
                        <input type="text" placeholder="Enter your name" onChange = {(event)=>{
                               userName = event.target.value;
                                    }}/>
                    </label>
                    <label>
                        <LockIcon/>
                        <input  type="number" placeholder="Enter your phone number" onChange = {(event)=>{
                                    userPhone = event.target.value;
                                }}/>
                    </label>
                    <label>
                        <button onClick={()=>{onLoginCLicked()}}>Login</button>
                    </label>
                    <label>
                        <button>Continue with google ...</button>
                    </label>
                    <label>
                        <div className="login_to_register">
                            <Link to="/register" >
                            <p>Register yourself ... ?</p>
                            </Link>
                        </div>
                    </label>
                </div>


            </div>

        </div>
        }
         <div id="invisible_recaptcha"></div>
                        {
                            isLoader?<Loader/>:""
                        }

                        {
                            error_show?"please refresh and try again":""
                        }
    </>
    )
}

export default Login;
