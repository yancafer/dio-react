import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";


import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
 } from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    <Button title="Cadastrar"/>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </Row>
            </Container>
        </Wrapper>
    );

}

export { Header }