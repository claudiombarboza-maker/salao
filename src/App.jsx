import { useState } from "react";
import "./App.css";

const servicos = [
  { icone: "✂️", titulo: "Cabelo", texto: "Corte, coloração, mechas, hidratação e escova." },
  { icone: "💅", titulo: "Unhas", texto: "Manicure, pedicure, esmaltação em gel e alongamento." },
  { icone: "👁️", titulo: "Olhar", texto: "Design de sobrancelhas, henna e extensão de cílios." },
  { icone: "💄", titulo: "Maquiagem", texto: "Produção para festas, eventos e noivas." },
];

const precos = [
  { nome: "Corte feminino", detalhe: "Lavagem e finalização inclusas", valor: "R$ 90" },
  { nome: "Coloração", detalhe: "Conforme comprimento e técnica", valor: "R$ 180" },
  { nome: "Manicure + pedicure", detalhe: "Esmaltação tradicional", valor: "R$ 70" },
  { nome: "Design de sobrancelhas", detalhe: "Com ou sem henna", valor: "R$ 45" },
  { nome: "Maquiagem social", detalhe: "Pele, olhos e boca", valor: "R$ 150" },
];

const numeros = [
  { n: "10+", t: "anos de experiência" },
  { n: "5.000", t: "clientes atendidas" },
  { n: "100%", t: "materiais esterilizados" },
];

const WHATSAPP = "5548999999999"; // troque pelo número real

 function App() {
  const [form, setForm] = useState({ nome: "", servico: "Cabelo", data: "" });

  const mudar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const [a, m, d] = form.data.split("-");
    const msg = `Olá! Sou ${form.nome} e gostaria de agendar ${form.servico} para ${d}/${m}/${a}.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="logo" href="#topo">
            Maison <span>Aurora</span>
          </a>
          <nav aria-label="Principal">
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#precos">Preços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#agendar">Agendar</a></li>
            </ul>
          </nav>
          <a className="btn" href="#agendar">Agendar</a>
        </div>
      </header>

      <main id="topo">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">Salão de beleza</div>
              <h1>Realce o que já é <em>seu</em>.</h1>
              <p className="lead">
                Cabelo, unhas, sobrancelhas e maquiagem em um ambiente acolhedor,
                com profissionais que escutam você antes de começar.
              </p>
              <div className="cta">
                <a className="btn" href="#agendar">Agendar horário</a>
                <a className="btn ghost" href="#servicos">Ver serviços</a>
              </div>
            </div>
            <div className="art" role="img" aria-label="Ilustração decorativa em tons de rosa" />
          </div>
        </section> </main>

      <section id="servicos">
        <div className="wrap">
          <div className="eyebrow">Serviços</div>
          <h2>Cuidado em cada detalhe</h2>
          <p className="lead">Escolha um serviço ou combine vários em uma única visita.</p>
          <div className="cards">
            {servicos.map((s) => (
              <article className="card" key={s.titulo}>
                <div className="ico">{s.icone}</div>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="precos" className="alt">
        <div className="wrap">
          <div className="eyebrow">Preços</div>
          <h2>Valores a partir de</h2>
          <div className="price">
            {precos.map((p) => (
              <div className="row" key={p.nome}>
                <div>
                  <b>{p.nome}</b>
                  <small>{p.detalhe}</small>
                </div>
                <div className="v">{p.valor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre">
        <div className="wrap">
          <div className="eyebrow">Sobre nós</div>
          <h2>Um espaço para se sentir bem</h2>
          <p className="lead">
            Somos uma equipe pequena e dedicada. Usamos produtos de qualidade,
            higienizamos tudo com rigor e deixamos o seu tempo livre de pressa.
          </p>
          <div className="why">
            {numeros.map((x) => (
              <div key={x.t}>
                <b>{x.n}</b>
                <span>{x.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agendar" className="alt">
        <div className="wrap book">
          <div className="info">
            <div className="eyebrow">Agendamento</div>
            <h2>Reserve seu horário</h2>
            <p>Preencha o formulário e enviaremos sua solicitação pelo WhatsApp para confirmar.</p>
            <p><b>Horário:</b> ter a sáb, 9h às 19h</p>
            <p><b>Endereço:</b> Rua das Flores, 123</p>
          </div>
          <form onSubmit={enviar}>
            <label>
              Nome
              <input name="nome" value={form.nome} onChange={mudar} required placeholder="Seu nome" />
            </label>
            <label>
              Serviço
              <select name="servico" value={form.servico} onChange={mudar}>
                <option>Cabelo</option>
                <option>Unhas</option>
                <option>Sobrancelhas / cílios</option>
                <option>Maquiagem</option>
              </select>
            </label>
            <label>
              Data preferida
              <input type="date" name="data" value={form.data} onChange={mudar} required />
            </label>
            <button className="btn" type="submit">Enviar pelo WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  )
  }

  export default App;