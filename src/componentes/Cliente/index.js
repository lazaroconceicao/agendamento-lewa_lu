import './Cliente.css';

const Cliente = ({nome, imagem, horario, corDeFundo, data}) => {
    return(
        <div className='clientes'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
                
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h4>{data}</h4>
                <h5>{horario}</h5>
            </div>
        </div>
    )
}

export default Cliente;