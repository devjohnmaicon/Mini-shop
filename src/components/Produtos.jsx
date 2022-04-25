import { Box, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Card';
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
    <SimpleGrid columns={3} spacing='25px'>
      <Head title={`shopTech`} />

      {produtos.map((produto) => (
        <Card key={produto.id} produto={produto} />
      ))}
    </SimpleGrid>
  );
};
