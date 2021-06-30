import React,{useState} from 'react';
import Box from '@material-ui/core/Box';
import './MyHeader.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../auth/ReactContextApi/stateProvider';

function MyHeader() {

let [state,dispatch] = useStateValue();

    return (
        <>
            <div className="my_header">
                {/* <Link to="/" class="logo" target="_blank">
                    <img src="t-logo.jpg" alt="iamge" />
                </Link> */}

                <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
                <label for="menu-icon"></label>
                    <nav className="nav">
                        <ul class="pt-5">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">SignUp</Link></li>
                            {
                                state?.isLoggedIn?<li><Link to="/">Logout</Link></li>:""
                            }
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>

            </div>
            <div className="my_header2">
                <div className = "nav_container">
                    <div className="left_nav">
                            <Link className="link-style">
                            <img src="t-logo.jpg" className="mytoplogo" alt="top-logo"/>
                            <span className="web_name">Pinpointstay</span>
                            </Link>
                    </div>
                    <div className="right_nav">
                            <p><Link className="link-style" to="/">Home</Link></p>
                            {
                               state?.isLoggedIn?"":<p><Link className = "link-style" to="/login">SignUp</Link></p>
                            }
                            {
                               state?.isLoggedIn?<p><Link to={`/in/${state?.userRole}/${state?.userId}`} className = "link-style">Profile</Link></p>:""
                            }

                            <p><Link className="link-style" to="/blogs">Blog</Link></p>
                            {
                                !state?.isLoggedIn?<p><Link className = "link-style" to="/about">About</Link></p>:""
                            }
                            {
                               state?.isLoggedIn?<p><Link to="/logout" className = "link-style">Logout</Link></p>:""
                           }
                    </div>
                </div>
            </div>
     </>
    )
}

export default MyHeader;
