// src/Home.js

import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    function handleScroll() {
      const scrollY = window.pageYOffset;
      if (scrollY > 0) {
        header.classList.add('fixed-bottom');
        header.classList.remove('fixed-top');
      } else {
        header.classList.remove('fixed-bottom');
        header.classList.add('fixed-top');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <header ref={headerRef} className="header fixed-top">
        <nav className="nav">
          <ul>
            <li><a href="#">Bitcoin</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Recursos</a></li>
            <li><a href="#">Comunidade</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
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
              <p>As transações são protegidas por criptografia avançada e são registradas em um livro-razão público.</p>
            </li>
            <li>
              <h3>Rápido</h3>
              <p>As transações são processadas em minutos, independentemente da localização geográfica.</p>
            </li>
          </ul>
        </section>
        <section className="call-to-action">
          <h2>Participe da revolução</h2>
          <p>Compre, venda e use Bitcoin para mudar o futuro da moeda.</p>
          <button>Compre Bitcoin agora</button>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Bitcoin.org</p>
      </footer>
    </div>
  );
};

export default Home;