import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Head } from './Head';
import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';

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
    <HStack>
      <Head title={`shopTech | ${produto.nome}`} />

      <HStack
        overflowX='hidden'
        h='full'
        w={950}
        boxShadow='-5px 7px 16px -2px #000000'
        borderRadius='lg'
        className='animate__animated animate__fadeInLeftBig'
      >
        {produto.fotos.map((foto) => (
          <Image src={foto.src} key={foto.src} alt='' />
        ))}
      </HStack>

      <VStack p={10} 
        className='animate__animated animate__fadeInRightBig'
        >
        <Heading fontSize={52}>{produto.nome}</Heading>
        <Text fontSize={20} p={5}>
          {produto.descricao}
        </Text>
        <Text fontSize={36}>R$ {produto.preco},00</Text>
      </VStack>
    </HStack>
  );
};
