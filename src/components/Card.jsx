import React, { useEffect, useState } from 'react';
import { Badge, Box, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Head } from './Head';

export const Card = ({ produto }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`produto/${produto.id}`);
  };

  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      cursor='pointer'
      onClick={redirect}
      justifyContent='center'
      className='animate__animated animate__fadeIn'
    >
      <Image src={produto.fotos[0].src} boxSize='320px' w='full' objectFit='cover' />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Novo
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            a beds &bull; b baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {produto.nome}
        </Box>

        <Box>
          {`R$ ${produto.preco},00`}
          <Box as='span' color='gray.600' fontSize='sm' />
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < 3 ? 'teal.500' : 'gray.300'} />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {34} avaliações
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
