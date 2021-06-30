import React,{useState,useEffect} from 'react';
import {Img} from 'react-image'
import { useHistory } from 'react-router';
import { useStateValue } from '../auth/ReactContextApi/stateProvider';
import Loader from '../Loader/Loader';

import "./About.css";

function About() {

    let [isLoader,setisLoader] = useState(true);

    let [state,dispatch] = useStateValue();

    let url = useHistory();


    useEffect(()=>{
        if(state?.isLoggedIn)
        {
            url.push('/');
        }
        const loaderfun = ()=>{
            setTimeout(()=>{
                setisLoader(false);
            },5000);
        }

        loaderfun();
    },[isLoader]);



    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);


    return (
        <>
        {isLoader?<Loader/>:<div className="about">

            <div className="about_header">
                <h2><u>About Us</u></h2>
            </div>
            {/* <h3>We're a team of fully</h3> */}
            <div className="about_content">

                <div className="about_box">
                    <div className="about_box_left">
                        <Img src="https://wallpapercave.com/wp/wp3222446.jpg" loader = {<Loader/>} alt="images" />
                    </div>
                    <div className="about_box_right">
                        <h4>Name</h4>
                        <h5>Position</h5>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_box_left">
                    <Img src="https://wallpapercave.com/wp/wp3222446.jpg" loader = {<Loader/>} alt="images"/>
                    </div>
                    <div className="about_box_right">
                        <h4>Name</h4>
                        <h5>Position</h5>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_box_left">
                    <Img src="https://wallpapercave.com/wp/wp3222446.jpg" loader = {<Loader/>} alt="images"/>
                    </div>
                    <div className="about_box_right">
                        <h4>Name</h4>
                        <h5>Position</h5>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )

}

export default About;
