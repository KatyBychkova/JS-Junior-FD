const coffees = ['Latte', 'Cappuccino', 'Americano'];

let favoriteCoffeeName = prompt('Поиск кофе по названию:');
favoriteCoffeeName = favoriteCoffeeName.trim().toLocaleLowerCase();

const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLocaleLowerCase() === favoriteCoffeeName);
const favoriteCoffee = coffees[favoriteCoffeeIndex];
if (favoriteCoffee) {
    alert(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}
