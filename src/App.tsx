import './styles/theme.css'
import './styles/global.css';

import { Conteiner } from './components/Container';
import { Heading } from './components/Heading';

export function App() {
    return (
        <>
        <Conteiner>
            <Heading>LOGO</Heading>
        </Conteiner>
        <Conteiner>
            <Heading>MENU</Heading>
        </Conteiner>
        <Conteiner>
            <Heading>FORM</Heading>
        </Conteiner>
        <Conteiner>
            <Heading>FOOTER</Heading>
        </Conteiner>
    </>
    )
}

// export { App }; // Export nomeado, ele força a ser usado o mesmo nome no main.tsx