import Login, { Render } from 'react-login-page';

const LoginForm = () => {
  return (
    <Login>
      <Render>
        {({ fields, buttons }) => {
          return (
            <div>
              <div>
                <label>{fields.username}</label>
              </div>
              <div>
                <label>{fields.password}</label>
              </div>
              <div>
                {buttons.submit}
                {buttons.reset}
              </div>
            </div>
          );
        }}
      </Render>
      <Login.Input className="login-field" keyname="username" placeholder="Username" />
      <Login.Input className="login-field" keyname="password" placeholder="Password" />
      <Login.Button keyname="submit" type="submit">
        Submit
      </Login.Button>
      <Login.Button keyname="reset" type="reset">
        Reset
      </Login.Button>
    </Login>
  );
};
export default LoginForm;