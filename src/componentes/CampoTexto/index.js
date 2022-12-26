// import { useState } from 'react';
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificad = `${props.placeholder}...`;

  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={placeholderModificad}
      />
    </div>
  );
};

export default CampoTexto;
