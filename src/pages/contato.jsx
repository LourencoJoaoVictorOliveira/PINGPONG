import React from "react";
import './contato.css'
import Nav from "../components/nav";

export default function Contato() {
  return (
    <>
    <Nav/>
    <div className='Coluna'>
    <div className='Text'>
      <h1>Seja bem-vindo a nossa página de contato!</h1>
    </div>
    <div className="contato-container">
      {/* Nome da Empresa */}
      <h1 className="contato-titulo">Ping Pong JL</h1>

      {/* Informações de contato */}
      <div className="contato-infos">
        <p><strong>E-mail:</strong> contato@pingpongstore.com</p>
        <p><strong>Telefone / WhatsApp:</strong> (11) 99999-9999</p>
        <p><strong>Endereço:</strong> Rua Exemplo, 123 - Centro, São Paulo - SP</p>
        <p><strong>Horário de Atendimento:</strong> Seg a Sex, 08h às 18h</p>
      </div>

      {/* Redes Sociais */}
      <div className="contato-redes">
        <h2>Redes Sociais</h2>
        <ul>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        </ul>
      </div>

      {/* Formulário de Contato */}
      <form className="contato-form">
        <h2>Fale Conosco</h2>
        <label htmlFor="">Nome</label> <br />
        <input type="text" placeholder="Seu nome" required /> <br />
        <label htmlFor="">Email</label> <br />
        <input type="email" placeholder="Seu e-mail" required /> <br />
        <label htmlFor="">Escreva sua mensagem </label> <br />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
    </>
  );
} 
