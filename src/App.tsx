import "./styles/theme.css";
import "./styles/global.css";

import { Conteiner } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

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
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput type='text' id='task' labelText='Task'></DefaultInput>
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Conteiner>
      <Conteiner>
        <Heading>FOOTER</Heading>
      </Conteiner>
    </>
  );
}

// export { App }; // Export nomeado, ele força a ser usado o mesmo nome no main.tsx
