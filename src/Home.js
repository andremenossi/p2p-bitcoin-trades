// src/Home.js

import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const Home = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    header.classList.add('top');

    function handleScroll() {
      const scrollY = window.pageYOffset;
      const headerHeight = header.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (scrollY > headerHeight - viewportHeight) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page container-fluid">
      <header ref={headerRef} className="header navbar navbar-expand-lg navbar-light bg-light">
        
        <nav className="nav navbar-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Bitcoin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recursos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Comunidade</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main container">
        <section className="hero">
          <h1>Bitcoin: a moeda digital descentralizada</h1>
          <p>Um sistema de pagamento peer-to-peer eletrônico que permite transações diretas entre indivíduos sem a necessidade de intermediários.</p>
          <button>Comece agora</button>
        </section>
        <section className="features">
          <h2>Recursos</h2>
          <ul>
            <li>
              <h3>Descentralizado</h3>
              <p>O Bitcoin não é controlado por nenhum governo ou instituição financeira.</p>
            </li>
            <li>
              <h3>Seguro</h3>
              <p>As transações são protegidas por criptografia avançada e são registradas em um livro-razão público chamado blockchain.</p>
            </li>
            <li>
              <h3>Limitado</h3>
              <p>Existem apenas 21 milhões de Bitcoins disponíveis, o que ajuda a prevenir a inflação.</p>
            </li>
            <li>
              <h3>Divisível</h3>
              <p>Os Bitcoins podem ser divididos em unidades menores, chamadas satoshis.</p>
            </li>
          </ul>
        </section>
        <section className="how-it-works">
          <h2>Como funciona</h2>
          <p>O Bitcoin utiliza uma rede peer-to-peer para processar transações e gerenciar a emissão de novas unidades.</p>
          <p>As transações são verificadas por nós da rede e registradas em um livro-razão público chamado blockchain.</p>
          <p>Os nós da rede competem para resolver um problema matemático complexo, que ajuda a proteger a rede e verificar as transações.</p>
        </section>
        <section className="get-started">
          <h2>Comece agora</h2>
          <p>Para começar a usar o Bitcoin, você precisará de uma carteira digital.</p>
          <p>Existem muitas opções de carteiras disponíveis, incluindo carteiras de software e hardware.</p>
          <p>Depois de escolher uma carteira, você precisará adquirir alguns Bitcoins.</p>
          <p>Você pode comprar Bitcoins em uma exchange ou receber como pagamento por bens ou serviços.</p>
        </section>
      </main>
    </div>
  );
};