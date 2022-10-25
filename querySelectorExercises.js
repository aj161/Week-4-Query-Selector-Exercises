///Ex query selector Ex 1

console.log(document.querySelector('h1').textContent);
console.log(document.querySelector('#hero').textContent);
console.log(document.querySelector('.list').textContent);

console.log(document.querySelector('#dynamic-text').textContent = "Paragraph containing something called a dynamic text. Feel free too modify");


///Ex Query Selector Ex 2

let paragraphs = document.querySelectorAll('p');

console.log(paragraphs[1].textContent);

let list = document.querySelectorAll('li');
console.log(list);

console.log(list[2].textContent);
console.log(list.length);

let body = document.querySelector('body');

body.classList.add('darkMode');

let favFoods = ['Sushi', 'Poke', 'Pizza'];

dynamicListItems = document.querySelectorAll(".dynamic-list-item");
console.log(dynamicListItems);

dynamicListItems.forEach((item, index) => item.textContent = favFoods[index]);


