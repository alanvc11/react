import styles from "./login.module.css"

function Login (){
    return (
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2>
            Bem vindo ao <span>LOGIN</span>
          </h2>
          <p>Preencha os dados do login para acessar</p>
          <form >
            <div className={styles.inputGroup}>
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                placeholder="seu usuário"
                required
              />
              <span className={`${styles.icon} bi bi-person-fill`}></span>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="senha de acesso"
                required
              />
              <span className={`${styles.icon} bi bi-eye-fill`}></span>
            </div>
            <a href="#" className={styles.forgotPassword}>
              Esqueceu sua senha? Recupere
            </a>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;