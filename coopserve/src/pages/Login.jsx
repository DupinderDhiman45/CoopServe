import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login-page">

      <h1>Welcome to CoopServe</h1>

      <p>Choose your account type to continue</p>

      <div className="login-form">

        <h2>Login As</h2>
     <div className="login-buttons"> 
        <Link to="/customer">
          <button>Customer</button>
        </Link>

        <Link to="/worker">
          <button>Worker</button>
        </Link>
      </div>
        <p>
          Don't have an account?{' '}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login
