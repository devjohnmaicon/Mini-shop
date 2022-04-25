import { Container, HStack, VStack } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Produto } from './components/Produto';
import { Produtos } from './components/Produtos';

function App() {
  return (
    <VStack w='full' h='100vh' justifyContent='space-between'>

      <Container maxW='container.lg'>
        <Header />

        <Routes>
          <Route path='/' element={<Produtos />} />
          <Route path='produto/:id' element={<Produto />} />
          <Route path='contato' element={<Contato />} />
        </Routes>
      </Container>

      <Footer />
    </VStack>
  );
}

export default App;
