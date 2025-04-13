import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from './atualizar.module.css'
import api from '../../services/api';

function Atualizar() {

    return (
      <div className={styles.container}>
        <div className={styles.signupSection}>
          <h2>Atualize sua conta</h2>
          <p>Preencha o formulário</p>
          <form >
            <div className={styles.inputContainer}>
              <i className="bi bi-person-fill"></i>
              <input
                type="text"
                className={styles.input}
                placeholder="Nome"
                required
                name="name"
                id="name"
               
              />
            </div>
            <div className={styles.inputContainer}>
              <i className="bi bi-envelope-fill"></i>
              <input
                type="email"
                className={styles.input}
                placeholder="Email"
                required
                id="email"
               
              />
            </div>
            <div className={styles.inputContainer}>
              <i className="bi bi-lock-fill"></i>
              <input
                type="password"
                className={styles.input}
                placeholder="Senha"
                required
                id="password"
               
              />
            </div>

            <div className={styles.inputContainer}>
              <i className="bi bi-house-door-fill"></i>
              <input
                type="string"
                className={styles.input}
                placeholder="Cep"
                required
                id="Cep"
                
              />
            </div>

            <div className={styles.inputContainer}>
              <i className="bi bi-lock-fill"></i>
              <input
                type="string"
                className={styles.input}
                placeholder="Logradouro"
                required
                id="Logradouro"
                
              />
            </div>

            <div className={styles.inputContainer}>
              <i className="bi bi-lock-fill"></i>
              <input
                type="string"
                className={styles.input}
                placeholder="Complemento"
                required
                id="Complemento"
                
              />
            </div>

            <div className={styles.inputContainer}>
              <i className="bi bi-lock-fill"></i>
              <input
                type="string"
                className={styles.input}
                placeholder="Bairro"
                required
                id="Bairro"
                
              />
            </div>

            <div className={styles.inputContainer}>
              <i className="bi bi-geo-alt"></i>
              <input
                type="string"
                className={styles.input}
                placeholder="Localidade"
                required
                id="Localidade"
                
              />
            </div>

            <button type="submit" className={styles.signupBtn}>ATUALIZAR</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Atualizar;  