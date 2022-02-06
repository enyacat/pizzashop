import React from "react";
import styled from "styled-components";
import { foods } from "../Data/FoodData"
import { Food, FoodGrid, FoodLabel } from "./FoodGrid"


const MenuStyled = styled.div`
    height: 1000px;
    margin: 0px 400px 50px 20px;
`

export function Menu() {
    return <MenuStyled>
        {Object.entries(foods).map(([sectionName, foodsBySection]) => (
            <>
                <h1>{sectionName}</h1>
                <FoodGrid>
                    {foodsBySection.map(food => (
                        <Food img={food.img}>
                            <FoodLabel>{food.name}</FoodLabel>
                        </Food>
                    ))}
                </FoodGrid>
            </>)
        )}


    </MenuStyled>

}

