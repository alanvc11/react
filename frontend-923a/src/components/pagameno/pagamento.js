import React from 'react';
import styles from './pagamento.module.css';

function Pagamento() {
  return (
    <div className={styles.pagamentoContainer}>
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
          <a href="carrinho"><i className="bi bi-arrow-left-circle"></i></a>
          <a href="sucesso"><i className="bi bi-arrow-right-circle"></i></a>
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
          <div className={styles.container}>
            <div className={styles.containa}>
              <div className={styles.steps}>
                <div>Carrinho de compras</div>
                <div>Indetificação</div>
                <div className={styles.active}>Pagamento</div>
                <div>Obrigado</div>
              </div>

              <div className={styles.sliderContainer}>
                <input type="range" min="0" max="3" value="2" step="1" />
                <div className={styles.progress} style={{ width: '66%' }}></div>
              </div>
            </div>
            <br /><br />

            <header className={styles.pagamentoHeader}>
              <h1>PAGAMENTO <span className={styles.secureIcon}>🔒 AMBIENTE SEGURO</span></h1>
            </header>

            <div className={styles.card}>
              <div className={styles.resumo}>
                <h2>RESUMO DO PEDIDO</h2>
                <p>3 produtos <a href="#">Visualizar</a><span className={styles.preco}>R$ 127,95</span></p>
                <p>Frete - entrega em 5 dias <span className={styles.preco}>R$ 9,00</span></p>
                <hr />
                <p className={styles.total}>TOTAL <span className={styles.preco}>R$ 136,95</span></p>
              </div>

              <div className={styles.entrega}>
                <h2>ENTREGA PARA</h2>
                <p>Aline Maria</p>
                <p>Av. Paulo Dantas, 525 - apto 24<br />Jacarecica<br />Maceió - AL<br />CEP: 12345-678<br />E-mail: aline@gmail.com<br />Telefone: (82) 9 1234-5678</p>
                <a href="#" className={styles.alterarEndereco}>Alterar endereço de entrega</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.paymentSection}>
          <form>
            <h2>ESCOLHA A FORMA DE PAGAMENTO</h2>
            <div className={styles.paymentIcons}>
              <i className="fa-brands fa-cc-visa payment-icon"></i>
              <i className="fa-brands fa-cc-mastercard payment-icon"></i>
            </div>
            <br />

            <div className={styles.formGroup}>
              <label htmlFor="card-number">*NÚMERO DO CARTÃO</label> <br />
              <input type="text" id="card-number" /> <br /><br />
              <label htmlFor="card-name">*NOME IMPRESSO NO CARTÃO</label> <br />
              <input type="text" id="card-name" />
            </div>
            <br />

            <div className={styles.formGroup}>
              <label htmlFor="cvv" id="cvvl">CVV</label> <br />
              <select>
                <option value="Mês">Mês</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <select>
                <option value="Mês">Ano</option>
                <option value="10">2010</option>
                <option value="15">2015</option>
              </select>
              <input type="text" id="cvv" />
            </div>
            <br /><br />

            <button type="submit" className={styles.payButton}>PAGAR O PEDIDO</button>
          </form>
        </section>
      </main>
      <br /><br />

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
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pagamento;
