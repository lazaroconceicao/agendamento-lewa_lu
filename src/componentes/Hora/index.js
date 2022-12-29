import React, { useState, useEffect } from "react";
import { TimePicker } from "react-ios-time-picker";

const Hora = (props) => {
  const [selecioneHora, setSelecioneHora] = useState(null);

  useEffect(() => {props.aoAlterado(selecioneHora)}, [props, selecioneHora]);

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <TimePicker
        onChange={(horario) => setSelecioneHora(horario)}
        required={props.obrigatorio}
        style={{width: "300px"}}
      />
    </div>
  );
};

export default Hora;
