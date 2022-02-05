import styled from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgb(255 255 255 / 70%);
    padding: 5px;  
`

export const Food = styled(Title)`
    height:100px;
    padding: 10px;
    font-size: 1.5rem;
    background-image: ${({ img }) => `url(${img});
    `}
    background-position: center;
    background-size: cover;
    filter: contrast(0.75);
    border-radius: 7px;
    box-shadow: 0px 0px 10px 2px #a5a5a5;
    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`