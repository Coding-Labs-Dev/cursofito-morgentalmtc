/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo-vermelho.png';
import fogo from '../assets/images/fogo.jpg';
import agua from '../assets/images/agua.jpg';
import terra from '../assets/images/terra.jpg';
import metal from '../assets/images/metal.jpg';
import madeira from '../assets/images/madeira.jpg';
import tao from '../assets/images/tao.jpg';
import banner01 from '../assets/images/banner01.jpg';
import banner02 from '../assets/images/banner02.jpg';
import banner03 from '../assets/images/banner03-v2.jpg';
import eleonoraComucci from '../assets/images/eleonora-comucci.jpg';
import ritaVetucci from '../assets/images/rita-vetucci.jpg';

const modulos = [
  {
    numero: 'I',
    topicos: ['Aspectos Gerais', 'Elemento Terra, seus desequilíbrios e fórmulas de tratamento'],
    local: 'Goiânia',
    data: '05 e 06 de Outubro',
    src: terra,
  },
  {
    numero: 'II',
    topicos: [
      'Botânica e Controle de Qualidade das Matérias Primas',
      'Elemento Metal, seus desequilíbrios e fórmulas de tratamento',
    ],
    local: 'Brasília',
    data: '03 e 03 de Novembro',
    src: metal,
  },
  {
    numero: 'III',
    topicos: ['Fitoquímica e Farmacologia', 'Elemento Água, seus desequilíbrios e fórmulas de tratamento'],
    local: 'Goiânia',
    data: '14 e 15 de Dezembro',
    src: agua,
  },
  {
    numero: 'IV',
    topicos: ['Fitoterapia Teórica/Prática', 'Elemento Fogo, seus desequilíbrios e fórmulas de tratamento'],
    local: 'Brasília',
    data: '01 e 02 de Fevereiro',
    src: fogo,
  },
  {
    numero: 'V',
    topicos: ['Ambulatório Prático', 'Elemento Madeira, seus desequilíbrios e fórmulas de tratamento'],
    local: 'Goiânia',
    data: '07 e 08 de Março',
    src: madeira,
  },
  {
    numero: 'VI',
    topicos: ['Análise dos Naturopáticos e das Fórmulas Magistrais'],
    local: 'Brasília',
    data: '25 e 26 de Abril',
    src: tao,
  },
];

