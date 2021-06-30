import React,{useEffect} from 'react';
import { useStateValue } from '../auth/ReactContextApi/stateProvider';
import Loader from '../Loader/Loader';
import './Logout.css';
import {useHistory} from 'react-router-dom';

function Logout() {

let [state,dispatch] = useStateValue();

let url = useHistory();

    useEffect(()=>{
        if(state?.isLoggedIn)
        {
            dispatch({
                types:"SET_USER",
                isLoggedIn:false,
                userName:null,
                userPhone:null,
                userRole:null,
                userId:null
            });

            url.push('/');

        }
        else
        {
            url.push('/');
        }

    },[]);



useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);


    return (
        <>
        {
            <Loader/>
        }

        </>
    )
}

export default Logout
