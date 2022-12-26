import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Servico from './componentes/Servico';

function App() {

  const servicos = [
    {
      nome: 'Permanente',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Relaxamento',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Hidratação',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Escova',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Algas',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5'
    },
    {
      nome: 'Botox',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Depilação',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [clientes, setClientes] = useState([])

  const aoNovoColaboradorAdicionado = (cliente) => {
    setClientes([...clientes, cliente])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario servicos={servicos.map(servico => servico.nome)} aoColaboradorCadastrado={cliente => aoNovoColaboradorAdicionado(cliente)}/>
      {servicos.map(servico => 
      <Servico 
        key={servico.nome} 
        nome={servico.nome} 
        corPrimaria={servico.corPrimaria} 
        corSecundaria={servico.corSecundaria}
        clientes={clientes.filter(cliente => cliente.servico === servico.nome)}
      />)}
    </div>
  );
}

export default App;
