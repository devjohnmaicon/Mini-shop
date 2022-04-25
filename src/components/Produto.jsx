import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Head } from './Head';

export const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (error) {
        setError('Houve algum erro');
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div>"Carregando..."</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <div>
      <Head title={`shopTech | ${produto.nome}`} />

      {produto.fotos.map((foto) => (
        <img src={foto.src} key={foto.src} alt='' />
      ))}

      <div>
        <h1>{produto.nome}</h1>
        <span>R$ {produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>
    </div>
  );
};
