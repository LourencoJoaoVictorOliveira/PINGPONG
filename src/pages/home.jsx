import React from "react";
import "./home.css";
import Nav from "../components/nav";
import Noticias from "../components/noticia";

export default function Home() {
  return (
    <>
      <Nav />

      <div className="home-container">

        {/* Banner com vibe ping pong */}
        <section className="ping-banner">
          <img
            src="https://cdn-icons-png.flaticon.com/512/861/861512.png"
            alt="Raquete e bolinha"
            className="ping-icon"
          />
          <h1>Projeto Ping</h1>
          <p>O melhor conteúdo sobre tênis de mesa em um só lugar!</p>
        </section>

        {/* Destaques */}
        <section className="destaques">
          <div className="destaque-item">
            🏓 Produtos de qualidade
          </div>
          <div className="destaque-item">
            🎬 Vídeos e tutoriais
          </div>
          <div className="destaque-item">
            📰 Notícias atualizadas
          </div>
        </section>

        {/* Notícias */}
        <section className="home-noticias-section">
          <Noticias />
        </section>

      </div>
    </>
  );
}