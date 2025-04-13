import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './inicial.module.css';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
    <img src="/logoB.png" alt="Minha Imagem" className={styles.logoB} />
    </div>
    <div className={styles.searchBar}>
      <input className={styles.searchInput} type="text" placeholder="Buscar produtos" />
      <button className={styles.searchButton}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
    <div className={styles.headerIcons}>
      <i className="bi bi-bag"></i>
      <i className="bi bi-heart"></i>
      <a href="/Cadastro" className={styles.loginLink}>
        <i className="bi bi-person"></i>
        <span className={styles.loginText}>Entrar</span>
      </a>
    </div>
  </header>
);

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>Mobílias</li>
      <li className={styles.navItem}>Joias e Acessórios</li>
      <li className={styles.navItem}>Sapatos</li>
      <li className={styles.navItem}>Roupas de Bebê</li>
      <li className={styles.navItem}>Roupas Femininas</li>
      <li className={styles.navItem}>Roupas Masculinas</li>
      <li className={styles.navItem}>Esportes</li>
      <li className={styles.navItem}>Itens de Casa</li>
      <li className={styles.navItem}>Tecnologia e Eletrônicos</li>
      <li className={styles.navItem}>Livros</li>
    </ul>
  </nav>
);

const PromotionBanner = () => (
  <section className={styles.promotionBanner}>
    <Carousel>
      <Carousel.Item interval={3400}>
        <img
          className={styles.carouselImage}
          src="https://thumb.braavo.me/cleme/0/3137170116.png"
          alt="Slide 1"
        />
        <Carousel.Caption>
          {/* texto no carrocel */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3400}>
        <img
          className={styles.carouselImage}
          src="https://content.app-us1.com/wbbm6Q/2025/02/06/c8f8ec99-a609-471d-b317-d3ec9fafe726.jpeg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          {/* texto no carrocel */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3400}>
        <img
          className={styles.carouselImage}
          src="https://usegull.com/cdn/shop/collections/Banner_Promocional_Mobile.png?v=1736444073&width=2048"
          alt="Slide 3"
        />
        <Carousel.Caption>
          {/* texto no carrocel */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
);

const HighlightedCategories = () => (
  <section className={styles.highlightedCategories}>
    <div className={styles.categoryCard}>
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_821198-MLB49995542698_052022-O.webp"
        alt="Botas"
        className={styles.categoryImage}
      />
      <p className={styles.categoryText}>Botas</p>
    </div>
    <div className={styles.categoryCard}>
      <img
        src="https://cdn.awsli.com.br/600x450/2593/2593830/produto/214368735/dsc_4478-7f891pnvcq.jpg"
        alt="Tênis"
        className={styles.categoryImage}
      />
      <p className={styles.categoryText}>Tênis</p>
    </div>
    <div className={styles.categoryCard}>
      <img
        src="https://acdn-us.mitiendanube.com/stores/002/822/533/products/1_preta-0755e2520fcde918b516780560897023-1024-1024.jpg"
        alt="Jaquetas"
        className={styles.categoryImage}
      />
      <p className={styles.categoryText}>Jaquetas</p>
    </div>
    <div className={styles.categoryCard}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI086HJ2dSuGnj6HTk_nUHBbAn8oY_VT10PQ&s"
        alt="Jeans"
        className={styles.categoryImage}
      />
      <p className={styles.categoryText}>Jeans</p>
    </div>
    <div className={styles.categoryCard}>
      <img
        src="https://static.netshoes.com.br/produtos/kit-2-moletons-moletom-blusa-de-frio-unissex-algodao/28/5ZV-1204-028/5ZV-1204-028_zoom1.jpg?ts=1683299822&ims=544x"
        alt="Moletons"
        className={styles.categoryImage}
      />
      <p className={styles.categoryText}>Moletons</p>
    </div>
    <div className={styles.categoryCard}>
      <img
        src="https://acdn-us.mitiendanube.com/stores/002/515/645/products/f930b0d47eb387a1b254a649b93447d5-918cdeb75231be23f117253139122596-640-0.png"
        alt="Perfumes"
        className={styles.categoryImage}
      />
      <p className={styles.categoryText}>Perfumes</p>
    </div>
    <div className={styles.categoryCard}>
      <img
        src="https://lojabluk.vteximg.com.br/arquivos/ids/174942-800-1000/vestido-longo-linho-com-faixa-para-amarracao-natural-vt32800224-01.jpg?v=638603012730800000"
        alt="Vestidos"
        className={styles.categoryImage}
      />
      <p className={styles.categoryText}>Vestidos</p>
    </div>
  </section>
);


const ProductGrid = () => (
  <section className={styles.promotionMain}>
    <div className={styles.productGrid}>
      {/* Cards de produtos */}
    </div>
  </section>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerSection}>
      <h3>DÚVIDAS</h3>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>Acompanhe seus pedidos</li>
        <li className={styles.footerItem}>Dúvidas frequentes</li>
        <li className={styles.footerItem}>Trocas e devoluções</li>
      </ul>
      <FontAwesomeIcon icon={faCcVisa} className={styles.paymentIcon} />
      <FontAwesomeIcon icon={faCcMastercard} className={styles.paymentIcon} />
    </div>
    <div className={styles.footerSection}>
      <h3>INSTITUCIONAL</h3>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>Quem somos?</li>
        <li className={styles.footerItem}>Política de Privacidade</li>
        <li className={styles.footerItem}>Trabalhe conosco</li>
      </ul>
    </div>
    <div className={styles.footerSection}>
      <h3>FALE CONOSCO</h3>
      <p><FontAwesomeIcon icon={faPhone} /> (82) 91234-5678</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> bazaarly@loja.com.br</p>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.socialIcon}><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className={styles.socialIcon}><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href="#" className={styles.socialIcon}><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  </footer>
);

const Inicial = () => (
  <div>
    <Header />
    <Navbar />
    <PromotionBanner />
    <HighlightedCategories /> 
    <ProductGrid />
    <Footer />
  </div>
);

export default Inicial;
