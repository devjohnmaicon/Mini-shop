import { HStack, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Stack p={6} direction='row' align='start'>
      <NavLink to='/'>Produtos</NavLink>
      <NavLink to='contato'>Contato</NavLink>
    </Stack>
  );
};
