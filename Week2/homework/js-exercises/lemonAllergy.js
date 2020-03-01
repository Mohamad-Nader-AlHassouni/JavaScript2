'use strict'

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const myFruitBasket = fruitBasket.filter(function(fruit){
   return fruit !== 'Lemon'
});
console.log(`"My mom bought me a fruit basket, containing ${myFruitBasket} !"`);
