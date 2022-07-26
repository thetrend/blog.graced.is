import { 
  ChangeEvent, 
  FC, 
  FormEvent, 
  useContext, 
  useState
} from 'react';
import { 
  AuthContext, 
  AuthTypes, 
  login,
 } from '~COMPONENTS/Auth';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';
import classNames from 'classnames';

const Login: FC = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState<AuthTypes.AuthUser>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(dispatch, formData);
  }

  let { errors, isAuthenticated } = state;

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={classNames("w-8/12 m-auto flex flex-col")}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
      {errors && <p className="form-error">{errors[0].message}</p>}
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
        <span><button type="submit">Login</button> or <Link to="/signup">Signup</Link></span>
      </form>
    </div>
  )
}

export default Login;
