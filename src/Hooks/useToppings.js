import { useState } from "react";

const toppingList = {
    Base: [{ choice: "Gluten Free Base", price: 4 }],
    Garnish: [{ choice: "Chilli Flakes", price: 0 }, { choice: "Oregano", price: 0 }, { choice: "Peri-Peri Sauce Base", price: 1 }, { choice: "Pesto Aioli", price: 1 }, { choice: "Mint Yoghurt", price: 1 }],
    Cheese: [{ choice: "Cheese", price: 2 }, { choice: "Feta Cheese", price: 2 }, { choice: "Parmesan Cheese", price: 1 }],
    Sauce: [{ choice: "BBQ Sauce Base", price: 0 }, { choice: "Garlic Base", price: 0 }, { choice: "Hot Chili Sauce Base", price: 0 }, { choice: "Napolitana Sauce", price: 0 }, { choice: "Tandoori Sauce Base", price: 0 }, { choice: "Tomato Base", price: 0 }, { choice: "Sweet Chilli Sauce", price: 0 }],
    Meat: [{ choice: "Bacon", price: 2 }, { choice: "Beef", price: 2 }, { choice: "Cabanossi", price: 2 }, { choice: "Chicken", price: 2 }, { choice: "Egg", price: 2 }, { choice: "Ham", price: 2 }, { choice: "Hot Pepperoni", price: 2 }],
    Seafood: [{ choice: "Anchovies", price: 2 }, { choice: "Prawns", price: 3 }],
    Veggies: [{ choice: "Capsicum", price: 1 }, { choice: "Eggplant", price: 1 }, { choice: "Fresh Tomato", price: 1 }, { choice: "Jalapenos", price: 1 }, { choice: "Mushroom", price: 1 }, { choice: "Olives", price: 1 }, { choice: "Onions", price: 1 }, { choice: "Pineapple", price: 1 }, { choice: "Roasted Eggplant", price: 1 }, { choice: "Shallots", price: 1 }, { choice: "Sundried Tomato", price: 1 }]
}

const toppingNames = [];
const toppingPrices = [];
Object.values(toppingList).forEach(arrOfObjs => arrOfObjs.forEach(item => toppingNames.push(item.choice)))
Object.values(toppingList).forEach(arrOfObjs => arrOfObjs.forEach(item => toppingPrices.push(item.price)))
console.log(toppingNames)
console.log(toppingPrices)

const getDefaultToppings = () => {
    return toppingNames.map((topping, i) => (
        {
            name: topping,
            checked: false,
            price: toppingPrices[i]
        }
    ))

};


getDefaultToppings()//?

export function useToppings(defaultTopping) {
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings())

    function checkTopping(index) {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings)
    }

    return {
        checkTopping,
        toppings
    }
}

