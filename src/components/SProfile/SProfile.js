import React,{useState,useEffect} from 'react';
import { useStateValue } from '../auth/ReactContextApi/stateProvider';
import Loader from '../Loader/Loader';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './SProfile.css';

function SProfile() {

  let [showFlat,setShowFlat] = useState(false)
let [showPg,setShowPg] = useState(false)
let [isLoader,setisLoader] = useState(true);
let [state,dispatch] = useStateValue();
let url = useHistory();

// if(state?.isLoggedIn === false || state?.userRole !== "seller")
// {
// url.push('/');
// }


    useEffect(()=>{
        function updateLoader(){
         setTimeout(()=>{
             setisLoader(false);
          },3000);
        }
        updateLoader();
    },[isLoader]);


    useEffect(() => {
      return () => {
        console.log("cleaned up");
      };
    }, []);



    return (
        <>
       {
       isLoader?<Loader/>
       :
       <div className="s_profile_container">
                <div className = "s_profile_left">
                  <div className="s_profile_left_header">
                  <div className="s_img">
                    <img src="https://wallpapercave.com/wp/wp3222446.jpg" alt="your_profile"/>
                    </div>
                    <div className="s_profile_detail1">
                    <div className="s_name">
                        <h5>Demo</h5>
                    </div>
                    <div className="s_number">
                       <h5>987655332210</h5>
                    </div>
                    </div>

                  </div>
                  <div className="s_profile_left_body">
                      <div >
                          <h4>Address : XYZ</h4>
                      </div>
                      <div>
                          <h4>State : Haryana</h4>
                      </div>
                      <div>
                        <h4>Total Items you added :0</h4>
                      </div>
                      <div>
                        <h4>Total PG : </h4>
                      </div>
                      <div>
                        <h4>Total Flats :</h4>
                      </div>
                      <div>
                      <Fab size="large" color="secondary" aria-label="add" className = "head_btn" onClick={()=>{
                          url.push('add/pg');
                        }}>
                        <AddIcon />
                        PG
                      </Fab>
                      <Fab size="large" color="primary" aria-label="add" className = "head_btn">
                        <AddIcon />
                        Flat
                      </Fab>
                      </div>

                  </div>

                </div>
                <div className="s_profile_right">
                    <div className="s_progile_right_header"> </div>
                    <div className="s_profile_right_body">
                      <Button variant="contained" className="btn" onClick={()=>{
                        setShowFlat(false);
                        setShowPg(true);
                      }}>PG</Button>
                      <Button variant="contained" className="btn" onClick={()=>{
                        setShowFlat(true);
                        setShowPg(false);
                      }}>Flat</Button>
                      <hr/>

                    {showPg?<div className="s_register_pg">
                      <div className="list_of_pg">
                          <div className="pg_box">
                                <h4>Name of the pg</h4>
                                <h4>Total View :</h4>
                          </div>
                      </div>
                    </div>:""
                    }
                     {showFlat?<div className="s_register_flat">
                      <div className="list_of_flat">
                          <div className="flat_box">
                                <h4>Name of the flat</h4>
                                <h4>Total View :</h4>
                          </div>
                      </div>
                    </div>:""
                    }
                </div>
                </div>
       </div>
        }
        </>
    )
}

export default SProfile;
