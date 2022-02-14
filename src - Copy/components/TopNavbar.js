import React, {  useEffect ,useState} from 'react'
import {  useNavigate ,  useLocation} from "react-router-dom";

const TopNavbar = () => {
  const[backButton, setBackButton] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  const getHomePage = async () => {
    if(location.pathname !== '/'){
      setBackButton(true)
      }
    else{
      setBackButton(false)
    }
  }

  useEffect(() => {
    getHomePage()
  }, [location.pathname])

    return (
      <div className='topnav'>
        {backButton ? <a onClick={()=>navigate('/',{replace: true})}>Back</a> : null}
        <a onClick={()=>navigate('/mypokemon',{replace: true})}>My Pokemon<img src='/pokeballpng.png' width='20 em'></img></a> 
      </div>
    )
}

export default TopNavbar
