import React from "react"
import styled from 'styled-components'
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";
const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: limegreen;
    text-shadow: 1px 1px 3px #ffffffe0;
`

export function Navbar() {
    return <NavbarStyled>
        <Logo>
            Pizza 2 Go 🍕
        </Logo>
    </NavbarStyled>;
}