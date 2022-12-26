import Cliente from "../Cliente";
import "./Servico.css";

const Servico = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  return props.clientes.length > 0 ? (
    <section className="servicos" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="cliente">
        {console.log("teste ", props.clientes)}
        {props.clientes.map((cliente) => (
          <Cliente
            key={cliente.nome}
            corDeFundo={props.corPrimaria}
            nome={cliente.nome}
            data={cliente.data.toISOString()}
            horario={cliente.horario}
            imagem={cliente.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Servico;