export default function Main(props) {
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(false);

  function handleAnchor(e) {
    e.preventDefault();
    const target = e.currentTarget.hash;
    window.scroll({
      top: document.querySelector(target).getBoundingClientRect().top + window.scrollY,
      left: 0,
      behavior: 'smooth',
    });
  }

  async function handleSubmit() {
    props.handleEmail(email);
    await window.fbq('track', 'CompleteRegistration');
    await fetch(`${process.env.REACT_APP_API}/subscribe`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    props.history.push('/inscricao');
  }

  function validateField(event) {
    const tglClass = event.type === 'blur' ? true : !['change', 'focus'].includes(event.type);
    const field = event.target || event;
    const { value } = field;
    setEmail(value);

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = regex.test(value);

    if (!result) {
      if (tglClass) {
        field.classList.add('error');
      }
      setSubmit(false);
      return false;
    }
    if (tglClass) {
      field.classList.remove('error');
    }
    setSubmit(true);
    return true;
  }

  function SubmitButton() {
    return submit ? (
      <button type="submit" className="cta" onClick={handleSubmit}>
        <span>
          Quero aprender a prescrever
          <br />
          fitoterápicos e naturopáticos
        </span>
      </button>
    ) : (
      <button type="submit" className="cta" disabled>
        <span>
          Quero aprender a prescrever
          <br />
          fitoterápicos e naturopáticos
        </span>
      </button>
    );
  }

  return (
    <>
      <section className="landing" id="landing">
        <div className="full-bg">
          <div className="img" style={{ backgroundImage: `url(${banner01})` }} />
        </div>
        <div className="container">
          <header>
            <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
            <h2 className="light no-padding">Curso</h2>
            <h1>Fórmulas Chinesas e Ervas Isoladas</h1>
            <h2 className="no-padding">Brasília e Goiânia</h2>
            <h3 className="no-padding">Início em Outubro / 2019</h3>
          </header>
          <div className="main">
            <h3 className="light no-padding">Você quer enriquecer o seu repertório de tratamento?</h3>
            <h3 className="light no-padding">Oferecer um tratamento completo ao seu paciente?</h3>
          </div>
          <div className="cta-box">
            <form>
              <div className="field-cta">
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu melhor e-mail"
                  onChange={e => validateField(e)}
                  onBlur={e => validateField(e)}
                />
              </div>
              <SubmitButton />
            </form>
            <ul>
              <li className="arrow">
                <a href="#fitoterapia" onClick={handleAnchor}>
                  <FontAwesomeIcon icon={faChevronDown} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <section id="fitoterapia">
        <h2>A Fitoterapia</h2>
        <div className="container">
          <div className="double">
            <div className="column painel">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div className="column">
              <p>
                Você sabe da importância da prescrição de um fitoterápico? Você sabe como prescrever um fitoterápico? E
                o que acontece quando a prescrição não é adequada? Se você não sabe responder a essas perguntas ou quer
                saber mais sobre a fitoterapia, este Workshop é para você!
              </p>
              <p>
                Na China, a fitoterapia é amplamente utilizada pois quase todo paciente em tratamento recebe uma fórmula
                fitoterápica, a qual torna-se essencial para restabelecer a saúde do paciente. Isto mostra o quão
                importante é a fitoterapia dentro da Medicina Tradicional Chinesa!
              </p>
              <p>
                Nos últimos trinta anos, dezenas de profissionais da MTC ansiavam e buscavam formas de utilizar as ervas
                e fórmulas chinesas com credibilidade e respeito. Hoje, no Brasil, todo profissional habilitado pode
                prescrever as fórmulas milenares chinesas. Seus resultados e benefícios estão sendo comprovados e o seu
                uso vem crescendo a cada dia mais.
              </p>
              <p>O segredo de um bom resultado é saber prescrever a melhor fórmula para o paciente.</p>
            </div>
          </div>
        </div>
      </section> */}
      <section id="curso" style={{ backgroundColor: '#fceed0' }}>
        <h2>O que você vai aprender?</h2>
        <div className="container">
          <div className="cards">
            {modulos.map(modulo => {
              return (
                <div className="card" key={modulo.nome}>
                  <div className="background" style={{ backgroundImage: `url(${modulo.src})` }} />
                  <div className="content">
                    <h3>Módulo {modulo.numero}</h3>
                    <ul>
                      {modulo.topicos.map(topico => {
                        return <li key={topico}>{topico}</li>;
                      })}
                    </ul>
                    <div className="date">
                      <h4>{modulo.local}</h4>
                      <h5>{modulo.data}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="sobre">
        <div className="full-bg">
          <div className="img" style={{ backgroundImage: `url(${banner02})` }} />
        </div>
        <h2 className="no-transform">Quem é Prof. Paulo Américo Vieira?</h2>
        <div className="container">
          <div className="profile">{/* <div className="img" style={{ backgroundImage: `url()` }} /> */}</div>
          <p>
            Formado em Acupuntura desde 1988, com 30 anos de experiência em Fitoterapia Tradicional Chinesa, estudou com
            diversos mestres na China nas Universidades de Beijing e FuJien. É pioneiro na introdução da Fitoterapia
            Chinesa no Brasil, fundando a primeira farmácia de Fórmulas Magistrais Chinesas do Brasil, a Naturalmed, e
            criador do Sistema de Tinturas Fitoterápicas. Lançou dois livros, FHC Fórmulas Herbais Chinesas e Saúde e
            Longevidade pela Fitoterapia Constitucional Chinesa, focados na prescrição uso de fitoterápicos. Criou o
            Projeto Vamos à China para intercâmbio de acupuntura, o qual já permitiu o aprimoramento de centenas de
            alunos e profissionais pela imersão em universidades e instituições da China. É também professor de diversas
            escolas de acupuntura.
          </p>
        </div>
      </section>
      <section id="depoimentos" style={{ backgroundColor: '#fceed0' }}>
        {/* <div className="full-bg">
          <div className="img" style={{ backgroundImage: `url(${banner03})` }} />
        </div> */}
        <h2>Depoimentos</h2>
        <div className="container">
          <div className="double">
            <div className="column">
              <div className="box transparent">
                <div className="profile">
                  <div className="img" style={{ backgroundImage: `url(${eleonoraComucci})` }} />
                </div>
                <p className="depoimento">
                  O Curso é uma excelente oportunidade para quem gosta de estudar e está buscando flexibilidade. A
                  Fitoterapia está se tornando um recurso cada vez mais sólido e validado pela Ciência moderna, para o
                  tratamento de diversos distúrbios físicos e mentais. Com a expertise do Professor Paulo Américo Viera,
                  é muito fácil e agradável estudar esta Arte Milenar.
                </p>
                <p className="align-right">- Eleonora Comucci</p>
              </div>
            </div>
            <div className="column">
              <div className="box transparent">
                <div className="profile">
                  <div className="img" style={{ backgroundImage: `url(${ritaVetucci})` }} />
                </div>
                <p className="depoimento">
                  Excelente são os cursos de Paulo Américo, profundo conhecimento e sabedoria em lidar com fórmulas
                  chinesas e naturopaticos brasileiros, super recomendo, tanto para os apaixonados por ervas brasileiras
                  e fitoterápicos, bem como profissionais que buscam um aprendizado de confiança, aprofundamento e
                  indicações da Fitoterapia e naturopaticos brasileiros.
                </p>
                <p className="align-right">- Rita Vetucci</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="investimento">
        <div className="full-bg">
          <div className="img" style={{ backgroundImage: `url(${banner03})` }} />
        </div>
        <div className="container">
          <div className="box">
            <h2>Investimento</h2>
            <div className="price">
              <span className="value">6X R$550,00</span>
              <h4>Taxa de Matrícula: R$150,00</h4>
            </div>
            <div className="info">
              <span className="detail">
                Certificado de formação pela Brasil Oriente e Morgental Medicina Tradicional Chinesa.
              </span>
            </div>
            <div className="cta-box">
              <form>
                <div className="field-cta">
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite seu melhor e-mail"
                    onChange={e => validateField(e)}
                    onBlur={e => validateField(e)}
                  />
                </div>
                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
