import "../../css/cadastro/cadastro.css"

function Cadastro() {

  return (
    <div className="container">
      <div className="login-section">
        <h2>Seja bem-vindo!</h2>
        <p>Acesse sua conta agora mesmo.</p>
        <a href="/login">
          <button className="login-btn">ENTRAR</button>
        </a>
      </div>

      <div className="signup-section">
        <h2>Crie sua conta</h2>
        <p>Preencha o formulário</p>
        <form>
          <div className="input-container">
            <i className="bi bi-person-fill"></i>
            <input
              type="text"
              placeholder="Nome"
              required
            />
          </div>
          <div className="input-container">
            <i className="bi bi-envelope-fill"></i>
            <input
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-container">
            <i className="bi bi-lock-fill"></i>
            <input
              type="password"
              placeholder="Senha"
              required
            />
          </div>
          <button type="submit" className="signup-btn">CADASTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
