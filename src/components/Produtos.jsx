import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Head } from './Head';

export const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((res) => setProdutos(res));
  }, []);

  if (produtos === null) return null;

  return (
    <div
      style={{
        // backgroundColor: 'red',
        position: 'relative',
        height: '700px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        // gridTemplateRows: 'repeat(5, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
      }}
    >
      <Head title={`shopTech`} />

      {produtos.map((produto) => (
        <Link
          to={`produto/${produto.id}`}
          key={produto.id}
          style={{ width: '300px', display: 'flex', flexDirection: 'column' }}
        >
          <h2>{produto.nome}</h2>
          <img
            style={{ maxWidth: '110px' }}
            src={produto.fotos[0].src}
            alt=''
          />
          {/* <p style={{ width: '50px' }}>{produto.descricao}</p> */}
          <span>{`R$ ${produto.preco}`}</span>
        </Link>
      ))}
    </div>
  );
};
