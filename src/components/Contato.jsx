import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import MachineImage from '../image/machine-write.jpeg';
import { Head } from './Head';

export const Contato = () => {
  return (
    <HStack className='animate__animated animate__backInUp' py={10}>
      <Head title='ShopTech | Contato' description='Entre em contato' />

      <HStack
        overflowX='hidden'
        h='full'
        boxShadow='-5px 7px 16px -2px #000000'
        borderRadius='lg'
      >
        <Image src={MachineImage} boxSize={600} />
      </HStack>

      <VStack p={10}>
        <Heading fontSize={32}>Entre em contato</Heading>
        <Text fontSize={26}>email@email</Text>
        <Text fontSize={26}>Rua referencia, 9990</Text>
      </VStack>
    </HStack>
  );
};
