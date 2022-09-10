import React from 'react'
import  {useNavigate,useParams} from "react-router-dom";
const Profil = () => {
    let navigate = useNavigate();
let {username} = useParams();
  return (
    <div>This is Profil of {username}
        <button onClick={()=> {navigate("/about")}} >Change Pages</button>
    </div>
  )
}

export default Profil