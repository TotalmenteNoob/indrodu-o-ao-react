import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '../components/Cabecalho';
import { Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import Pagina from '../components/Pagina';

const Array = () => {

    const carros = ['Civic', 'Tucson', 'Celta', 'Tempra', 'Marea', 'Doblo']

    return (
        <>
            <Pagina titulo="Arrays">
                <Container className='d-flex  justify-content-center '>
                    <ol className='list-group list-group-numbered'>
                        {carros.map(carro => (
                            <li className='list-group-item'>{carro}</li>
                        ))}
                    </ol>
                </Container>
            </Pagina>
        </>
    )
}

export default Array