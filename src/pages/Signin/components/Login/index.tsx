import { Navigate, useNavigate } from 'react-router-dom';
import { Main } from '../../../../interfaces/users';
import './login.css';
import React, { useEffect, useState } from 'react';
import { userFornitureContext } from '../../../../context/user';
import { useAuthDispatch } from '../../../../context/authContext';

type Props = {};

export const Login = (props: Props) => {


  //LLAMADA A LA API
  const getUserDatas = async () => {
    try {
      //fetch a la api
      const request = await fetch("src/data/users.json");
      const JSONrequest = await request.json();
      
      //Devolver todos los datos
      return JSONrequest
    
    //Cierre del try
    } catch (error) {
      console.log(error);
    }
  };

  // Usar useEffect para recuperarlo que se ejecute una sola vez después de que el componente se monte
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


  //Guardar los usuarios de la API 
  //Importar el custom hook
  const userContext = userFornitureContext();

  // const [user, setUser] = useState ([]);
  
  const [JSONuser, setJSONuser] = useState ([]as Main[]); 

  const [userData, setUserData] = useState ({mail:"", pass:""});

  const dispatch = useAuthDispatch();

  //llamar al useNavigate
  const navigate = useNavigate();

  // Obtener datos formulario
  const loginForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const userDatas = e.target; // coge los datos del evento que en este caso es un formulario
    // const mailUser = userDatas.mail.value;
    // const passUser = userDatas.pass.value;

    const {mail, pass} = userData

    //Coge los datos del JSON y 
    const userFound = JSONuser.find((element) => element.email === mail && element.password === pass)


    // Comparar 
    if (userFound) {
      handleLogin();
      //el usuario guardado AQUI para exportar
      userContext.setArray(userFound);

    } else {
      alert("Usuario incorrecto. Pruebe de nuevo.");
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

      <div className='img-logo'>
        <img src="src/assets/logo-742.svg" alt="Logo" />
      </div>

    </div>
  );
};

export default Login;
