import './login.css';

type Props = {}

export default function Login({}: Props) {

  const loginForm = e => {
      e.preventDefault();
      let userDates:any = e.target;
      console.log(userDates.mail.value);

  }


  return (

    <div className='login'>
       <h2>Login</h2>

       <form className='form-login' onSubmit={loginForm} >
            <input type="email" name="mail" placeholder='email' className="user-icon" required/>
            <input type="password" name="pass" placeholder='Password' className="pass-icon" required/>
            <button type="submit" className="button">Enter</button>
       </form>

       <div className='img-logo'>
         <img src="src/assets/logo-742.svg"/>
       </div>
    </div>

  )
}