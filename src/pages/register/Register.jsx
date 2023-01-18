import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Email..." />
            <input type="text" placeholder="Username..." />
            <input type="password" placeholder="Password..." />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Social App</h1>
          <p>Welcome back to our website! We're glad to see you again!</p>
          <span>Already have an account?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
