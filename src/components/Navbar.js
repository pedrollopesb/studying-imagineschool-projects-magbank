import React from "react";
// Primeiro precisamos importar o React, pois todo componente precisa ter o React importado.
import {
  Navbar,
  Nav,
  Container,
  ButtonGroup,
  Button,
  NavDropdown
} from "react-bootstrap";
import "./Navbar.scss";
// O ./ é relativo a esse mesmo arquivo que estamos trabalhando, querendo que olhe na mesma pasta que ele está e ache um arquivo "irmão"
import logo from "../assets/logo.svg";
// O ../ é relativo a ter que voltar uma pasta, de onde o Navbar.js está, para importar o logo.

const Navigation = () => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Magbank logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      {/* Estará controlando a exibição no mobile, tablet e desktop */}
      <Navbar.Collapse id="navbarScroll">
        {/* Ícone que abre no mobile quando clica no menu hamburguer */}
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Button>
          <Button variant="outline-light">abra sua conta</Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
// Quando uma variável for um componente, por convenção, a primeira letra deve ser maiúscula.
// Todo componente por padrão, recebe um parâmetro que não é exibido, mas isso é um padrão do React - () antes da arrow function, chamado "prop", que é um agregador de todos os parâmetros que passaremos para o Header neste caso no App.js.

export default Navigation;
// Exportando a função para importarmos em outros arquivos.
