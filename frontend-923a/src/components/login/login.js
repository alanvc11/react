import { useState } from "react";
import styles from "./login.module.css";
import api from '../../services/api';
import { useNavigate } from "react-router-dom";

// Componente de campo de entrada
function InputField({ label, type, id, placeholder, iconClass, value, onChange }) { // Dados do input

  const [showPassword, setShowPassword] = useState(false); // Mostra ou oculta a senha
  const isPassword = type === "password"; // Verifica se o input é tipo "password"

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={isPassword && showPassword ? "text" : type}
          id={id}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
        />
        <span
          className={`${styles.icon} bi ${
            isPassword ? (showPassword ? "bi-eye-slash-fill" : "bi-eye-fill") : iconClass
          }`}
          onClick={() => isPassword && setShowPassword(!showPassword)}
        ></span>
      </div>
    </div>
  );
}

// Componente de login
function Login() {
  const [email, setEmail] = useState(""); // Armazeno o email
  const [password, setPassword] = useState(""); // Armazeno a senha
  const [errorMessage, setErrorMessage] = useState(""); // Estado para a mensagem de erro
  const navigate = useNavigate();

// Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth", { email, password }); // Envio o email e senha para a rota de autenticação

      console.log(response.data);
      navigate("/");

      setEmail("");
      setPassword("");
      setErrorMessage(""); // Limpa a mensagem de erro em caso de sucesso
    } catch (error) {
      console.error("Erro no login:", error);
      setErrorMessage("Email ou senha inválidos"); // Define a mensagem de erro
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>
          Bem vindo ao <span>LOGIN</span>
        </h2>
        <p>Preencha os dados do login para acessar</p>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="seu email"
            iconClass="bi-envelope-fill"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Armazena o email digitado
          />
          <InputField
            label="Senha"
            type="password"
            id="password"
            placeholder="senha de acesso"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Armazena a senha digitada
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Exibe a mensagem de erro */}
          <a href="#" className={styles.forgotPassword}>
            Esqueceu sua senha? Recupere
          </a>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
