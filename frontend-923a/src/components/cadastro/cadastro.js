import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from './cadastro.module.css'
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react';
import api from '../../services/api';

function Cadastro() {

  const [name, setName] = useState(""); //armazena o nome
  const [email, setEmail] = useState(""); //armazena o email
  const [password, setPassword] = useState(""); //armazena a senha
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();


  const handleCadastro = async (e) =>{
    e.preventDefault();

    if(password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try{
      const envio = await api.post("/user", { name, email, password, confirm_password: confirmPassword, user_type: "comprador"});
      console.log(envio.data)
      navigate("/Login");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch(error) {
      console.error("Error ao Cadastrar usuario:", error)
    }
  };

    return (
      <div className={styles.container}>
        <div className={styles.loginSection}>
          <h2>Seja bem-vindo!</h2>
          <p>Acesse sua conta agora mesmo.</p>
          <Link to="/login" className={styles.loginBtn} style={{ textDecoration: 'none', color: 'white' }}>ENTRAR</Link>
        </div>
  
        <div className={styles.signupSection}>
          <h2>Crie sua conta</h2>
          <p>Preencha o formulário</p>
          <form onSubmit={handleCadastro}>
            <div className={styles.inputContainer}>
              <i className="bi bi-person-fill"></i>
              <input
                type="text"
                className={styles.input}
                placeholder="Nome"
                required
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <i className="bi bi-lock-fill"></i>
              <input
                type="password"
                className={styles.input}
                placeholder="Confirme sua Senha"
                required
                id="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.signupBtn}>CADASTRAR</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Cadastro;  