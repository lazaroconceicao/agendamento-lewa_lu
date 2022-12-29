import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import Date from "../Date";
import Hora from "../Hora";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [imagem, setImagem] = useState("");
  const [servico, seteServico] = useState("");

  const aoSalvar = (evento) => {
    console.log(data)
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome: nome,
      data: data,
      horario: horario,
      imagem: imagem,
      servico: servico,
    });
    setNome("");
    setData("");
    setImagem('')
    seteServico("");
    setHorario("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha o formálrio par agendar o cliente</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digitie o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Date
          label="Data"
          obrigatorio={true}
          valor={data}
          aoAlterado={(valor) => setData(valor)}
        />
        <Hora
          label="Horário"          
          obrigatorio={true}
          valor={horario}
          aoAlterado={(valor) => setHorario(valor)}
        />
        { <CampoTexto
          label="Imagem"
          placeholder="Digitie o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        /> }
        <ListaSuspensa
          obrigatorio={true}
          label="Serviços"
          itens={props.servicos}
          valor={servico}
          aoAlterado={(valor) => seteServico(valor)}
        />
        <Botao>Agendar Cliente</Botao>
      </form>
    </section>
  );
};

export default Formulario;
