import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '../components/Cabecalho';
import { Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Array = () => {
    return (
        <>
            <Cabecalho />
            <div className='bg-secondary py-3 text-white text-center mb-3'>
                <Container>
                    <h1 className='text-center text-light display-1 mt-3'>Página de array</h1>
                </Container>
            </div>
            <div style={{textAlign: 'center'}}>Array</div>
            <div className={styles.rodape}>
                <p>&copy; Todos os direitos reservados</p>
            </div>

        </>
    )
}

export default Array