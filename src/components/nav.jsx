import react from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <>
      <header className="cabecalho">
        <h1>🏓 Projeto Ping</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/produtos">Produtos</Link>
        </nav>
      </header>
    </>
  );
}