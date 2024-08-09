// src/Home.js

import React, { useEffect, useRef } from 'react';
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
    <div className="home-page">
      <header ref={headerRef} className="header">
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
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;