import React, { Component, useEffect ,useState} from 'react'
import { BrowserRouter, useNavigate ,  useLocation} from "react-router-dom";
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  const[backButton, setBackButton] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if(location.pathname !== '/'){
      setBackButton(true)
      }
    }, [location]);

    return (
      <div className='topnav'>
        <input></input>
        {backButton ? <a onClick={()=>navigate('/',{replace: true})}>Back</a> : null}
        <a onClick={()=>navigate('/mypokemon',{replace: true})}>Back</a> 
      </div>
    )
}

export default TopNavbar
