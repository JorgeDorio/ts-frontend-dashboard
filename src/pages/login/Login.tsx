import "./login.css";

export const Login = () => {
  return (
    <div className="main-container">
      <div className="signin-container">
        <h1>Login</h1>
        <p>Insira seu email e senha para entrar.</p>
        <form action="" className="form-container">
          <input type="text" placeholder="Emaill" className="form-input" />
          <input type="text" placeholder="Senha" className="form-input" />
          <label className="keep-checkbox" form="keep-checkbox">
            <input
              type="checkbox"
              name=""
              id="keep-checkbox"
              className="checkbox"
            />
            Desejo me manter conectado.
          </label>
          <button className="submit-button" type="submit">
            Entrar
          </button>
          <span className="signup">
            Não tem uma conta? <a>Registre-se</a>
          </span>
        </form>
      </div>
      <img
        className="main-img"
        src="https://cdn.pixabay.com/photo/2021/09/28/13/14/cat-6664412_960_720.jpg"
        alt="shjkgsjk"
      />
    </div>
  );
};
