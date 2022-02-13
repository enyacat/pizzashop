import styled from "styled-components";
import React from "react";
import { formatPrice } from "../Data/FoodData";

const ToppingGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    height: 300px;
    overflow: scroll;
    
`
const ToppingCheckbox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`

const CheckboxLabel = styled.label`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    flex-flow:row wrap;
    padding: 3px 0px;
    align-items: auto;
`



export function Toppings({ toppings, checkTopping }) {
    return (
        <ToppingGrid>
            {toppings.map((topping, i) => (<CheckboxLabel>
                <ToppingCheckbox
                    type="checkbox"
                    checked={topping.checked}
                    onClick={() => {
                        checkTopping(i);
                    }}
                />
                <div>{topping.name}</div>
                <div>{formatPrice(topping.price)}</div>
            </CheckboxLabel>))}
        </ToppingGrid>
    )
}