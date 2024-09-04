import { useNavigate } from 'react-router-dom';
import { UserMain } from '../../../../interfaces/users';
import './login.css';
import React, { useEffect, useState } from 'react';
import { userFornitureContext } from '../../../../context/user';
import { useAuthDispatch } from '../../../../context/authContext';


export const Login = () => {


  //API CALL
  const getUserDatas = async () => {
    try {
      //FETCH
      const request = await fetch("./data/users.json");
      const JSONrequest = await request.json();
      
      //RETURN DATA
      return JSONrequest
    
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    const getUserDatasResponse = async () => {
      const userDatasResponse = await getUserDatas()
      setJSONuser(userDatasResponse) 
    }
    getUserDatasResponse();
  }, []);

  const handleLogin = () => {
    dispatch({type:"LOGGIN"});
    navigate("/welcome")
  }


 
  //Custom hook CONTEXT
  const userContext = userFornitureContext();
  
  const [JSONuser, setJSONuser] = useState ([]as UserMain[]); 

  const [userData, setUserData] = useState ({mail:"", pass:""});

  const dispatch = useAuthDispatch();

  const navigate = useNavigate();

  // Data from form
  const loginForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {mail, pass} = userData

    //Variable to found user
    const userFound = JSONuser.find((element) => element.email === mail && element.password === pass)


    // Compare users 
    if (userFound) {
      handleLogin();
      //User to export
      userContext.setArray(userFound);

    } else {
      alert("Alguno de los datos está incorrecto. Pruebe de nuevo.");
    }
  };


  return (
    <div className='login'>

      <h2>Login</h2>

      {/* Form to access */}
      <form className='form-login' onSubmit={loginForm}>
        <input type="email" name="mail" placeholder='email' className="user-icon" onChange={(e)=> setUserData({...userData, mail:e.target.value})} value={userData.mail} required />
        <input type="password" name="pass" placeholder='Password' className="pass-icon" onChange={(e)=> setUserData({...userData, pass:e.target.value})} value={userData.pass} required />
        <button type="submit" className="button">Entrar</button>
      </form>
      <p><b>LOGIN</b></p><p><b>user:</b> john@example.com </p><p><b>pass:</b> pass123</p>
      <div className='img-logo'>
        <img src="./assets/logo-742.svg" alt="Logo" />
      </div>

    </div>
  );
};

export default Login;
