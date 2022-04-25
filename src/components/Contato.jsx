import React from 'react';

import MachineImage from '../image/machine-write.jpeg';
import { Head } from './Head';

export const Contato = () => {
  return (
    <section>
      <Head title='ShopTech | Contato' description='Entre em contato' />
      <img src={MachineImage} alt='' srcset='' />
      <div>
        <h2>Entre em contato</h2>
        <ul>
          <li>email@email</li>
          <li>99999999</li>
          <li>Rua referencia, 9999</li>
        </ul>
      </div>
    </section>
  );
};
