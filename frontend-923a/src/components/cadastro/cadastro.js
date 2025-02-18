import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from './cadastro.module.css'
import { Link } from "react-router-dom";

function Cadastro() {

    return (
      <div className={styles.container}>
        <div className={styles.loginSection}>
          <h2>Seja bem-vindo!</h2>
          <p>Acesse sua conta agora mesmo.</p>
          <a href="/login">
            <button className={styles.loginBtn}><Link to='/' style={{textDecoration: 'none', color: 'white'}}>ENTRAR</Link></button>
          </a>
        </div>
  
        <div className={styles.signupSection}>
          <h2>Crie sua conta</h2>
          <p>Preencha o formulário</p>
          <form>
            <div className={styles.inputContainer}>
              <i className="bi bi-person-fill"></i>
              <input
                type="text"
                className={styles.input}
                placeholder="Nome"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <i className="bi bi-envelope-fill"></i>
              <input
                type="email"
                className={styles.input}
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <i className="bi bi-lock-fill"></i>
              <input
                type="password"
                className={styles.input}
                placeholder="Senha"
                required
              />
            </div>
            <button type="submit" className={styles.signupBtn}>CADASTRAR</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Cadastro;  