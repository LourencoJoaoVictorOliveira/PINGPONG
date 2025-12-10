import React from "react";
import './contato.css'
import Nav from "../components/nav";

export default function Contato() {
  return (
    <>
    <Nav/> 

    <div className="contato-container">

      
      <div className="coluna1">
      <h1 id="Text">Seja bem-vindo a nossa página de contato!</h1>
      <h1 className="contato-titulo">Ping Pong JL</h1>
      <div className="contato-infos">
        <p><strong>E-mail:</strong> contato@pingpongstore.com</p>
        <p><strong>Telefone / WhatsApp:</strong> (11) 99999-9999</p>
        <p><strong>Endereço:</strong> Rua Exemplo, 123 - Centro, São Paulo - SP</p>
        <p><strong>Horário de Atendimento:</strong> Seg a Sex, 08h às 18h</p>
      </div>

      <div className="contato-redes">
        <h2>Redes Sociais</h2>
        <ul>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
      </div>
      <div className="contato-form">
      <form>
        <h2>Fale Conosco</h2>
        <label type="">Nome
        <input type="text" placeholder="Seu nome" required /> </label> <br />
        <label type="">Email
        <input type="email" placeholder="Seu e-mail" required /> </label> <br />
        <label type="">Escreva sua mensagem 
        <textarea placeholder="Sua mensagem" required></textarea> </label><br />
        <button type="submit">Enviar</button>
      </form>
      </div>
    </div>
    </>
  );
} 
