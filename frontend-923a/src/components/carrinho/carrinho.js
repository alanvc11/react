import React from 'react';
import styles from './carrinho.module.css';

function Carrinho() {
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
          <a href="/cadastrar"><i className="bi bi-person"></i></a>
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
          <p><strong><i className="bi bi-cart3"></i>Carrinho</strong></p>
          <div className={styles.card}>
            <img src="https://jfpratas.com.br/site/uploads/2024/01/IMG-20220301-WA0000-150x150.webp" alt="Produto 1" />
            <div className={styles.cardDetails}>
              <h2>PRODUTO 1, VENDIDO POR TAL</h2>
              <p className={styles.status}>Em estoque</p>
              <p className={styles.gift}>Este pedido é para presente</p>
              <div className={styles.quantityRow}>
                <label htmlFor="quantity-1">QTD:</label>
                <select id="quantity-1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <a href="#" className={styles.excluir}>EXCLUIR</a> <p>|</p>
                <a href="#" className={styles.salvar}>SALVAR PARA MAIS TARDE</a>
              </div>
            </div>
            <div className={styles.price}>
              <p>R$ XX,XX</p>
              <p>à vista no Pix e boleto ou <br />R$34,90 no cartão de crédito</p>
            </div>
          </div>
          <br />

          <div className={styles.card}>
            <img src="https://fila.vtexassets.com/arquivos/ids/893909-150-auto?width=150&height=auto&aspect=true" alt="Produto 2" />
            <div className={styles.cardDetails}>
              <h2>PRODUTO 2, VENDIDO POR TAL</h2>
              <p className={styles.status}>Em estoque</p>
              <p className={styles.gift}>Este pedido é para presente</p>
              <div className={styles.quantityRow}>
                <label htmlFor="quantity-2">QTD:</label>
                <select id="quantity-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <a href="#" className={styles.excluir}>EXCLUIR</a> <p>|</p>
                <a href="#" className={styles.salvar}>SALVAR PARA MAIS TARDE</a>
              </div>
            </div>
            <div className={styles.price}>
              <p>R$ XX,XX</p>
              <p>à vista no Pix e boleto ou <br />R$34,90 no cartão de crédito</p>
            </div>
          </div>
          <br />

          <div className={styles.card}>
            <img src="https://img.irroba.com.br/fit-in/150x150/filters:fill(fff):quality(80)/tadeaioo/catalog/air-bone/air-bone/tenis-masculino-ultrabone-air-bone-branco-1.jpg" alt="Produto 3" />
            <div className={styles.cardDetails}>
              <h2>PRODUTO 3, VENDIDO POR TAL</h2>
              <p className={styles.status}>Em estoque</p>
              <p className={styles.gift}>Este pedido é para presente</p>
              <div className={styles.quantityRow}>
                <label htmlFor="quantity-3">QTD:</label>
                <select id="quantity-3">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <a href="#" className={styles.excluir}>EXCLUIR</a> <p>|</p>
                <a href="#" className={styles.salvar}>SALVAR PARA MAIS TARDE</a>
              </div>
            </div>
            <div className={styles.price}>
              <p>R$ XX,XX</p>
              <p>à vista no Pix e boleto ou <br />R$34,90 no cartão de crédito</p>
            </div>
          </div>
          <br />

          <div className={styles.summary}>
            <p>Total (3 produtos):</p>
            <p className={styles.totalValue}>R$ XX,XX</p>
          </div>

          <button className={styles.finalizar}>FINALIZAR PEDIDO</button>
          <button className={styles.adicionarCarrinho}>ADICIONAR MAIS ITENS AO CARRINHO</button>
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

export default Carrinho;
