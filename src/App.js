import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Produto } from './components/Produto';
import { Produtos } from './components/Produtos';

function App() {
  return (
    <div
      style={{
        // background: 'red',
        width: '960px',
        height: '96vh',
        margin: '0 auto',
      }}
    >
      <BrowserRouter>
        <Header />

        <div
          className='content'
          style={{
            // backgroundColor: 'green',
            padding: '15px 0',
          }}
        >
          <Routes>
            <Route path='/' element={<Produtos />} />
            <Route path='produto/:id' element={<Produto />} />
            <Route path='contato' element={<Contato />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
