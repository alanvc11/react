import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './inicial.module.css';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <h1>BAZAARLY</h1>
    </div>
    <div className={styles.searchBar}>
      <input className={styles.searchInput} type="text" placeholder="Buscar produtos" />
      <button className={styles.searchButton}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
    <div className={styles.headerIcons}>
      <a href="/Cadastro"><i className="bi bi-person"></i></a>
      <i className="bi bi-cart"></i>
      <i className="bi bi-heart"></i>
      <i className="bi bi-headset"></i>
      <i className="bi bi-globe"></i>
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
    <h2>Descubra as mais recentes tendências de pequenas lojas!</h2>
    <div className={styles.highlightedCategories}>
      <div className={styles.categoryCard}>
        <img className={styles.categoryImage} src="https://lh4.googleusercontent.com/proxy/ifXWh5ZfowQ-KY6MbrIE6NJ8F40VTHPokVfacQFrmgkvK5cFtPmU7hxem3kY2KvfEciOdmzwbek_arAIppYHrCn2gAsY26R9ZnQuuNkVDmQJ8UDeLrGI3kkCU-dcMT48AA" alt="Produtos de casa" />
        <p className={styles.categoryText}>Produtos de casa com alto requinte</p>
      </div>
      <div className={styles.categoryCard}>
        <img className={styles.categoryImage} src="https://conteudo.solutudo.com.br/wp-content/uploads/2019/10/LORIS2.jpg" alt="Joias" />
        <p className={styles.categoryText}>Joias em bons estados</p>
      </div>
      <div className={styles.categoryCard}>
        <img className={styles.categoryImage} src="https://cantinhodosonho.com.br/cdn/shop/files/Sfe12187b958c40358625faedabebd8b6U_800x.webp?v=1717101659" alt="Roupas de bebê" />
        <p className={styles.categoryText}>Roupas de bebê em 10x</p>
      </div>
      <div className={styles.categoryCard}>
        <img className={styles.categoryImage} src="https://down-br.img.susercontent.com/file/sg-11134201-22120-bb1r7gdrsmkvaf" alt="30% em conjuntos" />
        <p className={styles.categoryText}>30% em conjuntos</p>
      </div>
    </div>
  </section>
);

const ProductGrid = () => (
  <section className={styles.promotionMain}>
    <div className={styles.promoContent}>
      <img className={styles.promoImage} src="https://marketplace.canva.com/EAE9DQj6Sb8/2/0/1131w/canva-pre%C3%A7o-%C3%BAnico-cartaz-wgFISba_1MU.jpg" alt="Promoção" />
    </div>
    <div className={styles.productGrid}>
      <div className={styles.productCard}>
        <img className={styles.productImage} src="https://cdn.awsli.com.br/2500x2500/755/755242/produto/244733570/sandalia-flatform-off-white-com-tiras-brilhantes-1-rca3mwa79a.jpg" alt="Sandália" />
        <p className={styles.productText}>SANDÁLIA FEMININA TAMANHO FLAT FIVELA</p>
        <p className={styles.productPrice}><strong>R$ 15,90</strong></p>
        <span className={styles.discount}>10x sem juros</span>
      </div>
      <div className={styles.productCard}>
        <img className={styles.productImage} src="https://m.media-amazon.com/images/I/61WXXeDFcnL.jpg" alt="Câmera" />
        <p className={styles.productText}>CÂMERA INSTANTÂNEA INSTAX MINI 7</p>
        <p className={styles.productPrice}><strong>R$ 50,00</strong></p>
        <span className={styles.discount}>10x sem juros</span>
      </div>
      <div className={styles.productCard}>
        <img className={styles.productImage} src="https://d1taioma509ygp.cloudfront.net/Custom/Content/Products/13/20/132083_calca-feminina-fallen-tactel-cargo-ripstop-verde_m1_638221847579772368.jpg" alt="Calça" />
        <p className={styles.productText}>CALÇA FEMININA ESTAMPADA</p>
        <p className={styles.productPrice}><strong>R$ 31,90</strong></p>
        <span className={styles.discount}>Frete Grátis</span>
      </div>
      <div className={styles.productCard}>
        <img className={styles.productImage} src="https://shoppingcity.com.br/media/catalog/product/cache/51a80c9da94f85ac42b65ba251e9fd91/c/a/camisa_feminina_branca_manga_longa.jpg" alt="Camisa" />
        <p className={styles.productText}>CAMISA DE MANGA COMPRIDA ESTAMPADA</p>
        <p className={styles.productPrice}><strong>R$ 21,30</strong></p>
        <span className={styles.discount}>Frete Grátis</span>
      </div>
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
    <ProductGrid />
    <Footer />
  </div>
);

export default Inicial;
