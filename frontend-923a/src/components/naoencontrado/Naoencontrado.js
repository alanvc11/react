import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./Naoencontrado.module.css";

function Naoencontrado() {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.logo}>
          <h1>BAZAARLY</h1>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Buscar produtos" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className={styles.headerIcons}>
          <i className="bi bi-person"></i>
          <i className="bi bi-cart"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-headset"></i>
          <i className="bi bi-globe"></i>
          <i className="bi bi-arrow-left-circle"></i>
          <i className="bi bi-arrow-right-circle"></i>
        </div>
      </header>

      <nav>
        <ul>
          <li>Mobílias</li>
          <li>Joias e Acessórios</li>
          <li>Sapatos</li>
          <li>Roupas de Bebê</li>
          <li>Roupas Femininas</li>
          <li>Roupas Masculinas</li>
          <li>Esportes</li>
          <li>Itens de Casa</li>
          <li>Tecnologia e Eletrônicos</li>
          <li>Livros</li>
        </ul>
      </nav>

      <main>
        <section className={styles.searchResults}>
          <p>
            <strong>
              <i className="bi bi-house-door"></i>&gt;Buscar
            </strong>
          </p>
          <h2>BUSCAR</h2>
          <p style={{ fontSize: "25px" }}>
            <i className="fas fa-circle-xmark not-found-icon"></i>
            <strong> Não foram encontrados resultados para "sapato".</strong>
          </p>

          <h4>Sugestões:</h4>
          <li>Verifique se todas as palavras estão escritas corretamente.</li>
          <li>Tente palavras-chave diferentes.</li>
          <li>Tente palavras-chave mais genéricas.</li>
          <li>Tente usar menos palavras-chave.</li>
        </section>
      </main>

      <footer>
        <div className={styles.footerSection}>
          <h3>DÚVIDAS</h3>
          <ul>
            <li>Acompanhe seus pedidos</li>
            <li>Dúvidas frequentes</li>
            <li>Trocas e devoluções</li>
          </ul>
          <i className="fa-brands fa-cc-visa payment-icon"></i>
          <i className="fa-brands fa-cc-mastercard payment-icon"></i>
        </div>

        <div className={styles.footerSection}>
          <h3>INSTITUCIONAL</h3>
          <ul>
            <li>Quem somos?</li>
            <li>Política de Privacidade</li>
            <li>Trabalhe conosco</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>FALE CONOSCO</h3>
          <p>
            <i className="fas fa-phone"></i> (82) 91234-5678
          </p>
          <p>
            <i className="fas fa-envelope"></i> bazaarly@loja.com.br
          </p>
          <div className={styles.socialIcons}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Naoencontrado;
