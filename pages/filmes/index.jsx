import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/apiFilmes';

const index = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        
        apiFilmes.get('/movie/popular').then(resultado=>{setFilmes(resultado.data.results)})//<-pode ser qualquer nome

    },[])

    return (
        <Pagina titulo="Filmes">
            <Container>
                <h1>Index</h1>
            </Container>
            {filmes.map(item => (
                <p>{item.title}</p>
            ))}
        </Pagina>
    )
}

export default index