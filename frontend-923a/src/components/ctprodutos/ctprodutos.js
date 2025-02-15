import React from 'react';
import styles from './ctprodutos.module.css';

function Produtos() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>BAZAARLY</h1>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Buscar produtos" />
          <button><i className="bi bi-search"></i></button>
        </div>
        <div className={styles.headerIcons}>
          <i className="bi bi-person"></i>
          <i className="bi bi-cart"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-headset"></i>
          <i className="bi bi-globe"></i>
        </div>
      </header>

      <nav className={styles.nav}>
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

      <main className={styles.main}>
        <section className={styles.searchResults}>
          <p><strong><i className="bi bi-house-door"></i>JOIAS E ACESSÓRIOS</strong></p>
          <h2>JOIAS E ACESSÓRIOS</h2>
          <br />
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="https://sindijoias.com.br/wp-content/uploads/2023/03/joias-img-1024x1024.png" alt="Imagem 1" />
              <p>ACESSÓRIO 1</p>
              <h4>R$ 29,25</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://puritajoias.com/cdn/shop/files/S530fee2bc39b4d4cbc6b44f294cf5c30n.jpg?v=1686574168&width=1000" alt="Imagem 2" />
              <p>ACESSÓRIO 2</p>
              <h4>R$ 19,25</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://blog.casadasaliancas.com.br/wp-content/uploads/2022/04/diferenca-de-joias-semijoias-e-bijuterias-2.jpg" alt="Imagem 3" />
              <p>ACESSÓRIO 3</p>
              <h4>R$ 47,90</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://puritajoias.com/cdn/shop/products/S1fe4f1ec7b664149871ed074c057d2995.jpg?v=1681216024&width=2048" alt="Imagem 4" />
              <p>ACESSÓRIO 4</p>
              <h4>R$ 19,25</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39F58d3XUXosoynE7xMt4I0km0VhMccsc6w&s" alt="Imagem 5" />
              <p>ACESSÓRIO 5</p>
              <h4>R$ 19,25</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdwSUvNxPJD-C5IeYvqRJEmMpkgN0wpaX6g&s" alt="Imagem 6" />
              <p>ACESSÓRIO 6</p>
              <h4>R$ 19,25</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fl0SWia4bCEO9ugsQ_g8ryCWAM6pVFp_8Q&s" alt="Imagem 7" />
              <p>ACESSÓRIO 7</p>
              <h4>R$ 32,85</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://lesjoiasonline.com/cdn/shop/files/S92150e5dcc5b43bfa00d43eced6d1053m.webp?v=1721855135" alt="Imagem 8" />
              <p>ACESSÓRIO 8</p>
              <h4>R$ 19,25</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://www.icebrojoias.com.br/cdn/shop/products/S59b0f7c69cf94eb9a1c51816b651ff38B_94038bec-6430-47b2-acf8-9084f65e3f3a.jpg?v=1653718733&width=2048" alt="Imagem 9" />
              <p>ACESSÓRIO 9</p>
              <h4>R$ 15,75</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
            <div className={styles.card}>
              <img src="https://acdn.mitiendanube.com/stores/001/670/285/products/brinco-hera-estrelada-caracol-78dc41064dd3c1954617005959258754-1024-1024.jpg" alt="Imagem 10" />
              <p>ACESSÓRIO 10</p>
              <h4>R$ 19,25</h4> <br />
              <h6>ENVIO NACIONAL</h6>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
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
          <p><i className="bi bi-phone"></i> (82) 91234-5678</p> <br />
          <p><i className="bi bi-envelope"></i> bazaarly@loja.com.br</p>
          <div className={styles.socialIcons}>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-whatsapp"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Produtos;
