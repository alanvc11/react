import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPhone,
  faEnvelope,
  faCreditCard,
  faStar as faStarSolid,
  faStarHalfAlt as faStarHalfSolid,
} from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './carrinho.module.css';

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
          <span className={styles.userName}>Entrar</span>
        </a>
      </div>
    </header>
);

const Navbar = () => (
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
);

const CartItem = ({ imgSrc, title, status, gift, price, id }) => (
  <div className={styles.card}>
    <img src='https://images.tcdn.com.br/img/img_prod/836395/camisa_polo_masculina_malha_piquet_vida_marinha_manga_curta_3649_1_e87d9e65d0988e2e2125ff6e7117a5eb.jpg' alt={title} />
    <div className={styles.cardDetails}>
      <h2>{title}</h2>
      <p className={styles.status}>{status}</p>
      <p className={styles.gift}>{gift}</p>
      <div className={styles.quantityRow}>
        <label htmlFor={`quantity-${id}`}>QTD:</label>
        <select id={`quantity-${id}`}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <a href="#" className={styles.excluir}>EXCLUIR</a> <p>|</p>
        <a href="#" className={styles.salvar}>SALVAR PARA MAIS TARDE</a>
      </div>
    </div>
    <div className={styles.price}>
      <p>{price}</p>
      <p>à vista no Pix e boleto ou <br />R$34,90 no cartão de crédito</p>
    </div>
  </div>
);

const CartSummary = () => (
  <div className={styles.summary}>
    <p>Total (3 produtos):</p>
    <p className={styles.totalValue}>R$ XX,XX</p>
    <button className={styles.finalizar}>FINALIZAR PEDIDO</button>
  </div>
);

const Footer = () => (
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
);

const Carrinho = () => (
  <div className={styles.container}>
    <Header />
    <Navbar />
    <main className={styles.main}>
      <section className={styles.searchResults}>
        <p><strong><i className="bi bi-cart3"></i>Carrinho</strong></p>
        <CartItem
          imgSrc="https://jfpratas.com.br/site/uploads/2024/01/IMG-20220301-WA0000-150x150.webp"
          title="PRODUTO 1, VENDIDO POR TAL"
          status="Em estoque"
          gift="Este pedido é para presente"
          price="R$ XX,XX"
          id="1"
        />
        <br />
        <CartItem
          imgSrc="https://fila.vtexassets.com/arquivos/ids/893909-150-auto?width=150&height=auto&aspect=true"
          title="PRODUTO 2, VENDIDO POR TAL"
          status="Em estoque"
          gift="Este pedido é para presente"
          price="R$ XX,XX"
          id="2"
        />
        <br />
        <CartItem
          imgSrc="https://img.irroba.com.br/fit-in/150x150/filters:fill(fff):quality(80)/tadeaioo/catalog/air-bone/air-bone/tenis-masculino-ultrabone-air-bone-branco-1.jpg"
          title="PRODUTO 3, VENDIDO POR TAL"
          status="Em estoque"
          gift="Este pedido é para presente"
          price="R$ XX,XX"
          id="3"
        />
        <br />
        <CartSummary />
      </section>
    </main>
    <Footer />
  </div>
);

export default Carrinho;
