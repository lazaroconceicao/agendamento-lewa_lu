import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = (props) => {
  const [selecioneData, setSelecioneData] = useState(null);

  useEffect(()=>{props.aoAlterado(selecioneData)}, [props, selecioneData])

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
      <DatePicker
        selected={selecioneData}
        onChange={(data) => setSelecioneData(data)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecione a data"
        required={props.obrigatorio}       
      />
    </div>
  );
};

export default Date;
