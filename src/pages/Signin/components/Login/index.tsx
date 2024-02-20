import { useNavigate } from 'react-router-dom';
import { Main } from '../../../../interfaces/users';
import './login.css';
import { useEffect, useState } from 'react';

type Props = {};

const Login = (props: Props) => {

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


  //Guardar los usuarios de la API 
  const [user, setUser] = useState ([]);
  
  const [JSONuser, setJSONuser] = useState ([]as Main[]); 

  //llamar al useNavigate
  const navigate = useNavigate();

  // Obtener datos formulario
  const loginForm = (e) => {
    e.preventDefault();
    const userDatas = e.target; // coge los datos del evento que en este caso es un formulario
    const mailUser = userDatas.mail.value;
    const passUser = userDatas.pass.value;

    //Coge los datos del JSON y 
    const userFound = JSONuser.find((element) => element.email === mailUser && element.password === passUser)


    // Comparar 
    if (userFound) {
      setUser(user);
      // pasar a la siguiente pagina
      navigate("/welcome")


    } else {
      alert("Usuario incorrecto. Pruebe de nuevo.");
    }
  };


  return (
    <div className='login'>

      <h2>Login</h2>

      {/* Form to access */}
      <form className='form-login' onSubmit={loginForm}>
        <input type="email" name="mail" placeholder='email' className="user-icon" required />
        <input type="password" name="pass" placeholder='Password' className="pass-icon" required />
        <button type="submit" className="button">Entrar</button>
      </form>

      <div className='img-logo'>
        <img src="src/assets/logo-742.svg" alt="Logo" />
      </div>

    </div>
  );
};

export default Login;
