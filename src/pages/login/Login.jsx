import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome Back!</h1>
          <p>Welcome back to our website! We're glad to see you again!</p>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username..." />
            <input type="password" placeholder="Password..." />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
