// As funções deve ser em PascalCase
import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css';

export function App() { // Export nomeado
    console.log('oi')

    return (
        // React Fragment (Elemento da linha abaixo), como não posso retornar mais de um elementor para o main eu uso este recurso para que não aparece mais uma div no inspec e encapsule os elementos em um so para se rendenizado no main
        <> 
            <Heading />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium hic nulla commodi nemo obcaecati doloribus deserunt est, eaque aut quis exercitationem incidunt eius ullam consectetur. Ea ullam dignissimos deserunt earum.</p>
        </>
    )
}

// export { App }; // Export nomeado, ele força a ser usado o mesmo nome no main.tsx