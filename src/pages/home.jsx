import React from "react";
import "./home.css";
import Nav from "../components/nav";
import Noticias from "../components/noticia";
import { Link } from 'react-router-dom';

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
            <Link to=''><p>Setups recomendados</p></Link>
          </div>
          <div className="destaque-item">
            <Link to=''><p>Tutoriais, canal Fumihiro Tênis de Mesa</p></Link>
          </div>
          <div className="destaque-item">
            <p>Notícias Recentes</p>
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