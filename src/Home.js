// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Bem-vindo ao nosso site de negociações P2P de Bitcoin</h1>
      </header>
      <main className="main">
        <section className="hero">
          <h2>Compre e venda Bitcoin de forma segura e fácil</h2>
          <button>Comece agora</button>
        </section>
        <section className="features">
          <h2>Recursos</h2>
          <ul>
            <li>Compre e venda Bitcoin de forma segura</li>
            <li>Transações rápidas e fáceis</li>
            <li>Interface intuitiva e fácil de usar</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;