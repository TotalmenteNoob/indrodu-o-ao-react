import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '../components/Cabecalho';
import styles from '../styles/Home.module.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
      <Cabecalho />
      <div className='bg-secondary py-3 text-white text-center mb-3'>
        <Container>
          <h1 className='text-center text-light display-1 mt-3'>Página inicial</h1>
        </Container>
      </div>
      <h1 className='text-center text-success display-1 mt-3'>Seja bem-vindo</h1>
      <Pagina/>
    </>
  )
}
