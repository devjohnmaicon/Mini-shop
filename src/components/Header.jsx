import React from 'react';
import { ButtonGroup } from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import '../style.css';

export const Header = () => {
  return (
    <ButtonGroup py={6} direction='row' align='start' gap={4}>
      <NavLink className='link' to='/'>
        Produtos
      </NavLink>

      <NavLink className='link' to='contato'>
        Contato
      </NavLink>
    </ButtonGroup>
  );
};
