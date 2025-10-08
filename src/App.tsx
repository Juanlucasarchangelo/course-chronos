import "./styles/theme.css";
import "./styles/global.css";

import { Conteiner } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

export function App() {
  return (
    <>
      <Conteiner>
        <Logo />
      </Conteiner>
      <Conteiner>
        <Menu />
      </Conteiner>
      <Conteiner>
        <CountDown />
      </Conteiner>
      <Conteiner>
        <Heading>FOOTER</Heading>
      </Conteiner>
    </>
  );
}

// export { App }; // Export nomeado, ele força a ser usado o mesmo nome no main.tsx
