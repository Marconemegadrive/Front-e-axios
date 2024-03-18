/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./components/logo";
import Cadastro from "./components/cadastroTela";
import Botao01 from "./components/botao01";
import Botao02 from "./components/botao02";
import Sociais from "./components/sociais";
import Home from "./components/Home";
import Input from "../src/components/form/input";
import LoginCliente from "./components/loginCliente";
import LoginColab from "./components/loginColaborador";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logincliente" element={<LoginCliente />} />
        <Route path="logincolab" element={<LoginColab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;