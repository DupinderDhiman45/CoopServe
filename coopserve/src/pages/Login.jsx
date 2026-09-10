import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="login-page">

      <h1>Welcome to CoopServe</h1>

      <p>Login to continue</p>

      <div className="login-form">

        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="Enter mobile number"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
        />
       <h3>Login as</h3>

        <div>
          <button>Customer</button>

        <Link to="/worker-dashboard">
          <button>Worker</button>
        </Link>
</div>
        

        <p>
          Don't have an account? <span>Register</span>
        </p>

      </div>

    </div>
  )
}

export default Login