import "../../css/login/login.css"

function Login (){

  return (
    <div className="container">
      <div className="login-box">
        <h2>
          Bem vindo ao <span>LOGIN</span>
        </h2>
        <p>Preencha os dados do login para acessar</p>
        <form >
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              placeholder="seu usuário"
              required
            />
            <span className="icon bi bi-person-fill"></span>
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="senha de acesso"
              required
            />
            <span className="icon bi bi-eye-fill"></span>
          </div>
          <a href="#" className="forgot-password">
            Esqueceu sua senha? Recupere
          </a>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
