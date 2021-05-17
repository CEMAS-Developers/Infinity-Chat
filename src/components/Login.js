import { signInWithGoogle } from "../login";
import Button from "./Button";
import "../styles/Login.css";

const Login = () => {
  return (
    <main>
      <div className="login">
        <h2>¡Bienvenidos!</h2>
        <img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"/>
        <Button onClick={signInWithGoogle}>Iniciar Sesión</Button>
      </div>
    </main>
  );
};

export default Login;
